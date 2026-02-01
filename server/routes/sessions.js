import express from 'express';
import Session from '../models/Session.js';

const router = express.Router();

// Get all sessions
router.get('/', async (req, res) => {
    try {
        const sessions = await Session.find().populate('mentor mentee', 'name email');
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new session booking
router.post('/', async (req, res) => {
    const session = new Session({
        mentor: req.body.mentor,
        mentee: req.body.mentee,
        topic: req.body.topic,
        date: req.body.date,
    });

    try {
        const newSession = await session.save();
        res.status(201).json(newSession);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
