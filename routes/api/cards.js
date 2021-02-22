const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Card = require('../../models/Card');
const validateCardInput = require('../../validation/cards');

router.get("/test", (req, res) => res.json({ msg: "This is the cards route "}))

module.exports = router;