import axios from 'axios';

export const getCards = (userId) => {
  return axios.get(`/api/cards/${userId}`)
};

export const getCard = cardId => {
  return axios.get(`/api/cards/${cardId}`)
};

export const createCard = card => {
  return axios.post('/api/cards/', card)
}

export const updateCard = card => {
  return axios.put(`/api/cards/${card.id}`, card)
}