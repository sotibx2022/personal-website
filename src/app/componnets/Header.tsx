"use client"
import Link from 'next/link';
import React from 'react';
import { Home, Code2 } from 'lucide-react';
const Header = () => {
  return (
      <header className="header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link className="navbar-link home-link" href="/">
                <Home size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link className="navbar-link service-link" href="/codes">
                <Code2 size={20} />
                <span>Codes</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}
export default Header;