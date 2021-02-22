import axios from 'axios';

export const getCards = () => {
  return axios.get('/api/cards')
};

export const createCard = data => {
  return axios.post('/api/cards/', data)
}
