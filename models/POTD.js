const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const POTD = new Schema(
    {
        easy: {
            type: String,
        },

        medium: {
            type: String,
        },

        hard: {
            type: String,
        },
    }
)