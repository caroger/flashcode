// fetchCard and set State to update card

import React, { Component } from 'react';
import { updateCard } from '../../actions/card_actions';

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      num: '',
      title: '',
      difficulty: '',
      rating: null,
      dueDate: '',
      notes: '',
      updatedAt: new Date()
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabCard = this.grabCard.bind(this);
  }

  componentDidMount() {
    grabCard()
  }
  
  grabCard() {
    if (this.props.card) this.setState(this.props.card);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { rating, notes, dueDate } = this.state;
    updateCard({ rating, notes, dueDate });
  }
  
  render() {
    const { title, num, difficulty, rating, dueDate, notes } = this.props.card;
    
    return (
      <div className="card-container">
        <div className="card-front">
          <h1>{title}</h1>
          <p>Problem #{num}</p>
          <div>
            <h2>My Rating: {rating}</h2>
            <h3>Diffulty: {difficulty}</h3>
            <h3>Next Review: {dueDate}</h3>
          </div>
        </div>
        <div className="card-back">
          <h2>Notes</h2>
          <textarea value={notes || 'Add notes'} />
          <button onClick={() => this.update('notes')}>Save Notes</button>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="button" value="1" onClick={this.update('rating')}/>
            <input type="button" value="2" onClick={this.update('rating')}/>
            <input type="button" value="3" onClick={this.update('rating')}/>
          </form>
        </div>
      </div>
    )
  }
}