import React from 'react';

class MessagesList extends React.Component {
  constructor(props) {
      super(props);
      this.messagesEnd = React.createRef();
  }
  scrollToBottom = () => {
      setTimeout(() => {
          this.messagesEnd.scrollIntoView({ behavior: 'smooth'});
      }, 200);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

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
        <div
            ref={el => {this.messagesEnd = el;}}>
        </div>
      </ul>
    );
  }
}

export default MessagesList;