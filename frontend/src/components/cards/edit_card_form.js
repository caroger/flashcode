import React from 'react';

class EditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card;

    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.updateCard(this.state);
    }

    update(field) {
      return e => this.setState({ [field]: e.curentTarget.value });
    }

    render() {
        const { rating, notes } = this.props;
        return (
          <div className="EditCardForm">
            <h3>Edit Card</h3>
            <form onSubmit={this.handleSubmit}>
              <label>
                How comfortable were you with this problem this time around?
                <select
                  value={rating}
                  onChange={() => {
                    this.update('rating');
                    this.assignDueDate(rating);
                  }}
                >
                  <option value="1">Easy</option>
                  <option value="2">Medium</option>
                  <option value="3">Hard</option>
                </select>
              </label>
              <label>
                Problem Notes:
                <textarea value={notes} placeholder="Add notes" onChange={this.update('notes')} />
              </label>
            </form>
          </div>
        );
    }
}

export default EditCardForm;