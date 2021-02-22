import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <button className='profile-button'>Profile</button> 
          <button className='logout-button' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link className='signup-button' to={'/signup'}>Signup</Link>
          <Link className='login-button' to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className = 'navbar-div'> 
        <h1>FlashCode</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
