import axios from 'axios';

export const getUserCards = userId => {
  return axios.get(`/api/cards/user/${userId}`)
};

export const getCard = cardId => {
  return axios.get(`/api/cards/${cardId}`)
};

export const createCard = card => {
  return axios.post('/api/cards/', card)
}

export const updateCard = card => {
  return axios.put(`/api/cards/${card._id}`, card)
}