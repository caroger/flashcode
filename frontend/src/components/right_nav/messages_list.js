import React from 'react';

class MessagesList extends React.Component {
  

  render() {
    if (!this.props.messages) return null;
    return (
      <ul className="message-list">
        {this.props.messages.map((message) => (
          <li className="feed-item">
            <div className="feed-item-user">
              {message.user}
            </div>
            <div>
              {message.content}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default MessagesList;