// shows cards within selected deck
// uses props to fetchCards

import React, { Component } from 'react'
import CardsList from '../../cards/cards_list';

export default class DeckShow extends Component {
  constructor(props) {
    super(props)
  }


  
  
  render() {
    switch (this.props.deck) {
    case 'easy':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1>Easy Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList cards={this.props.easyCards} />
          </div>
        </div>
      )
    case 'medium':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1>Medium Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList cards={this.props.mediumCards} />
          </div>
        </div>
      )
    case 'hard':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1>Hard Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList cards={this.props.hardCards} />
          </div>
        </div>
      )
    case 'today':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1>Today's Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList cards={this.props.todayCards} />
          </div>
        </div>
      )
    default:
      return (
        <div>Nothing works</div>
      )
    }
  }
}
