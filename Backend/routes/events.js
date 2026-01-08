const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Workshop = require('../models/Workshop');
const Hackathon = require('../models/Hackathon');

// Get events based on type
router.get('/', async (req, res) => {
    try {
        const { type } = req.query;
        let events = [];

        if (type === 'workshop') {
            events = await Workshop.find({});
        } else if (type === 'hackathon') {
            events = await Hackathon.find({});
        } else {
            // If no type specified, maybe return both? Or error?
            // Existing frontend behavior asks for specific type. 
            // Let's return combined if no type, or just empty.
            const w = await Workshop.find({});
            const h = await Hackathon.find({});
            events = [...w, ...h];
        }
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Register for hackathon (Internal)
router.post('/hackathons/:id/register', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        // Find by custom ID (like 'h1') or MongoDB _id, assuming custom ID here based on seeds
        const hackathon = await Hackathon.findOne({ id: id });
        if (!hackathon) {
            return res.status(404).json({ message: "Hackathon not found" });
        }

        hackathon.registrations.push({ name, email });
        await hackathon.save();

        res.json({ message: "Registered successfully", hackathon });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed data
router.post('/seed', async (req, res) => {
    const workshopData = [
        {
            id: "w1",
            name: "UI/UX Master",
            tagline: "ADVANCED DESIGN CONDUCT",
            mode: "Offline",
            date: "April 10, 2026",
            duration: "6 Hours",
            bannerUrl: "/images/Workshop-1.jpg",
            thumbnailUrl: "/images/Workshop-1.jpg",
            description: "Experience an intensive UI/UX design marathon. This workshop conduct focuses on building industry-standard prototypes from scratch using FIGMA and user research principles.",
            eligibility: "Aspiring Designers & Product Architects",
            level: "Intermediate",
            buttonText: "Register for Workshop",
            whatYouWillLearn: [
                "User-Centric Design Frameworks",
                "High-Fidelity Prototyping in Figma",
                "Interactive Design Patterns",
                "Conducting User Feedback Sessions"
            ],
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScy4nq8z5VIziCp694pPTZmRZCLV51sWGERzRlCXZ2JIezYtA/viewform?usp=dialog",
            type: "workshop"
        },
        {
            id: "w2",
            name: "MERN Hack-Workshop",
            tagline: "FULL-STACK DEVELOPMENT CONDUCT",
            mode: "Online",
            date: "May 15-18, 2026",
            duration: "24 Hours (4 Days)",
            bannerUrl: "/images/Workshop-2.jpg",
            thumbnailUrl: "/images/Workshop-2.jpg",
            description: "A hybrid hackathon-workshop conduct. Build a full-stack MERN application while receiving live architectural guidance from senior engineers.",
            eligibility: "Engineering Students & MERN Beginners",
            level: "Advanced",
            buttonText: "Register for Workshop",
            whatYouWillLearn: [
                "Scalable Node.js API Architecture",
                "React State Management & Hooks",
                "MongoDB Schema Design Patterns",
                "Deployment in MERN Ecosystem"
            ],
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScy4nq8z5VIziCp694pPTZmRZCLV51sWGERzRlCXZ2JIezYtA/viewform?usp=dialog",
            type: "workshop"
        }
    ];

    const hackathonData = [
        {
            id: "h1",
            name: "Global UI/UX Design Hackathon",
            tagline: "48-HOUR DESIGN MARATHON CONDUCT",
            mode: "Online",
            date: "July 20-22, 2026",
            duration: "48 Hours",
            bannerUrl: "/images/Hackathon-1.jpg",
            thumbnailUrl: "/images/Hackathon-1.jpg",
            description: "A premier global design event. Compete with designers across the world to build innovative solutions for real-world sustainability problems.",
            eligibility: "Student & Professional Designers",
            level: "All Levels",
            whatYouWillLearn: [
                "Rapid Problem Solving",
                "Collaborative Design Workflows",
                "Presentation & Pitching Skills",
                "Advanced Figma Prototyping"
            ],
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScy4nq8z5VIziCp694pPTZmRZCLV51sWGERzRlCXZ2JIezYtA/viewform?usp=dialog",
            buttonText: "Register for Hackathon",
            type: "hackathon"
        },
        {
            id: "h2",
            name: "Full-Stack Innovation Hack",
            tagline: "72-HOUR DEVELOPMENT CONDUCT",
            mode: "Offline",
            date: "August 12-15, 2026",
            duration: "72 Hours",
            bannerUrl: "/images/Hackathon-2.jpg",
            thumbnailUrl: "/images/Hackathon-2.jpg",
            description: "A high-stakes coding marathon focused on building scalable MERN applications. Work with mentors from top tech companies to architect your vision.",
            eligibility: "Engineering Students & Professional Developers",
            level: "Intermediate",
            whatYouWillLearn: [
                "Production-Grade API Design",
                "Real-time Data Processing",
                "System Architecture Optimization",
                "Team Collaboration & Version Control"
            ],
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScy4nq8z5VIziCp694pPTZmRZCLV51sWGERzRlCXZ2JIezYtA/viewform?usp=dialog",
            buttonText: "Register for Hackathon",
            type: "hackathon"
        },
        {
            id: "h3",
            name: "AI-Powered Product Sprint",
            tagline: "24-HOUR RAPID PROTOTYPING CONDUCT",
            mode: "Online",
            date: "September 05, 2026",
            duration: "24 Hours",
            bannerUrl: "/images/Hackathon-3.jpg",
            thumbnailUrl: "/images/Hackathon-3.jpg",
            description: "Integrate modern AI tools into your design and development workflow. Build intelligent interfaces and automated backends in a race against time.",
            eligibility: "Tech Enthusiasts & Product Designers",
            level: "Advanced",
            whatYouWillLearn: [
                "AI API Integration (OpenAI/Anthropic)",
                "Prompt Engineering for UI",
                "Dynamic Content Generation",
                "Fast-track Deployment Workflows"
            ],
            registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScy4nq8z5VIziCp694pPTZmRZCLV51sWGERzRlCXZ2JIezYtA/viewform?usp=dialog",
            buttonText: "Register for Hackathon",
            type: "hackathon"
        }
    ];

    try {
        // Cleanup old collection if exists
        try {
            await mongoose.connection.db.dropCollection('events');
        } catch (e) {
            // Ignore if collection doesn't exist
        }

        await Workshop.deleteMany({});
        await Hackathon.deleteMany({});

        const createdWorkshops = await Workshop.insertMany(workshopData);
        const createdHackathons = await Hackathon.insertMany(hackathonData);

        res.json({ workshops: createdWorkshops, hackathons: createdHackathons });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
