const express = require('express');
const router = express.Router();
const passport = require('passport');
const Card = require('../../models/Card');
const Deck = require('../../models/Deck');
const User = require('../../models/User');
const validateDeckInput = require('../../validation/cards');


// get user decks
router.get('/user/:user_id', (req, res) => {
  // Card.find({ user: req.params.user_id })
  Deck.find({ user: req.params.user_id })
    .sort({ name: 1 })
    .then((decks) => res.json(decks))
    .catch((err) => res.status(404).json({ nodecksfound: 'No decks found' }));
});

// Get one deck
router.get('/:id', (req, res) => {
  Deck.findById(req.params.id)
    .then((deck) => res.json(deck))
    .catch((err) => res.status(404).json({ nodeckfound: 'No deck with that ID' }));
});

// create one deck
router.post('/', 
    passport.authenticate('jwt', { session: false}),
    (req, res) => {
        const { errors, isValid } = validateCardInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }
    // check if deck with user and name already exists;

        Deck.findOne({ user: req.user.id, name: req.body.name}).then(deck => {
            if (deck) {
                errors.name = `You already have a deck named "${req.body.name}"`;
                return res.status(400).json(errors);
            } else {
                const newDeck = new Deck({
                    user: req.user.id,
                    name: req.body.name,
                    deckCards: []
                });
            }
        });
    }
);

// edit deck, edit title or add cards
router.put(':id/', (req, res) => {
    Deck.findById(req.params.id).then(deck => {
        if (deck) {
            if (req.body.card) {
                deck.cards.push(req.body.card.id);
            }

            if (req.body.name) {
                deck.name = req.body.name;
            }
            deck.save()
                .then(deck => res.json(deck))
                .catch(err => res.status(500).json({ systemerror: 'System Error'}));
        } else {
            res.status(404).json({ nodeckfound: 'No deck with that ID' });
        }
    })
})

// delete cards
router.put(':id/remove_card', (req, res) => {
    Deck.findById(req.params.id).then(deck => {
        if (deck) {
            let index = deck.cards.indexOf(req.body.card.id);
            if (i > -1) {
                deck.cards.splice(i, 1);
            }
            deck.save()
                .then((deck) => res.json(deck))
                .catch((err) => res.status(500).json({ systemerror: 'System Error' }));
        } else {
            res.status(404).json({ nodeckfound: 'No deck with that ID' });
        }
    })
})

module.exports = router;