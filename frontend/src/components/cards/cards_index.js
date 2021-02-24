// fetchDeckCards given selected deck
// if no deck, show cards to review today
// create card and "feeling lucky" buttons

import React, { Component } from 'react';
import CardsList from './cards_list';

export default class CardsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lc_title: '', 
      lc_difficulty: '',
      rating: '', 
      notes: '',
      due_date: new Date()
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.assignDueDate = this.assignDueDate.bind(this);
  }

  componentDidMount() {
    this.props.fetchCards();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  // assignDueDate(rating) {
  //   const date = this.state.due_date;

  //   if (rating === 'easy') {
  //     this.setState({ due_date: date + 7 })
  //   } else if (rating === 'medium') {
  //     this.setState({ due_date: date + 3 })
  //   } else {
  //     this.setState({ due_date: date + 1 })
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();

    const card = this.state;
    this.props.createCard(card);
      // .then(() => this.props.closeModal());
  }
  
  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={i}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }

  // componentWillUnmount() {
  //   this.props.clearCardErrors();
  // }
  
  render() {
    if (!this.props.cards) return null;
    
    return (
      <>
        <div>
          <h1>My Cards</h1>g
          <CardsList cards={this.props.cards} />
        </div>
        <div>
          <h2>Create New Flash Card</h2>
          <form id="new-card-form" onSubmit={this.handleSubmit}>
            <label>Problem Title:
              <input
                type="text"
                name="name"
                placeholder="Title"
                value={lc_title}
                autoFocus={true}
                onChange={this.update('lc_title')}
              /> 
            </label>
            <label>Problem Difficulty:
              <select value={this.state.lc_difficulty} 
                onChange={this.update('lc_difficulty')}>
                  <option value="easy">Easy</option>
                  <option value="medium" selected>Medium</option>
                  <option value="hard">Hard</option>
              </select>
            </label>
            <label>My Rating:
              <select value={this.state.rating} 
                onChange={() => {
                  this.update('rating');
                  this.assignDueDate(rating);
                }}>
                <option value="easy">Easy</option>
                <option value="medium" selected>Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <label>Problem Notes:
              <textarea 
                value={this.state.notes} 
                placeholder="Add notes"
                onChange={this.update('notes')} 
              />
            </label>


            {/* <div className="errors">
              {this.renderErrors()}
            </div> */}

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

