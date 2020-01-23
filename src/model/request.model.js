const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema(
    {
        butlerId: {
            type: Number,
            required: true,
            trim: true
        },
        requestId: {
            type: String,
            required: true,
            trim: true
        },
        hours: {
            type: String,
            required: false,
            trim: true
        },
        status: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        timestamps: true,
        useNestedStrict: true,
    }
);
module.exports = mongoose.model('requests', requestSchema);
