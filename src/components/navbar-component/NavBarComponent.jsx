import React from "react";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo"></div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <button className="cta-button">Call to Action</button>
      </div>
    </nav>
  );
};

export default Navbar;
