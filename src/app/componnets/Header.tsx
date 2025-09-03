"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="header">
      <nav className={`navbar ${isMobileMenuOpen ? 'navbar-active' : ''}`}>
        <ul className="navbar-list">
          <li>
            <Link className="navbar-link home-link" href="/">Home</Link>
          </li>
          <li>
            <Link className="navbar-link service-link" href="#service-section">Skills</Link>
          </li>
          <li>
            <Link className="navbar-link portfolio-link" href="#portfolio-section">Project</Link>
          </li>
          <li>
            <Link className="navbar-link contact-link" href="#section-contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-navbar-btn" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <X className="mobile-nav-icon" />
        ) : (
          <Menu className="mobile-nav-icon" />
        )}
      </div>
    </header>
  );
};
export default Header;
