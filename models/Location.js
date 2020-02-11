const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // might add association to user later
});

module.exports = mongoose.model('location', LocationSchema); // ('modelname', Schema)
