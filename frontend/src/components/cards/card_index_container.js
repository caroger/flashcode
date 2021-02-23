// mSTP 
// cards: fetchDeckCards(state)
// cardsDueToday
// mDTP
// fetchCards


import { connect } from 'react-redux';
import { createCard, fetchCards } from '../../actions/card_actions';
import { getAllCards } from '../../reducers/selectors';
import CardsIndex from './notes_index';


const mapStateToProps = (state) => {
  return {
    cards: getAllUserCards(state),
    currentUser: state.session.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards()),
    createCard: card => dispatch(createCard(card))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);