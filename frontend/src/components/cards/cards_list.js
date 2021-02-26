import React, { Component } from 'react';
import Card from './card';

export default class CardsList extends Component {
  constructor(props) {
    super(props)
  }
  
  // componentDidUpdate(prevProps) {
  //   if (this.props.cards.length !== prevProps.cards.length) {
  //     this.props.fetchUserCards(this.props.currentUser);  
  //   }
  // }

  render() {

    const { cards } = this.props;
    
    if (!cards || cards.length === 0) {
      return (
            <h1>No Cards to show!</h1>
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
