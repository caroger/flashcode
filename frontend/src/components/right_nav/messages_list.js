import React from 'react';

class MessagesList extends React.Component {
  constructor(props) {
      super(props);
      this.messagesEnd = React.createRef();
  }
  scrollToBottom = () => {
      setTimeout(() => {
          this.messagesEnd.scrollIntoView({ behavior: 'smooth'});
      }, 1000);
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
            <div className="feed-item-user">
              {message.user}
            </div>
            <div className="feed-item-body">
              {message.content}
            </div>
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