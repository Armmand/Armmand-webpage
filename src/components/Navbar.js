import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src="/logo.png" alt="Logo" className="logo" />
        </a>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
        <li><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;

