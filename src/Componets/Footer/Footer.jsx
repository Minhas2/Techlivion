import React from "react";
import "./Footer.css";
// Import FontAwesomeIcon and the specific brand icons you need
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
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
            <p>Home</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>About</p>
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
              <FontAwesomeIcon icon={faInstagram} size="2x"  />
              <FontAwesomeIcon icon={faYoutube} size="2x"  />
              <FontAwesomeIcon icon={faTwitter} size="2x"  />
              <FontAwesomeIcon icon={faLinkedin} size="2x"  />
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
