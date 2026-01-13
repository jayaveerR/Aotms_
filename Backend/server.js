const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Security & Performance Middleware
app.use(helmet()); // Security headers
app.use(compression()); // Gzip compression
app.use(express.json({ limit: '10mb' }));

// Secure CORS Configuration
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            process.env.CLIENT_URL || 'http://localhost:5173',
            'http://localhost:5173', // Development
            'http://localhost:3000',  // Alternative dev port
            'http://localhost:8080'   // User's current port
        ];

        // Allow requests with no origin (mobile apps, Postman, etc.)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        } else {
            return callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Rate Limiting - Prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});
app.use('/api/', limiter);

// Stricter rate limit for auth endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // 5 login attempts per 15 minutes
    message: 'Too many login attempts, please try again later.',
});

// DB Connection with optimized settings
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            maxPoolSize: 50, // Increased connection pool
            minPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log('MongoDB Connected with optimized pool');
    } catch (err) {
        console.error('MongoDB Connection Error:', err.message);
        process.exit(1);
    }
};
connectDB();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Routes
app.use('/api/auth', authLimiter, require('./routes/auth'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/registrations', require('./routes/registrations'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/events', require('./routes/events'));
app.use('/api/winners', require('./routes/winners'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
        mongoose.connection.close(false, () => {
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    });
});

const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`⚡ Performance optimizations enabled`);
});

module.exports = app;
