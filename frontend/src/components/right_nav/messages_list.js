import React from 'react';

class MessagesList extends React.Component {
  

  render() {
    if (!this.props.messages) return null;
    return (
      <ul className="message-list">
        {this.props.messages.map((message) => (
          <li className="feed-item">
            {message.user}
            {message.content}
          </li>
        ))}
      </ul>
    );
  }
}

export default MessagesList;