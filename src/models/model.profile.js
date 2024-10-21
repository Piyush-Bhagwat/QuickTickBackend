const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
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
profileSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

const profileModel = mongoose.model("Profile", profileSchema);
module.exports = profileModel;
