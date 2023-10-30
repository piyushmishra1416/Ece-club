import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"; // Import the CSS file correctly
import {HiMenu} from "react-icons/hi";
import { ImCross} from "react-icons/im"

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const exactValue = "true";
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact={exactValue} to="/" className="nav-logo">
            <span>Logo</span>
          </NavLink>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact={exactValue}
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <ImCross />
              </span>
            ) : (
              <span className="icon">
                <HiMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

//export default NavBar;
