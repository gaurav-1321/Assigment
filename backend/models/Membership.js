// backend/models/Membership.js
import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  duration: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: () => new Date(Date.now() + 1000*60*60*24*30*6) } // default 6 months
}, { timestamps: true });

export default mongoose.model('Membership', membershipSchema);  // ✅ default export
