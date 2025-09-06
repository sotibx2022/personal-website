"use client"
import Link from 'next/link';
import React, { useState } from 'react';
const Header = () => {
  return (
    <header className="header">
      <nav className={`navbar`}>
        <ul className="navbar-list">
          <li>
            <Link className="navbar-link home-link" href="/">Home</Link>
          </li>
          <li>
            <Link className="navbar-link service-link" href="/codes">Codes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
