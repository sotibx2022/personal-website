'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-socials">
          <a href="#" className="footer-social-link"><FaFacebookF /></a>
          <a href="#" className="footer-social-link"><FaTwitter /></a>
          <a href="#" className="footer-social-link"><FaLinkedinIn /></a>
          <a href="#" className="footer-social-link"><FaInstagram /></a>
        </div>
        <p className="footer-copyright">
          © 2022 All rights reserved
        </p>
      </div>
      {/* Scroll to Top Button */}
      <button className="footer-scroll-top" onClick={scrollToTop}>
        <ArrowUp />
      </button>
    </footer>
  );
};
export default Footer;
