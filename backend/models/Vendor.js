import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  products: [{ name: String, price: Number, quantity: Number }]
}, { timestamps: true });

export default mongoose.model('Vendor', vendorSchema);
