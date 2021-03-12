const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Message = require('../../models/Message');
// const User = require('../../models/User');
const validateMessageInput = require('../../validation/messages');

router.get('/', (req, res) => {
    Message.find().sort({ createdAt: 1})
    .then(messages => res.json(messages))
    .catch(err => res.status(404).json({nomessagesfound: 'No messages found'}));
})


router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateMessageInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newMessage = new Message({
    user: req.user.username,
    content: req.body.content
  });
  newMessage
    .save()
    .then((message) => res.json(message))
    .catch((err) => res.status(404).json({ invalid: 'Invalid message' }));
});

module.exports = router;