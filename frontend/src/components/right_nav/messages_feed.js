import React from 'react';
import MessagesList from './messages_list';

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
    }, 200)
  }

  refresh() {
      this.props.fetchMessages();
  }

  update() {
    return (e) => {
      this.setState({ content: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const message = this.state;
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
    this.interval.clearInterval();
  }

  render() {
    if (!this.props.messages) return null;

    return (
      <div>
        <MessagesList messages={this.props.messages} fetchMessages={this.props.fetchMessages} />
      </div>
    );
  }
}

export default MessagesFeed;