import React, { Component } from 'react';
import Card from './card';

export default class CardsList extends Component {
  constructor(props) {
    super(props)

    // this.checkCards = this.checkCards.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.cards.length !== prevProps.cards.length) {
      this.props.fetchUserCards(this.props.currentUser);  
    // } else if (this.checkCards(this.props.cards, 1) !== this.checkCards(prevProps.cards, 1)) {
    //   this.props.fetchUserCards(this.props.currentUser);
    }
  }

  // checkCards(cards, rating) {
  //   // const cards = this.props.fetchUserCards(this.props.currentUser);
  //   const filteredCards = cards.all.filter(card => card.rating === rating);
  //   return filteredCards;
  // }

  render() {
    const { cards } = this.props;
    
    if (!cards || cards.length === 0) {
      return (
            <h1>No Cards to show; Create some new cards to get started!</h1>
      );
    }

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
