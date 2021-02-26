import React from 'react';
import FCLogo from '../../styles/images/FCLogo.png';


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
    this.props.clearErrors();
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
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
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: 'mango@mango.com',
      password: 'mangomango'
    };

    this.props.processForm(demoUser).then(this.props.closeModal);
  }

  renderHeader() {
    if (this.props.formType === 'login') {
      return (
        <div>
        <div className='header-wrapper'>
         <img className='session-logo' src={FCLogo} />
          </div>
        <div className="login-header">
          <div className="form-type">Sign In</div>
          
        </div>
        </div>
        
      );
    } else {
      return (
        <div className="registration-header">
          <div className="registration_h1">Create your account</div>
          <div className="registration_h2">Registration is as easy as 1, 1, 2, 3...</div>
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
        <div className="login-form-box">
          {this.renderClose()}
          {this.renderHeader()}
          <form onSubmit={this.handleSubmit}>
            <div className="login-form">
              {this.props.formType === 'login' && (
                <div className="input-wrap">
                  <label className="login-input-label"></label>
                  <input
                    className="login-input"
                    type="text"
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                  <p className="error">{this.props.errors.email}</p>
                </div>
              )}

              {this.props.formType === 'login' && (
                <div className="input-wrap">
                  <label className="login-input-label"></label>
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                  <p className="error">{this.props.errors.password}</p>
                </div>
              )}

              {this.props.formType === 'signup' && (
                <div className="input-wrap">
                  {/* <label className="login-input-label">Email: </label> */}
                  <input
                    className="login-input"
                    type="text"
                    placeholder="Enter your email address."
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                  <p className="error">{this.props.errors.email}</p>
                </div>
              )}

              {this.props.formType === 'signup' && (
                <div className="input-wrap">
                  {/* <label className="login-input-label">Username:</label> */}
                  <input
                    className="login-input"
                    type="text"
                    placeholder="Enter a username."
                    value={this.state.username}
                    onChange={this.update('username')}
                  />
                  <p className="error">{this.props.errors.username}</p>
                </div>
              )}

              {this.props.formType === 'signup' && (
                <div className="input-wrap">
                  {/* <label className="login-input-label">Password:</label> */}
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Enter your password."
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                  <p className="error">{this.props.errors.password}</p>
                </div>
              )}

              {this.props.formType === 'signup' && (
                <div className="input-wrap">
                  {/* <label className="login-input-label">Confirm your password:</label> */}
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Enter password again."
                    value={this.state.password2}
                    onChange={this.update('password2')}
                  />
                  <p className="error">{this.props.errors.password2}</p>
                </div>
              )}
              <div className="session-button-wrapper">
                <button className="session-submit" type="submit">
                  {this.props.formType === 'login' ? 'Sign in' : 'Start FlashCoding!'}
                </button>

                {this.props.formType === 'login' && (
                  <div>
                    <button onClick={this.handleDemoUser} className="session-submit">
                      Demo Login
                    </button>
                    <div className="extra-info">
                      Don't have an account? {this.props.otherForm}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
