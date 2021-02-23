const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Card = require('../../models/Card');
const validateCardInput = require('../../validation/cards');

<<<<<<< HEAD
const axios = require('axios');
// set lcdata to all problems
let lcdata;
axios.get('https://leetcode.com/api/problems/all/').then((res) => {
  lcdata = res.data;
});

const findProblemStat = (probNum) => {
  data = lcdata['stat_status_pairs']
    .map((stat) => stat['stat'])
    .find((stat) => stat['frontend_question_id'] === probNum);
  return data;
};
const findProblemDifficulty = (probNum) => {
  data = lcdata['stat_status_pairs']
    .find((stat) => stat['stat']['frontend_question_id'] === probNum);
  return data['difficulty']['level']
};

// intended usage
// stat = findProblemStat(20);
// difficulty = findProblemDifficulty(20);
// url = ()`${stat['question__title_slug'])}`;
// title = stat['question__title'];
// lcDiff = difficulty;

=======
const findProblem = require('./lc_api');
>>>>>>> refector_lcAPI

const setDueDate = (rating, updatedAt = new Date()) => {
  switch (rating) {
    case '1':
      return updatedAt.setDate(updatedAt.getDate() + 28);
    case '2':
      return updatedAt.setDate(updatedAt.getDate() + 7);
    case '3':
      return updatedAt.setDate(updatedAt.getDate() + 3);
  }
};
router.get('/user/:user_id', (req, res) => {
<<<<<<< HEAD
    Card.find({ user: req.params.user_id })
=======
  console.log(findProblem(20));
  Card.find({ user: req.params.user_id })
>>>>>>> refector_lcAPI
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

    Card.findOne({ user: req.params.user_id, title: req.body.title }).then((card) => {
      if (card) {
        errors.title = 'You already have this problem in your flashcard collection';
        return res.status(400).json(errors);
      } else {
        let dueDate = setDueDate(req.body.rating);
        let urlTitle = req.body.title.split(' ').join('-');
        const thisUrl = `https://leetcode.com/problems/${urlTitle}/`;
        // console.log(req.body.updatedAt);
        const newCard = new Card({
          user: req.user.id,
          title: req.body.title,
          rating: req.body.rating,
          url: thisUrl,
          dueDate: dueDate,
          notes: req.body.notes
        //   refactor title, url, need questionnumber from user input, 
        });
        newCard.save().then((card) => res.json(card));
      }
    });
  }
);

// edit card
router.put('/:id', (req, res) => {
  Card.findById(req.params.id).then((card) => {
    if (card) {
      if (req.body.rating) {
        card.rating = req.body.rating;
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
