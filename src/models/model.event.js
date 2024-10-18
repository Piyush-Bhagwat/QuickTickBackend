const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
    },
    schedule: [
        {
            time: String, // Example: "10:00 AM - 12:00 PM"
            activity: String, // Example: "Inauguration Ceremony"
        },
    ],
    imageUrls: [String], // Array to store multiple image URLs
    organizedBy: {
        type: String,
        required: true, // Example: "MCA", "MBA"
    },
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    pricing: {
        type: Map,
        of: Number, // Store prices for different courses (e.g., { "MCA": 0, "MBA": 100 })
        default: {}, // { "MCA": 0, "MBA": 100 }
    },
    attendees: [
        {
            userId: { type: Schema.Types.ObjectId, ref: "User" },
            course: String, // The course of the attendee (e.g., MCA, MBA)
            paymentStatus: {
                type: String,
                enum: ["paid", "free"],
                default: "free",
            },
        },
    ],
    seats: { type: Number, required: true },
    seatsFilled: { type: Number, required: true, default: 0 },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Virtual field for remaining seats
eventSchema.virtual("remainingSeats").get(function () {
    return this.seats - this.seatsFilled;
});

// Middleware to update 'updatedAt' automatically
eventSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Event", eventSchema);
