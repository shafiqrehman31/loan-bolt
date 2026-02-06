'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="mil-top-panel">
      <div className="container">
        <Link href="/" className="mil-logo">
          <img src="/img/logo.png" alt="Loan Bolt" width="200" height="200" />
        </Link>
        
        <nav className={`mil-top-menu ${isMenuOpen ? 'mil-active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className={pathname === item.href ? 'mil-active' : ''}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="mil-menu-buttons">
          <Link href="/contact" className="mil-btn mil-sm">
            Loan Quote
          </Link>
          <div 
            className={`mil-menu-btn ${isMenuOpen ? 'mil-active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}