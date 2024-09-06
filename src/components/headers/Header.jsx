import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const NavBar = (
    {"NavBarLink" : "home", Linkto : "/"}, 
    {"NavBarLink" : "movies", Linkto : "/movies"},
    {"NavBarLink" : "about", Linkto : "/about"},
    {"NavBarLink" : "contact", Linkto : "/contact"} 
  )

  return (
    <header className="App-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
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
