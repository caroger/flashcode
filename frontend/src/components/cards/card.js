// fetchCard and set State to update card

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../../actions/card_actions';
import { parseDate } from '../../util/date_util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Card extends Component {
  constructor(props) {
    super(props);

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
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabCard = this.grabCard.bind(this);

    this.toggleFlip = this.toggleFlip.bind(this);
  }

  componentDidMount() {
    this.grabCard();
  }

  grabCard() {
    if (this.props.card) this.setState(this.props.card);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
      <div key={this.props.key} className={`card ${this.state.flip ? 'flipped' : ''}`}>
        <div className="front">
          <div>
            <div className="card-header">
              <div>
                <h1>{title}</h1>
                <p>
                  <a href={url} target="_blank">Problem #{probNum}</a>
                </p>
              </div>
              <button className="flip-button" onClick={this.toggleFlip}>
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
            </div>
            <div>
              <h3>Diffulty: {lcDifficulty}</h3>
              <h3>Next Review: {date}</h3>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <h2>My Rating</h2>
            <input
              className={rating == 1 ? 'rating-button-easy-selected' : 'rating-button-easy'}
              type="submit"
              value="1"
              onClick={this.update('rating')}
            />
            <input
              className={rating == 2 ? 'rating-button-medium-selected' : 'rating-button-medium'}
              type="submit"
              value="2"
              onClick={this.update('rating')}
            />
            <input
              className={rating == 3 ? 'rating-button-hard-selected' : 'rating-button-hard'}
              type="submit"
              value="3"
              onClick={this.update('rating')}
            />
          </form>
        </div>
        <div className="back">
          <h2>Notes</h2>
          <textarea value={notes} onChange={this.update('notes')} rows="13" cols="28" />
          <br />
          <button className="save-card-button" 
            onClick={this.handleSubmit}>Save
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCard: (card) => dispatch(updateCard(card))
  };
};

export default connect(null, mapDispatchToProps)(Card);
