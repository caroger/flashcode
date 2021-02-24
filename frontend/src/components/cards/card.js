// fetchCard and set State to update card

import React, { Component } from 'react';
import { updateCard } from '../../actions/card_actions';

export default class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      probNum: '',
      title: '',
      lcDifficulty: '',
      rating: null,
      dueDate: '',
      notes: '',
      updatedAt: new Date(),
      flip: false
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabCard = this.grabCard.bind(this);

    this.toggleFlip = this.toggleFlip.bind(this);
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

  
  toggleFlip() {
    this.setState({ flip: [!flip] });
  }

  render() {
    const { title, probNum, lcDifficulty, rating, dueDate, notes } = this.props.card;
    
    return (
      <div className={`card ${this.state.flip ? 'flipped' : ''}`} onClick={this.toggleFlip}>
        <div className="front">
          <h1>{title}</h1>
          <p>Problem #{probNum}</p>
          <div>
            <h2>My Rating: {rating}</h2>
            <h3>Diffulty: {lcDifficulty}</h3>
            <h3>Next Review: {dueDate}</h3>
          </div>
        </div>
        <div className="back">
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