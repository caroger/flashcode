// fetchCard and set State to update card

import React, { Component } from 'react';
import { updateCard } from '../../actions/card_actions';

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      rating: '',
      notes: '',
      due_date: ''
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { rating, notes, due_date } = this.state;
    updateCard({ rating, notes, due_date });
  }
  
  render() {
    const { lc_title, lc_difficulty, rating, due_date, notes } = this.props.card;
    
    return (
      <div className="card-container">
        <h1>{lc_title}</h1>
        <div>
          <h2>My Rating: {rating}</h2>
          <h3>Diffulty: {lc_difficulty}</h3>
          <h3>Due: {due_date}</h3>
        </div>
        <div>
          <h2>Notes</h2>
          <textarea value={notes || 'Add notes'} />
          <button onClick={() => this.update('notes')}>Save</button>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="button" value="Easy" onClick={this.update('rating')}/>
            <input type="button" value="Medium" onClick={this.update('rating')}/>
            <input type="button" value="Hard" onClick={this.update('rating')}/>
          </form>
        </div>
      </div>
    )
  }
}