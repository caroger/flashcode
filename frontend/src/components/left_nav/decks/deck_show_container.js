// mSTP
// fetchDecks for user
// currentUser

// mDTP - createDeck?? at some point
// fetchDecks on componentDidMount
// fetchCards

// TODO - create default decks using card ratings

import { connect } from 'react-redux';
import { fetchUserCards } from '../../../actions/card_actions';
import { getAllDeckCards } from '../../../reducers/selectors';
import DeckShow from './deck_show_page';

const mapStateToProps = (state, ownProps) => ({
  easyCards: getAllDeckCards(state, 1),
  mediumCards: getAllDeckCards(state, 2),
  hardCards: getAllDeckCards(state, 3)
  // userDeckCards: 
})

const mapDispatchToProps = dispatch => {
  return {
    fetchUserCards: userId => dispatch(fetchUserCards(userId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckShow);