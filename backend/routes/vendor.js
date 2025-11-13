// backend/routes/vendor.js
import express from 'express';
import auth from '../middleware/auth.js';
import Vendor from '../models/Vendor.js';

const router = express.Router();

// Middleware: only vendor role
router.use(auth(['vendor']));

// Add new product
router.post('/product', async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const vendor = await Vendor.findById(req.user.id);
        if (!vendor.products) vendor.products = [];
        vendor.products.push({ name, price, quantity });
        await vendor.save();
        res.json({ message: 'Product added', products: vendor.products });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get vendor products
router.get('/products', async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.user.id);
        res.json(vendor.products || []);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router; // ✅ default export
