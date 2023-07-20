import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import logo from '../images/iflicklogo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="logo-container">
          <img src={logo} alt="iFlick Logo" className="logo" />
        </div>
        <div className="social-media-container">
          <a href="https://www.facebook.com/marketplace/item/794354089062775/?mibextid=6ojiHh" className="social-media-link">
            <FaFacebook className="social-media-icon" />
          </a>
          <a href="https://www.instagram.com/iflickindia/" className="social-media-link">
            <FaInstagram className="social-media-icon" />
          </a>
          <a href="https://www.linkedin.com/company/i-flick/" className="social-media-link">
            <FaLinkedin className="social-media-icon" />
          </a>
          <a href="https://twitter.com/iflick_" className="social-media-link">
            <FaTwitter className="social-media-icon" />
          </a>
          <a href="https://wa.me/+918469386294" className="social-media-link">
            <FaWhatsapp className="social-media-icon" />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <div className="contact-container">
          <p className="contact-text">Gmail: <a href="mailto:iflick2023@gmail.com"><b>iflick2023@gmail.com</b></a></p>
          <p className="contact-text">Phone: <a href="tel:+8140563130"><b>8140563130</b></a></p>
          <p className="contact-text">Address: <b>Vadodara, Gujarat, India</b></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
