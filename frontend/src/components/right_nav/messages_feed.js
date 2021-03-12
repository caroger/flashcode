import React from 'react';
import MessagesList from './messages_list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import * as FA from '@fortawesome/free-brands-svg-icons';

class MessagesFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
        this.refresh()
    }, 1000)
  }

  refresh() {
      this.props.fetchMessages();
  }

  update(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = this.state;
    this.setState({ content: '' });
    this.props.createMessage(message);
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
      clearInterval(this.interval);
  }

  render() {
    if (!this.props.messages) return null;
    // const {content} = this.state.content;

    return (
      <div className="feed-container">
        <div className="feed-header">
          <h1>
            <FontAwesomeIcon icon={faUsers} /> User Feeds
          </h1>
        </div>
        <div className="message-list-container">
          <MessagesList messages={this.props.messages} fetchMessages={this.props.fetchMessages} />
        </div>
        <div className="feed-input-container">
          <form onSubmit={this.handleSubmit}>
            <input className="feed-input"
              type="text"
              placeholder="enter message"
              onChange={this.update}
              value={this.state.content}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} className="feed-submit-button"/>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default MessagesFeed;