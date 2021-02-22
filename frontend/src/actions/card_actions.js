import { getCards, createCard } from '../util/card_api_util';

export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const RECEIVE_NEW_CARD = "RECEIVE_NEW_CARD";

export const receiveCards = cards => ({
  type: RECEIVE_CARDS,
  cards
});

export const receiveNewCard = card => ({
  type: RECEIVE_NEW_CARD,
  card
})

export const fetchCards = () => dispatch => (
  getCards()
    .then(cards => dispatch(receiveCards(cards)))
    .catch(err => console.log(err))
);

export const composeTweet = data => dispatch => (
  createCard(data)
    .then(card => dispatch(receiveNewCard(card)))
    .catch(err => console.log(err))
);