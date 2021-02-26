import React from 'react';
import { Redirect } from 'react-router-dom';
import LeftNav from '../../left_nav/left_nav';
import Feed from '../../right_nav/feed';
import CardIndexContainer from '../../cards/card_index_container';
import DeckShowContainer from '../../left_nav/decks/deck_show_container';

class LoggedInComponent extends React.Component {
  redirect() {
    if (this.props.signedIn === false) {
      return <Redirect to="/" />;
    }
  }

  render() {
    return (
      <div className="component-div">
        {this.redirect()}
        <LeftNav
          currentUser={this.props.currentUser}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
        />
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
