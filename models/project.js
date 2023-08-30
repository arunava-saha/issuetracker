const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    },
    Issue: [
        { ref: 'Issue', type: mongoose.Schema.ObjectId }
    ]
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema);