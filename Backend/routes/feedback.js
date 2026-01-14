const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// @route   POST /api/feedback
// @desc    Submit feedback
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, category, message, rating } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ msg: 'Please enter all required fields' });
        }

        const newFeedback = new Feedback({
            name,
            email,
            category,
            message,
            rating
        });

        await newFeedback.save();
        res.status(201).json(newFeedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
