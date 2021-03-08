const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Message = require('../../models/Message');
const { validate } = require('../../models/User');
const validateMessageInput = require('../../validation/messages');

router.post('/', (req, res) => {
    const { errors, isValid } = validate(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
})