"use client"
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
interface HeaderProps {
  // You can add props here if needed
}
const Header: React.FC<HeaderProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="header">
      <nav className={`navbar ${isMobileMenuOpen ? 'navbar-active' : ''}`}>
        <ul className="navbar-list">
          <li><Link className="navbar-link home-link" href="/">Home</Link></li>
          <li><a className="navbar-link service-link" href="#service-section">Skills</a></li>
          <li><a className="navbar-link portfolio-link" href="#portfolio-section">Project</a></li>
          <li><a className="navbar-link contact-link" href="#section-contact">Contact</a></li>
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
