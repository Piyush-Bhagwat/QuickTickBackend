const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  course: {
    type: String,
    required: true,
    trim: true,
  },
  courseYear: {
    type: Number,
    required: true,
  },
  registeredEvents: [
    {
      eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
      registrationDate: { type: Date, default: Date.now },
      paymentStatus: { 
        type: String, 
        enum: ['paid', 'unpaid'], 
        default: 'unpaid' 
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update 'updatedAt'
userSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
