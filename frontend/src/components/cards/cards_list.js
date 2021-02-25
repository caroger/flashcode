import React, { Component } from 'react';
import Card from './card';

export default class CardsList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { cards } = this.props;

    cards.sort((a, b) => {
      return new Date(a.dueDate) - new Date(b.dueDate);
    });

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
