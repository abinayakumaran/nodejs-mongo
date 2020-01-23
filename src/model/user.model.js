const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        butlerId: {
            type: Number,
            required: true,
            trim: true
        },
        butlerName: {
            type: String,
            required: true,
            trim: true
        },
        requests: {
            type: Array,
            required: false,
            trim: true
        },
    },
    {
        timestamps: true,
        useNestedStrict: true,
        toJSON: { virtuals: true }
    }
);
module.exports = mongoose.model('butlers', userSchema);
