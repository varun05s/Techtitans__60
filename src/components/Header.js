import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="logo-section">
        <img src="logo1.png" alt="Logo" className="logo" />
        <span className="site-name"><b>TTPrevention</b></span>
      </div>
      <nav className="nav-section">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/anonymous" className="nav-link">Anonymous </Link>
        <Link to="/emergency" className="nav-link">Emergency</Link>
        <Link to="/community" className="nav-link">Community</Link> {/* Add Community link */}
      </nav>
    </header>
  );
}

export default Header;
