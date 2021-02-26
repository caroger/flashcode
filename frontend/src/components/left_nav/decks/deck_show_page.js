// shows cards within selected deck
// uses props to fetchCards

import React, { Component } from 'react'
import CardsList from '../../cards/cards_list';

export default class DeckShow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserCards(this.props.currentUser)
  }

  render() {
    if (!this.props.deck) return null;
    switch (this.props.deck) {
    case 'easy':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1 className='cards-header'>Easy Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList 
              cards={this.props.easyCards} 
              fetchUserCards={this.props.fetchUserCards} 
              currentUser={this.props.currentUser}/>
          </div>
        </div>
      )
    case 'medium':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1 className='cards-header'>Medium Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList
              cards={this.props.mediumCards}
              fetchUserCards={this.props.fetchUserCards}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      );
    case 'hard':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1 className='cards-header'>Hard Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList
              cards={this.props.hardCards}
              fetchUserCards={this.props.fetchUserCards}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      );
    case 'today':
      return (
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1 className='cards-header'>Today's Cards</h1>
          </div>
          <div className="card-list-container">
            <CardsList cards={this.props.todayCards} fetchUserCards={this.props.fetchUserCards} />
          </div>
        </div>
      );
    default:
      return (
        <div>Nothing works</div>
      )
    }
  }
}
