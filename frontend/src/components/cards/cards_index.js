// fetchDeckCards given selected deck
// if no deck, show cards to review today
// create card and "feeling lucky" buttons

import React, { Component } from 'react';
import CardsList from './cards_list';

export default class CardsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      probNum: '', 
      rating: '', 
      notes: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserCards(this.props.currentUser.id);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const card = this.state;
    this.props.createCard(card);
  }
  
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  componentWillUnmount() {
    this.props.clearCardErrors();
  }
  
  render() {
    if (!this.props.cards) return null;
    
    const { probNum, rating, notes } = this.state;

    return (
      <>
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1>My Cards</h1>
            
          </div>
          <div className="card-list-container">
            <CardsList cards={this.props.cards} />
          </div>
        
        </div>
      </>
    )
  }
}

