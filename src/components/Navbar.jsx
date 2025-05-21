import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar container">
    <div className="logo">Sedap</div>
    <ul className="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
