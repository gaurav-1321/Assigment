import express from 'express';
import auth from '../middleware/auth.js';
import Membership from '../models/Membership.js';
import User from '../models/User.js';

const router = express.Router();

// Middleware: only admin
router.use(auth(['admin']));

// Example route: Add membership
router.post('/membership', async (req, res) => {
    const { userId, duration } = req.body;
    try {
        const membership = new Membership({ user: userId, duration });
        await membership.save();
        await User.findByIdAndUpdate(userId, { membership: membership._id });
        res.json({ message: 'Membership added', membership });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;  // ✅ important
