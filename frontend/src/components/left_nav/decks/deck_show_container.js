import { connect } from 'react-redux';
import { fetchUserCards } from '../../../actions/card_actions';
import { getAllDeckCards, getAllTodayCards } from '../../../reducers/selectors';
import DeckShow from './deck_show_page';

const mapStateToProps = (state, ownProps) => {
  const date = new Date();

  return {
    currentUser: state.session.user.id,
    easyCards: getAllDeckCards(state, 1),
    mediumCards: getAllDeckCards(state, 2),
    hardCards: getAllDeckCards(state, 3),
    todayCards: getAllTodayCards(state, date)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserCards: (userId) => dispatch(fetchUserCards(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);
