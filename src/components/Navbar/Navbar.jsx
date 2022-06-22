import React from 'react';

import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="nav-logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="nav-list">
          <Link to="/" className="link">
            HOME
          </Link>
          <Link to="/" className="link">
            PAGES
          </Link>
          <Link to="/" className="link">
            PORTFOLIO
          </Link>
          <Link to="/" className="link">
            BLOG
          </Link>
          <Link to="/" className="link">
            ELEMENTS
          </Link>
          <Link to="/" className="link">
            FEATURES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
