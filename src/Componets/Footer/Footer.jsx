import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <div className="bg-blk Rubik">
      <div className="container">
        <div className="row py-footer text-white">

          <div className="col-lg-3 col-md-6 col-sm-6  mb-425 my-auto">
            <img
              src="../assets/LogoFooter.png"
              alt="Logo"
              className="footer-image"
            />
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6 footer-link">
            <h4 className="footer-headlines mb-headline">Quick Link</h4>
            {/* Call scrollToTop on link click */}
            <Link className="no-underline" to="/" onClick={scrollToTop}>
              <p>Home</p>
            </Link>
            <Link className="no-underline" to="/services" onClick={scrollToTop}>
              <p>Services</p>
            </Link>
            <Link className="no-underline" to="/portfolio" onClick={scrollToTop}>
              <p>Portfolio</p>
            </Link>
            <Link className="no-underline" to="/about" onClick={scrollToTop}>
              <p>About</p>
            </Link>
            <p>Team</p>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6 footer-link">
            <h4 className="footer-headlines mb-headline">Contact</h4>
            <p>email@gmail.com</p>
            <p>+10000000000</p>
            <p>United States</p>
          </div>

          <div className="col-lg-3 col-md-6  col-sm-6  my-auto mt-768">
            <div className="d-flex text-white justify-content-between">
              {/* Add social media icons */}
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </div>
          </div>

        </div>

        <div className="d-flex justify-content-center text-center text-white">
           ©2024 TECHLIVION. All rights reserved
        </div>
      </div>
    </div>
  );
}
