// fetchDeckCards given selected deck
// if no deck, show cards to review today
// create card and "feeling lucky" buttons

import React, { Component } from 'react';
import CardsList from './cards_list';

export default class CardsIndex extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCards();
  }
  
  
  render() {
    return (
      <>
        <div>
          <h1>My Cards</h1>g
          <CardsList cards={this.props.cards} />
          <button>Create Card</button>
          <button>I'm feeling lucky</button>
        </div>
      </>
    )
  }
}
