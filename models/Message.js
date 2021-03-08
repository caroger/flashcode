const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            index: true,
        },

        content: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = Message = mongoose.model('Message', MessageSchema);