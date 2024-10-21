const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  eventsOrganized: [
    {
      eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
      organizedDate: { type: Date, default: Date.now },
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
adminSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const adminModel = mongoose.model('Admin', adminSchema);
module.exports = adminModel;
