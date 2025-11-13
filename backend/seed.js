const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { MONGO_URI } = require('./config');
const User = require('./models/User');
const Vendor = require('./models/Vendor');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const seed = async () => {
    // Admin
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = new User({ name: 'Admin', email: 'admin@example.com', password: adminPassword, role: 'admin' });
    
    // Vendor
    const vendorPassword = await bcrypt.hash('vendor123', 10);
    const vendor = new Vendor({ name: 'Vendor1', email: 'vendor@example.com', password: vendorPassword });

    // User
    const userPassword = await bcrypt.hash('user123', 10);
    const user = new User({ name: 'User1', email: 'user@example.com', password: userPassword, role: 'user' });

    await User.deleteMany({});
    await Vendor.deleteMany({});

    await admin.save();
    await vendor.save();
    await user.save();

    console.log('Seed data created');
    process.exit();
}

seed();
