const express = require("express");
const router = express.Router();
const MessageList = require('../../models/MessageList');

/* GET home page. */
router.get('/api', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get a list of messages
router.get("/api/messages", function(req, res, next) {
  MessageList.find({}).then((messages) => {
    res.send(messages);
  })
});

// Add a new message to the database
router.post('/api/messages', (req, res, next) => {
  MessageList.create(req.body).then((message) => {
    res.send(message);
  }).catch(next);
});

// Update a message in the database
router.put('/api/messages/:id', (req, res, next) => {
  MessageList.findByIdAndUpdate({_id: req.params.id}).then(() => {
    MessageList.findOne({_id: req.params.id}).then((message) => {
      res.send(message)
    })
  })
});

// Delete a message in the database
router.delete('/api/messages/:id', (req, res, next) => {
  MessageList.findByIdAndDelete({_id: req.params.id}).then((message) => {
    res.send(message)
  })
});

module.exports = router;
