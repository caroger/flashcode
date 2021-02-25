import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: ''
      // errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  componentWillUnmount() {
    // this.props.clearErrors();
    // window.removeEventListener('keyup', this.handleKeyUp, false);
  }
  componentDidMount() {
    // window.addEventListener('keyup', this.handleKeyUp, false);
  }

  // Press Escape to Close Form
  handleKeyUp(e) {
    const { closeModal } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        closeModal();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  }
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(this.props.closeModal);
    this.props.processForm(user)
    .then(() => this.props.closeModal())
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: 'mango@mango.com',
      password: 'mangomango'
    };
    // this.props.processForm(demoUser).then(this.props.closeModal);
    this.props.processForm(demoUser)
    .then(() => this.props.closeModal())
  }
  

  renderHeader() {
    if (this.props.formType === 'login') {
      return (
        <div className="login-header">
          <div className="form-type">Sign In</div>
          {this.props.otherForm}
        </div>
      );
    } else {
      return (
        <div className="registration-header">
          <div className="registration_h1">Create your account</div>
          <div className="registration_h2">Registration is easy.</div>
        </div>
      );
    }
  }

  renderClose() {
    return (
      <div className="close-container">
        <button onClick={this.props.closeModal} className="close-x">
          X
        </button>
      </div>
    );
  }
  render() {
    return (
      <div className="login-form-container">
        {this.renderClose()}
        <div className="login-form-box">
          {this.renderHeader()}
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              <label className="login-input-label">
                <input type="text" placeholder="Email address" value={this.state.email} onChange={this.update('email')} />
                <p className="error">{this.props.errors.email}</p>
              </label>
              {this.props.formType === 'signup' && (
                <div>
                  <label className="login-input-label">
                    Username
                    <input
                      type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                    />
                    <p className="error">{this.props.errors.username}</p>
                  </label>
                </div>
              )}
              <label className="login-input-label">
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
                <p className="error">{this.props.errors.password}</p>
              </label>

              {this.props.formType === 'signup' && (
                <div>
                  <label className="login-input-label">
                    Password2
                    <input
                      type="password2"
                      value={this.state.password2}
                      onChange={this.update('password2')}
                    />
                    <p className="error">{this.props.errors.password2}</p>
                  </label>
                </div>
              )}
              <button className="session-submit" type="submit">
                {this.props.formType === 'login' ? 'Sign in' : 'Register'}
              </button>
              {this.props.formType === 'login' && (
                <button onClick={this.handleDemoUser} className="session-submit">
                  Demo Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
