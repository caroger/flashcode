import { RECEIVE_CARD_ERRORS, CLEAR_CARD_ERRORS } from '../actions/card_actions'

const _nullErrors = [];

const CardErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CARD_ERRORS:
      debugger
      return action.errors;
    case CLEAR_CARD_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default CardErrorsReducer;