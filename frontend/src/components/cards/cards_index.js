import React, { Component } from 'react';
import CardsList from './cards_list';
export default class CardsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      probNum: '',
      rating: '',
      notes: '',
      sortBy: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.sortCards = this.sortCards.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserCards(this.props.currentUser.id);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
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
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearCardErrors();
  }

  sortCards(cards) {
    const sortedCards = cards;
    switch (this.state.sortBy) {
      case 'dueDate':
        return sortedCards.sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));
      case 'createdAt':
        return sortedCards.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      case 'updatedAt':
        return sortedCards.sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1));
      default:
        return cards;
    }
  }

  render() {
    if (!this.props.cards) return null;

    return (
      <>
        <div className="cards-index-container">
          <div className="cards-index-header">
            <h1 className="cards-header">My Cards</h1>
            {/* sorting */}
            <div className="cards-filter">
              Order Cards By:
              <select
                value={this.state.sortBy}
                onChange={(e) => this.setState({ sortBy: e.target.value })}
              >
                <option value="dueDate">Due Date</option>
                <option value="createdAt">Create At</option>
                <option value="updatedAt">Updated At</option>
              </select>
            </div>
            {/* sorting end */}
          </div>
          <div className="card-list-container">
            <CardsList
              cards={this.sortCards(this.props.cards)}
              fetchUserCards={this.props.fetchUserCards}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      </>
    );
  }
}
