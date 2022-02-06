import React, { useState } from "react";
// import {Navbar, NavDropdown, Nav} from 'react-bootstrap'
// import Logoro from '../../img/logoro.png'
import "./Navigation.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import About from "../About/About";
function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <Fade top>
        <nav className="navbar">
          <div className="navbar-container">
            <a to="/" className="navbar-logo">
              ROSARIO
            </a>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a
                  to="/"
                  className="nav-links active"
                  onClick={closeMobileMenu}
                >
                  {" "}
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-links" onClick={closeMobileMenu}>
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-links" onClick={closeMobileMenu}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-links" onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fade>
    </>
  );
}

export default Navigation;