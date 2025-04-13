import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const [newsHeadlines, setNewsHeadlines] = useState([]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    }, 60000); // update every minute
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d396bee15850403d8e25c1f28f1de986`
        );
        const data = await response.json();
        if (data.articles) {
          setNewsHeadlines(data.articles.map(article => article.title));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    const newsInterval = setInterval(fetchNews, 300000); // Refresh every 5 minutes
    return () => clearInterval(newsInterval);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home">
            <img src={Logo} alt="Logo" className="logo" />
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

      <div className="breaking-news">
        <div className="breaking-news-content">
          <span className="weather">🌤️ 75°F Chapel Hill, NC </span>
          <span className="time">{currentTime}</span>
          <span className="news">
            <marquee behavior="scroll" direction="left">
              {newsHeadlines.join(" • ")}
            </marquee>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;



