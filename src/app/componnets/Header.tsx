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
    <header>
      <Link href="/">
        <img src="../logo.png" alt="Binayaraj soti logo" className="logo" />
      </Link>
      <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-lists">
          <span className='bg-helper p-4'>Green</span>
          <span className='bg-[var(--helper)] p-4'>Green</span>
          <span className="bg-primaryDark p-4">Primary Dark</span>
          <li><Link className="navbar-link home-link" href="/">Home</Link></li>
          <li><a className="navbar-link about-link" href="#about-section">About</a></li>
          <li><a className="navbar-link service-link" href="#service-section">Services</a></li>
          <li><a className="navbar-link portfolio-link" href="#portfolio-section">Portfolio</a></li>
          <li><a className="navbar-link" href="#section-contact">Contact</a></li>
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