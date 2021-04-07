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
            <Link to="/" className="navbar-logo">
              ROSARIO
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links active"
                  onClick={closeMobileMenu}
                >
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="../About/About"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {" "}
                  About
                </a>
              </li>
              <li className="nav-item">
                <Link
                  to="../Resume/Resume"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {" "}
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  {" "}
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  {" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fade>
    </>
  );
}

export default Navigation;

{
  /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Navbar.Brand href="#home"><img
        src={Logoro}
        width="250"
        height="80"
        className="d-inline-block align-top"
        alt="Logo ro"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
           
            
          </Nav>
          <Nav className="estilos">
            
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */
}
