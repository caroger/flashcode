import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout, openModal }) => {
  const loginBtn = () => {
    return <button onClick={() => openModal('login')}>Sign In</button>;
  };

  const logoutBtn = () => {
    return <button onClick={logout}> Logout</button>;
  };

<<<<<<< HEAD
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
=======
  return (
    <div className="navbar-div">
      <Link to="/">
        <h1>FlashCode</h1>
        {loggedIn ? logoutBtn() : loginBtn()};
      </Link>
    </div>
  );
};
>>>>>>> login_form_modal

export default NavBar;
