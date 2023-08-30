const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Labels: [{
        type: String,
        trim: true,
        required: true
    }],
    Author: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Issue', issueSchema);