import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout, openModal }) => {
  const loginBtn = () => {
    return <button onClick={() => openModal('login')}>Sign In</button>;
  };

  const signupBtn = () => {
    return <button onClick={() => openModal('signup')}>Sign up</button>;
  };

  const logoutBtn = () => {
    return <button onClick={logout}> Logout</button>;
  };

  return (
    <div className="navbar-div">
      <Link to="/">
        <h1>FlashCode</h1>
        {loggedIn ? logoutBtn() : loginBtn()};{signupBtn()};
      </Link>
    </div>
  );
};

export default NavBar;
