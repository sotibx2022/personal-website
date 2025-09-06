"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { Home, Code2 } from 'lucide-react';
import './Header.css';
const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link 
              className={`navbar-link ${activeLink === '/' ? 'active-link' : ''}`} 
              href="/"
              onClick={() => setActiveLink('/')}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link 
              className={`navbar-link ${activeLink === '/codes' ? 'active-link' : ''}`} 
              href="/codes"
              onClick={() => setActiveLink('/codes')}
            >
              <Code2 size={20} />
              <span>Codes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;