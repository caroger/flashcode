import * as CardAPI from '../util/card_api_util';

export const RECEIVE_USER_CARDS = "RECEIVE_USER_CARDS";
export const RECEIVE_CARD = "RECEIVE_CARD";
export const RECEIVE_NEW_CARD = "RECEIVE_NEW_CARD";
export const RECEIVE_CARD_ERRORS = "RECEIVE_CARD_ERRORS";
export const CLEAR_CARD_ERRORS = "CLEAR_CARD_ERRORS";

export const receiveCards = cards => ({
  type: RECEIVE_USER_CARDS,
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

export const receiveCardErrors = errors => ({
  type: RECEIVE_CARD_ERRORS,
  errors
})

export const clearCardErrors = () => ({
  type: CLEAR_CARD_ERRORS
})


// thunk actions
export const fetchUserCards = (userId) => dispatch => {
  return CardAPI.getUserCards(userId)
    .then(cards => dispatch(receiveCards(cards)))
    .catch(err => dispatch(receiveCardErrors(err)))
};

export const fetchCard = cardId => dispatch => (
  CardAPI.getCard(cardId)
    .then(card => dispatch(receiveCard(card)))
    .catch(err => dispatch(receiveCardErrors(err)))
);

export const createCard = card => dispatch => (
  CardAPI.createCard(card)
    .then(card => dispatch(receiveNewCard(card)))
    .catch(err => dispatch(receiveCardErrors(err)))
);

export const updateCard = card => dispatch => {
  return CardAPI.updateCard(card)
    .then(card => dispatch(receiveCard(card)))
    .catch(err => dispatch(receiveCardErrors(err)))
};