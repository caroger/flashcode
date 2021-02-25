import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout, openModal }) => {
  const loginBtn = () => {
    return <button onClick={() => openModal('login')}>Sign In</button>;
  };

  const logoutBtn = () => {
    return <button onClick={logout}> Logout</button>;
  };

  return (
    <div className="navbar-div">
      <div className="navbar-logo">
        <Link to="/">FlashCode</Link>
      </div>
      <div className="navbar-button-div">{loggedIn ? logoutBtn() : loginBtn()}</div>
    </div>
  );
};

export default NavBar;
