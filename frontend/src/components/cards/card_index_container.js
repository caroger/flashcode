import { connect } from 'react-redux';
import { clearCardErrors, createCard, fetchUserCards } from '../../actions/card_actions';
// import { getAllUserCards } from '../../reducers/selectors';
import CardsIndex from './cards_index';


const mapStateToProps = (state) => {
  debugger
  return {
    // cards: getAllUserCards(state), //TODO - check if this selector gets current users cards for index
    cards: state.cards.all ? Object.values(state.cards.all) : [],
    currentUser: state.session.user,
    errors: Object.values(state.errors.cards)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUserCards: userId => dispatch(fetchUserCards(userId)),
    createCard: card => dispatch(createCard(card)),
    clearCardErrors: () => dispatch(clearCardErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);