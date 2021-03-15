import {
  RECEIVE_USER_CARDS,
  RECEIVE_CARD,
  RECEIVE_NEW_CARD,
  FILTER_CARDS_BY_RATE
} from '../actions/card_actions';

// import RECEIVE_DECK >> when built, will need to iterate over deck cards and set newState[card.id] = card

const CardsReducer = (state = { all: [], user: [], new: undefined }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_CARDS:
      newState.all = action.cards.data;
      return newState;
    case RECEIVE_CARD:
      newState[action.card._id] = action.card.data;
      return newState;
    case RECEIVE_NEW_CARD:
      newState.all.push(action.card.data);
      return newState;
    case FILTER_CARDS_BY_RATE:
      return { ...state, rating: action.payload.rating, fitleredCards: action.payload.cards };

    default:
      return state;
  }
};

export default CardsReducer;
