import * as DeckAPI from '../util/deck_api_util';

export const RECEIVE_USER_DECKS = "RECEIVE_USER_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const RECEIVE_NEW_DECK = "RECEIVE_NEW_DECK";
export const RECEIVE_DECK_ERRORS = "RECEIVE_DECK_ERRORS";
export const CLEAR_DECK_ERRORS = "CLEAR_DECK_ERRORS";

export const receiveUserDecks = decks => ({
    type: RECEIVE_USER_DECKS,
    decks
});

export const receiveDeck = deck => ({
    type: RECEIVE_DECK,
    deck
});

export const receiveNewDeck = deck => ({
    type: RECEIVE_NEW_DECK,
    deck
});

export const receiveDeckErrors = errors => ({
    type: RECEIVE_DECK_ERRORS,
    errors
});

export const clearDeckErrors = () => ({
    type: CLEAR_DECK_ERRORS
});


// thunk actions

export const fetchUserCards = userId => dispatch => {
    return DeckAPI.getUserDecks(userId)
        .then(decks => dispatch(receiveUserDecks(decks)))
        .catch(err => dispatch(receiveDeckErrors(err.response.data)))
};

export const fetchDeck = deckId => dispatch => {
    return DeckAPI.getDeck(deckId)
        .then(deck => dispatch(receiveNewDeck(deck)))
        .catch(err => dispatch(receiveDeckErrors(err.response.data)))
};

export const createDeck = deck => dispatch => {
    return DeckAPI.createDeck(deck)
        .then(deck => dispatch(receiveNewDeck(deck)))
        .catch(err => dispatch(receiveDeckErrors(err.response.data)))
};

export const updateDeck = data => dispatch => {
    return DeckAPI.updateDeck(data)
        .then(deck => dispatch(receiveDeck(deck)))
        .catch(err => dispatch(receiveDeckErrors(err.response.data)))
};

export const deleteCardFromDeck = data => dispatch => {
    return DeckAPI.deleteCardFromDeck(data)
        .then(deck => dispatch(receiveDeck(deck)))
        .catch(err => dispatch(receiveDeckErrors(err.response.data)))
};