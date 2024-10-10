import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css"; // Import your CSS styles

export default function Header() {
  return (
    <div className="bg-blk">
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 Rubik">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">
              {/* Replace this with your logo */}
              <img src="../assets/Techlivion.png" alt="Logo" height="30" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white">Team</Link>
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
