import React from 'react';
import { Link } from 'react-router-dom';
import horizontalLogo from '../../styles/images/horizontal-white-typeface.png';

const NavBar = ({ loggedIn, logout, openModal }) => {
  const loginBtn = () => {
    return <button onClick={() => openModal('login')}>Sign In</button>;
  };

  const logoutBtn = () => {
    return <button onClick={logout}> Logout</button>;
  };

  return (
    <div className="navbar-div">
      <div></div>
      <div className="navbar-middle">
        <Link to="/"><img src={horizontalLogo}/></Link>
        <div className="navbar-button-div">{loggedIn ? logoutBtn() : loginBtn()}</div>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;
