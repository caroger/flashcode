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
    this.props.fetchCards(this.props.currentUser._id);
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
      // .then(() => this.props.closeModal());
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
        <div>
          <h1>My Cards</h1>g
          <CardsList cards={this.props.cards} />
        </div>
        <div>
          <h2>Create New Flash Card</h2>
          <form id="new-card-form" onSubmit={this.handleSubmit}>
            <label>Problem Number:
              <input
                type="text"
                placeholder="Problem ID"
                value={probNum}
                autoFocus={true}
                onChange={this.update('probNum')}
              />
            </label>
            <label>My Rating:
              <select value={rating} 
                onChange={() => {
                  this.update('rating');
                  this.assignDueDate(rating);
                }}>
                <option value="1">Easy</option>
                <option value="2" selected>Medium</option>
                <option value="3">Hard</option>
              </select>
            </label>
            <label>Problem Notes:
              <textarea 
                value={notes} 
                placeholder="Add notes"
                onChange={this.update('notes')} 
              />
            </label>

            <div className="errors">
              {this.renderErrors()}
            </div>

            <div className="form-buttons">
              <button type="submit" form="new-card-form">Create Card</button>
            </div>
          </form>
          <button>I'm feeling lucky</button>
        </div>
      </>
    )
  }
}
