//quan ly cong vien quoc gia
const mongoose = require("mongoose");

const parkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    country: {
        type: String,
        required: true
    },

    description: String,

    location: String,

    latitude: Number,

    longitude: Number,

    weather: String,

    image: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Park", parkSchema);