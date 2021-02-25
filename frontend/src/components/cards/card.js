// fetchCard and set State to update card

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../../actions/card_actions';
import { parseDate } from '../../util/date_util';

class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      _id: null,
      probNum: '',
      title: '',
      lcDifficulty: '',
      rating: null,
      dueDate: '',
      url: '',
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
    this.grabCard()
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
    
    const card = this.state;
    this.props.updateCard(card);
  }

  
  toggleFlip() {
    if (this.state.flip) {
      this.setState({ flip: false });
    } else {
      this.setState({ flip: true });
    }
  }

  render() {
    if (!this.props.card) return null;

    let date = parseDate(this.state.dueDate);

    const { title, probNum, lcDifficulty, rating, url, notes } = this.state;
    
    return (
      <div
        key={this.props.key}
        className={`card ${this.state.flip ? 'flipped' : ''}`} 
      >
        <div className="front">
          <div>
            <div className="card-header">
              <div>
                <h1>{title}</h1>
                <p>Problem #{probNum}</p>
              </div>
              <button className="flip-button" onClick={this.toggleFlip}>>></button>
            </div>
            <div>
              <h3>Diffulty: {lcDifficulty}</h3>
              <h3>Next Review: {date}</h3>
              <h3>
                Link:{' '}
                <a href={url} target="_blank">
                  Go to Problem!
                </a>
              </h3>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <h2>My Rating: {rating}</h2>
            <input className="easy-button" type="submit" value="1" onClick={this.update('rating')} />
            <input className="medium-button" type="submit" value="2" onClick={this.update('rating')} />
            <input className="hard-button" type="submit" value="3" onClick={this.update('rating')} />
          </form>
        </div>
        <div className="back">
          <h2>Notes</h2>
          <textarea value={notes} onChange={this.update('notes')} rows="12" cols="25"/>
          <br />
          <button onClick={this.handleSubmit}>Save</button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    updateCard: card => dispatch(updateCard(card))
  }
}

export default connect(null, mapDispatchToProps)(Card);