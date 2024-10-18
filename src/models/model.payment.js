const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
  ticketId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Ticket', 
    required: true 
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  eventId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  currency: { 
    type: String, 
    default: 'INR' 
  },
  paymentMethod: { 
    type: String, 
    enum: ['UPI', 'Card', 'NetBanking'], 
    required: true 
  },
  paymentStatus: { 
    type: String, 
    enum: ['success', 'failed', 'pending'], 
    default: 'pending' 
  },
  transactionId: { 
    type: String, 
    unique: true, 
    required: true 
  },
  paymentDate: { 
    type: Date, 
    default: Date.now 
  },
  failureReason: { 
    type: String 
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
