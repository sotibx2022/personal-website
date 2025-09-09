'use client';
import React from 'react';
import { ArrowUp, Link, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
const Footer: React.FC = () => {
 const router = useRouter()
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <p className="footer-text">
        &copy; {currentYear} All rights reserved
      </p>
      <User className="userIcon" onClick={()=>router.push('/admin')}/>
    </footer>
  );
};
export default Footer;
