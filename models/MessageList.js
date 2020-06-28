// Import the mongoose module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema
const MessageListSchema = new Schema({
    message: {
        type: String,
        required: [true, 'Message content is required']
    }},  {
    timestamps: true
});

// Note: Mongoose transforms name of collection to lowercase + adds plural "s" at end
const MessageList = mongoose.model('MessageList', MessageListSchema);

module.exports = MessageList;