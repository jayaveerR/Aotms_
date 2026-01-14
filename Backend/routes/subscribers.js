const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// @route   POST /api/subscribers
// @desc    Subscribe to newsletter
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ msg: 'Please enter an email address' });
        }

        let subscriber = await Subscriber.findOne({ email });
        if (subscriber) {
            return res.status(400).json({ msg: 'Email already subscribed' });
        }

        subscriber = new Subscriber({ email });
        await subscriber.save();

        res.status(201).json({ msg: 'Subscribed successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
