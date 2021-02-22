const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Card = require('../../models/Card');
// const validateCardInput = require('../../validation/cards');

// router.get("/test", (req, res) => res.json({ msg: "This is the cards route "}))

// hard cards
// 'api/cards/:userId/hard'
// Card.find(user: req.params.userid, rating: 3)
//     .then(cards => res.json(cards))
// medium cards
// easy cards
// daily cards

// create card

const setDueDate = (rating, updatedAt=new Date()) => {
    switch (rating) {
        case '1':
            return updatedAt.setDate(updatedAt.getDate() + 28);
        case '2':
            return updatedAt.setDate(updatedAt.getDate() + 7);
        case '3':
            return updatedAt.setDate(updatedAt.getDate() + 3);
    }
}
router.get('/user/:user_id', (req, res) => {
  Card.find({ user: req.params.user_id })
    .then((cards) => res.json(cards))
    .catch((err) => res.status(404).json({ nocardsfound: 'No cards found' }));
});

router.post('/', (req, res) => {
    let dueDate = setDueDate(req.body.rating);
    // console.log(req.body.updatedAt);
    const newCard = new Card({
        lc_number: req.body.lc_number,
        rating: req.body.rating,
        due_date: dueDate,
    });
    
    newCard.save().then(card => res.json(card));
})
// edit card







module.exports = router;