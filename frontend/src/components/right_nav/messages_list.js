import React from 'react';

class MessagesList extends React.Component {
  

  render() {
    if (!this.props.messages) return null;
    return (
      <div>
        <ul>
          {this.props.messages.map((message) => (
            <li>
              {message.user}
              {message.content}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MessagesList;