const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Card = require('../../models/Card');
const User = require('../../models/User');
const validateCardInput = require('../../validation/cards');
const findProblem = require('./lc_api');

const setDueDate = (interval, updatedAt = new Date()) => {
      return updatedAt.setDate(updatedAt.getDate() + interval);
};
router.get('/user/:user_id', (req, res) => {
    // Card.find({ user: req.params.user_id })
  Card.find({ user: req.params.user_id })
    .sort({ dueDate: -1 })
    .then((cards) => res.json(cards))
    .catch((err) => res.status(404).json({ nocardsfound: 'No cards found' }));
});

router.get('/:id', (req, res) => {
  Card.findById(req.params.id)
    .then((card) => res.json(card))
    .catch((err) => res.status(404).json({ nocardfound: 'No card with that ID' }));
});

router.post(
  '/', //open
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCardInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    // check if title with user already exist;

    Card.findOne({ user: req.user.id, probNum: req.body.probNum }).then((card) => {
      if (card) {
        errors.probNum = 'You already have this problem in your flashcard collection';
        return res.status(400).json(errors);
      } else {
        let problem = findProblem(parseInt(req.body.probNum));
        console.log(problem);
        if (!problem) {
          res.status(404).json({noproblemfound: 'No Leetcode problem with that number'});
          return 0;
        }
        let dueDate = new Date();
        dueDate = dueDate.setDate(dueDate.getDate() + 2);
        const thisUrl = `https://leetcode.com/problems/${problem['stat']['question__title_slug']}/`;
        const newCard = new Card({
          user: req.user.id,
          probNum: req.body.probNum,
          title: problem['stat']['question__title'],
          lcDifficulty: problem['difficulty']['level'],
          rating: parseInt(req.body.rating),
          url: thisUrl,
          dueDate: dueDate,
          notes: req.body.notes,
          interval: [2]
        });
        newCard
          .save()
          .then((card) => res.json(card))
          .catch(err => (res.status(404).json({noproblemfound: 'No Leetcode problem with that number'})));
      }
    });
  }
);

// edit card
router.put('/:id', (req, res) => {
  Card.findById(req.body._id).then((card) => {
    if (card) {
      let today = new Date();
      if (card.dueDate <= today) {
        if (req.body.rating) {
          card.rating = parseInt(req.body.rating);
          let lastInt = card.interval.last;
          switch (req.body.rating) {
            case 1:
              lastInt = Math.floor(lastInt * .4) + 1;
              break;
            case 2:
              lastInt = lastInt;
              break;
            case 3:
              lastInt = lastInt * 2;
              break;
          }
          card.dueDate = setDueDate(lastInt);
          card.interval.push(lastInt);
        }} else {
        if (req.body.rating) {
          card.rating = parseInt(req.body.rating);
        }
      }

      if (req.body.notes) {
        card.notes = req.body.notes;
      }
      card.save().then((card) => res.json(card));
    } else {
      res.status(404).json({ nocardfound: 'No card with that ID' });
    }
  });
});

module.exports = router;
