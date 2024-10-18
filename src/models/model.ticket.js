const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
    uid: { type: Schema.Types.ObjectId, ref: "User", required: true },
    eventId: { type: Schema.Types.ObjectId, ref: "Event", required: true },
    bookingDate: { type: Date, default: Date.now },
    seatsPurchased: { type: Number, required: true, min: 1, max: 4},
    price: { type: Number, required: true }, // Total price for all seats
    course: { type: String, required: true }, // User's course for pricing logic
    paymentRef: { type: String, required: true }, // Payment reference or ID
    status: {
        type: String,
        enum: ["valid", "used", "canceled"],
        default: "valid",
    },
    qrCode: { type: String, required: true },
    checkInTime: { type: Date }, // Optional: Check-in time when the ticket is scanned
    ticketType: {
        type: String,
        enum: ["VIP", "Regular", "Early Bird"],
        default: "Regular",
    },
    barcode: { type: String }, // Optional: Backup barcode URL
});

module.exports = mongoose.model("Ticket", ticketSchema);
