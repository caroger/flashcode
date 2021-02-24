import { RECEIVE_DECK_ERRORS, CLEAR_DECK_ERRORS } from '../util/deck_api_util';

const _nullErrors = [];

const DeckErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_DECK_ERRORS:
            return action.errors;
        case CLEAR_DECK_ERRORS:
            return _nullErrors;
        default: 
            return state;
    }
};

export default DeckErrorsReducer;