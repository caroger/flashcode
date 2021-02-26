import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import LeftNav from '../../left_nav/left_nav';
import Feed from '../../right_nav/feed';
import NavBar from '../../nav/navbar';
import CardIndexContainer from '../../cards/card_index_container';
import DeckShowContainer from '../../left_nav/decks/deck_show_container';

class LoggedInComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  redirect() {
    if (this.props.signedIn === false) {
      return <Redirect to="/" />;
    }
  }

  render() {
    // debugger;
    // const location = useLocation();

    return (
      <div className="component-div">
        {this.redirect()}
        <LeftNav currentUser={this.props.currentUser} openModal={this.props.openModal} />
        {/* <CardIndexContainer /> */}
        {this.props.match.params.deckId ? (
          <DeckShowContainer deck={this.props.deck} />
        ) : (
          <CardIndexContainer />
        )}
        <Feed />
      </div>
    );
  }
}

export default LoggedInComponent;
