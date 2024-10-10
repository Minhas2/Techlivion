import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure to add styles for the custom hamburger

export default function Header() {
  // State to track the collapse status
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navbarCollapseRef = useRef(null);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed); // Toggle collapse state
  };

  // Function to close the navbar when a link is clicked
  const closeNavbar = () => {
    if (!isCollapsed) {
      setIsCollapsed(true); // Collapse the navbar when a link is clicked
    }
  };

  return (
    <div className="bg-blk">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 Rubik">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">
              <img src="../assets/Techlivion.png" alt="Logo" height="30" />
            </Link>

            {/* Custom Hamburger Toggle */}
            <button
              className={`navbar-toggler custom-toggler ${isCollapsed ? "" : "open"}`}
              type="button"
              onClick={toggleNavbar}
              aria-expanded={!isCollapsed}
              aria-label="Toggle navigation"
            >
              {/* Custom hamburger icon (you can style this in CSS) */}
              <span className="custom-hamburger"></span>
            </button>

            <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarNav" ref={navbarCollapseRef}>
              <ul className="navbar-nav ms-auto align-items-lg-center align-items-start">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/services" onClick={closeNavbar}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/portfolio" onClick={closeNavbar}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about" onClick={closeNavbar}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact" onClick={closeNavbar}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about" onClick={closeNavbar} >
                    Team
                  </Link>
                </li>
                <li className="gray pe-3 non-992">|</li>
              </ul>
              <div>
                <button className="hire-btn non-992">Hire Now</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
