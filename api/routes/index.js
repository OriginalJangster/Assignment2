const express = require("express");
const router = express.Router();
const MessageList = require('../../models/MessageList');

// Get a list of messages
router.get("/allMsg", async (req, res) => {
  try {
    const messages = await MessageList.find();
    res.json(messages);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});

// Add a new message to the database
router.post('/addMsg', async (req, res) => {
  const messages = new MessageList({
    message: req.body.message
  });

  try {
    const savedMessage = await messages.save();
    res.json(savedMessage);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});

// Delete a message in the database
router.delete('/deleteMsg/:messageId', async (req, res) => {
  try {
    const removedMessage = await MessageList.remove({_id: req.params.messageId});
    res.json(removedMessage);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});

// Update a message in the database
router.patch('/editMsg/:messageId', async (req, res) => {
  try {
    const editedMessage = await MessageList.updateOne(
        {_id: req.params.messageId},
        {$set: {message: req.body.message}}
        );
    res.json(editedMessage);
  } catch(err) {
      res.status(400).json('Error: ' + err);
  }
});

// delete all messages (clears list)
router.delete('/deleteAll', async (req, res) => {
  try {
    const clearedMessages = await MessageList.deleteMany({});
    res.json(clearedMessages);
  } catch(err) {
    res.status(400).json('Error: ' + err);
  }
});


module.exports = router;
