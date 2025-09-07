'use client';
import React from 'react';
import { ArrowUp } from 'lucide-react';
const Footer: React.FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <p className="footer-text">
        &copy; {currentYear} All rights reserved
      </p>
    </footer>
  );
};
export default Footer;
