import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => { 
  const navLinks = [ //ditulis sebagai array objek
    { name : "Home", to : "/"}, 
    { name : "Movies", to : "/movies"},
    { name : "About", to : "/about"},
    { name : "Contact", to : "/contact"} 
  ];

  return (
    <header className="App-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="subscribe-btn">Subscribe Now</button>
      </div>
    </header>
  );
};

export default Header;
