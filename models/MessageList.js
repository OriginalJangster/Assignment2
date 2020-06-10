// Import the mongoose module
import {Schema} from "mongoose";

const mongoose = require('mongoose');

// Set up default mongoose connection
const mongoDB = "mongodb+srv://sandbox-776eb.mongodb.net/test";
mongoose.connect(mongoDB, { useNewUrlParser: true});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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