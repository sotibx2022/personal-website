'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { ArrowUp } from 'lucide-react';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-socials">
          <Link href="#" className="footer-social-link"><FaFacebookF /></Link>
          <Link href="#" className="footer-social-link"><FaTwitter /></Link>
          <Link href="#" className="footer-social-link"><FaLinkedinIn /></Link>
          <Link href="#" className="footer-social-link"><FaInstagram /></Link>
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
