import React, { Component } from 'react';
import Card from './card';

export default class CardsList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    // pull out cards and deck to render list of cards depending on view/route
    const { cards, deck } = this.props;
    // TODO - filter cardList depending on selected deck
    // let cardUrl = "/cards/";
    // update cardUrl if view is "deck"

    const cardList = cards.map(card => {
      if (!card) return null;
      
      return (
        <div className="card-container" key={card._id}>
          <Card card={card} />
        </div>
      )
    })
    
    return cardList;
  }
}
