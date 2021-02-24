import axios from 'axios';

export const getUserDecks = userId => {
    return axios.get(`/api/decks/user/${userId}`)
};

export const getDeck = deckId => {
    return axios.get(`/api/decks/${deckId}`)
};

export const createDeck = deck => {
    return axios.post(`/api/decks`, deck)
};

export const updateDeck = data => {
    return axios.post(`/api/decks/${data.deck._id}`, data)
};

export const deleteCardFromDeck = data => {
    return axios.post(`/api/decks/${data.deck._id}/remove_card`, data)
};

