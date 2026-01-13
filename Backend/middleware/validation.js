const { body, validationResult } = require('express-validator');

// Validation middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("❌ VALIDATION FAILED");
        console.log("📦 Request Body:", req.body);
        console.log("🚫 Validation Errors:", errors.array());
        return res.status(400).json({
            success: false,
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }
    next();
};

// Registration validation rules
const registerValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2-50 characters')
        .matches(/^[a-zA-Z\s]+$/).withMessage('Name can only contain letters and spaces'),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
        .withMessage('Password must contain uppercase, lowercase, number, and special character'),

    body('phone')
        .optional()
        .trim()
        .matches(/^\+?[0-9\s-]{7,15}$/).withMessage('Invalid phone number format'),

    body('qualification')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Qualification too long'),

    body('college')
        .optional()
        .trim()
        .isLength({ min: 2, max: 100 }).withMessage('College name must be between 2-100 characters')
        .matches(/^[a-zA-Z\s.,-]+$/).withMessage('College name contains invalid characters'),

    body('passoutYear')
        .optional()
        .isInt({ min: 1980, max: 2030 }).withMessage('Invalid Passout Year')
];

// Login validation rules
const loginValidation = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),

    body('password')
        .notEmpty().withMessage('Password is required')
];

// Email validation (forgot password)
const emailValidation = [
    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail()
];

// Password reset validation
const resetPasswordValidation = [
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
        .withMessage('Password must contain uppercase, lowercase, number, and special character')
];

// Contact form validation
const contactValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2-50 characters')
        .escape(), // Prevent XSS

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),

    body('phone')
        .optional()
        .trim()
        .matches(/^\+?[0-9\s-]{7,15}$/).withMessage('Invalid phone number format'),

    body('message')
        .trim()
        .notEmpty().withMessage('Message is required')
        .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10-1000 characters')
        .escape() // Prevent XSS
];

// Lead validation
const leadValidation = [
    body('name')
        .trim()
        .notEmpty().withMessage('Name is required')
        .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2-50 characters')
        .escape(),

    body('email')
        .trim()
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format')
        .normalizeEmail(),

    body('phone')
        .trim()
        .notEmpty().withMessage('Phone is required')
        .matches(/^\+?[0-9\s-]{7,15}$/).withMessage('Invalid phone number format'),

    body('course')
        .optional()
        .trim()
        .isLength({ max: 100 }).withMessage('Course name too long')
        .escape()
];

module.exports = {
    validate,
    registerValidation,
    loginValidation,
    emailValidation,
    resetPasswordValidation,
    contactValidation,
    leadValidation
};
