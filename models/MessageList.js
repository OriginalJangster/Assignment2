// Import the mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema
const MessageListSchema = new Schema({
    message: {
        type: String,
        required: [true, 'Message content is required']
    },
    timestamps: {
        type: Date,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        required: [true, 'Timestamp is required']
    }
})

const MessageList = mongoose.model('MessageList', MessageListSchema);

module.exports = MessageList;