// backend/routes/user.js
import express from 'express';
import auth from '../middleware/auth.js';
import User from '../models/User.js';

const router = express.Router();

// Middleware: only user role
router.use(auth(['user']));

// Example route: Get user's membership
router.get('/membership', async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('membership');
        res.json({ membership: user.membership });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;  // ✅ default export
