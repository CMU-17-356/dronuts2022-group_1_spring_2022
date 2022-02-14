import React from 'react';
import './Header.css'
import logo from '../assets/Dronut.png';

function Header() {
  return (
    <div className="Header">
      <img className="logo" src={logo} />
    </div>
  );
}

export default Header;
