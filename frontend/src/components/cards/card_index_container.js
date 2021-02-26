import { connect } from 'react-redux';
import { clearCardErrors, createCard, fetchUserCards } from '../../actions/card_actions';
import CardsIndex from './cards_index';

const mapStateToProps = (state) => {
  return {
    cards: state.cards.all ? Object.values(state.cards.all) : [],
    currentUser: state.session.user,
    errors: Object.values(state.errors.cards)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserCards: (userId) => dispatch(fetchUserCards(userId)),
    createCard: (card) => dispatch(createCard(card)),
    clearCardErrors: () => dispatch(clearCardErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);
