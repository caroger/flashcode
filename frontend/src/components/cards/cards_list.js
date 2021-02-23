import React, { Component } from 'react';
import Card from './card';

export default class CardsList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    // pull out cards and deck to render list of cards depending on view/route
    const { cards, deck } = this.props;

    // let cardUrl = "/cards/";
    // update cardUrl if view is "deck"

    const cardList = cards.map(card => {
      if (!card) return null;
      
      return (
        <div>
          <Card 
            lc_title={card.lc_title}
            lc_difficulty={card.lc_difficulty}
            rating={card.rating}
            due_date={card.due_date}
            notes={card.notes}
          />
        </div>
      )
    })
    
    return cardList;
  }
}
