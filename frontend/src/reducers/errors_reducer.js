import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import CardErrorsReducer from './card_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  cards: CardErrorsReducer
});
