// routes/habitRoutes.js

const express = require('express');
const router = express.Router();
const Habit = require('../models/habit');

// Get all habits
router.get('/', async (req, res) => {
    try {
        const habits = await Habit.find();
        res.render('index', { habits });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Get habit details
router.get('/:id', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        res.render('habits', { habit });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Update habit status for a specific day
router.post('/:id', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        const { status, day } = req.body;
        habit.statuses[day] = status;
        await habit.save();
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

// Update habit status for today
router.post('/:id/today', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        const { status } = req.body;
        habit.statuses[6] = status;
        await habit.save();
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

module.exports = router;
