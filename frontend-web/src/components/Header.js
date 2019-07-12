import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/"> {/* eslint-disable-next-line */}
          <img src={logo} alt="Image Gallery" />
        </Link>
        <Link to="/newPost">
          <img src={camera} alt="Send post" />
        </Link>
      </div>
    </header>
  );
}
