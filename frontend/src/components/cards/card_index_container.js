// mSTP 
// cards: fetchDeckCards(state)
// cardsDueToday
// mDTP
// fetchCards

import { connect } from 'react-redux';
import { clearCardErrors, createCard, fetchCards } from '../../actions/card_actions';
import { getAllUserCards } from '../../reducers/selectors';
import CardsIndex from './notes_index';


const mapStateToProps = (state) => {
  return {
    cards: getAllUserCards(state),
    currentUser: state.session.user,
    errors: Object.values(state.errors.cards)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: userId => dispatch(fetchCards(userId)),
    createCard: card => dispatch(createCard(card)),
    clearCardErrors: () => dispatch(clearCardErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);