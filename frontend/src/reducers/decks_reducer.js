import { RECEIVE_USER_DECKS, RECEIVE_DECK, RECEIVE_NEW_DECK } from '../util/deck_api_util';

const DecksReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_USER_DECKS:
            newState.all = action.decks.data;
            return newState;
        case RECEIVE_DECK:
            newState[action.deck._id] = action.deck.data;
            return newState;
        case RECEIVE_NEW_DECK:
            newState.new = action.deck.data;
            return newState;
        default:
            return state;
    }
}

export default DecksReducer;