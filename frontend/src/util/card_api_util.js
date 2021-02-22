import axios from 'axios';

export const getCards = () => {
  return axios.get('/api/cards')
};

export const getCard = cardId => {
  return axios.get(`/api/cards/${cardId}`)
};

export const createCard = card => {
  return axios.post('/api/cards/', card)
}

export const updateCard = card => {
  return axios.patch(`/api/cards/${card.id}`, card)
}