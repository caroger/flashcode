import * as CardAPI from '../util/card_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_NEW_CARD = "RECEIVE_NEW_CARD";

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const receiveNewCard = card => ({
  type: RECEIVE_NEW_CARD,
  card
})

// thunk actions
export const fetchCards = () => dispatch => (
  CardAPI.getCards()
    .then(cards => dispatch(receiveCards(cards)))
    .catch(err => console.log(err))
);

export const fetchCard = cardId => dispatch => (
  CardAPI.getCard(cardId)
    .then(card => dispatch(receiveCard(card)))
    .catch(err => console.log(err))
);

export const createCard = card => dispatch => (
  CardAPI.createCard(card)
    .then(card => dispatch(receiveNewCard(card)))
    .catch(err => console.log(err))
);

export const updateCard = cardId => dispatch => (
  CardAPI.updateCard(cardId)
    .then(card => dispatch(receiveCard(card)))
    .catch(err => console.log(err))
);