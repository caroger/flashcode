// mSTP 
// cards: fetchDeckCards(state)
// cardsDueToday
// mDTP
// fetchCards


import { connect } from 'react-redux';
// import { fetchCards } from '../../../actions/note_actions';
// import { getAllCards } from '../../../reducers/selectors';
import CardsIndex from './notes_index';


const mapStateToProps = (state) => {
  const cards = getAllCards(state);
  

  return {
    cards: cards,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsIndex);