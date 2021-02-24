import React from 'react';
import { Link } from 'react-router-dom';


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
        <div className='navbar-button-div'>
          <button className='navbar-button'>Profile</button> 
          <button className='navbar-button' onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className='navbar-button-div'>
          <Link className='navbar-button' to={'/signup'}>Signup</Link>
          <Link className='navabr-button' to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className = 'navbar-div'> 
        <Link className='navbar-logo' to="/"><h1>FlashCode</h1></Link>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
