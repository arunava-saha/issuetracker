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
    Issues: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Issue'
        }
    ],
    Labels: [{
        type: String,
        trim: true
    }]
}, { timestamps: true })

module.exports = mongoose.model('Project', projectSchema);