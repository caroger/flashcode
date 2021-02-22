import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './card';

export default class CardsList extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    // pull out cards and deck to render list of cards depending on view/route
    const { cards, deck } = this.props;

    // update cardUrl if view is deck

    const cardList = cards.map(card => {
      if (!card) return null;

      return (
        <div>
          
        </div>
      )
    })
    
    return cardList;
  }
}
