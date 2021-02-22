import { 
  RECEIVE_CARDS, 
  RECEIVE_CARD, 
  RECEIVE_NEW_CARD
} from '../actions/card_actions';

// import RECEIVE_DECK >> when built, will need to iterate over deck cards and set newState[card.id] = card
  
  const CardsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_CARDS:
        newState.all = action.cards.data;
        return newState;
      case RECEIVE_CARD:
        newState[action.cardId] = action.card.data;
        return newState;
      case RECEIVE_NEW_CARD:
        newState.new = action.card.data
        return newState;
      default:
        return state;
    }
  };
  
  export default CardsReducer;