'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const legalLinks = [
    { name: 'Terms and Conditions', href: '/terms-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'California Privacy Notice', href: '/california-privacy' },
    { name: 'Before you Apply', href: '/before-apply' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <Link href="/" className="mil-footer-logo mil-mb-60">
              <img src="/img/logo.png" alt="Loan Bolt" width="200" height="200" />
            </Link>
          </div>
          
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Useful Links</h6>
            <ul className="mil-footer-list">
              {mainLinks.map((link) => (
                <li key={link.name} className="mil-text-m mil-soft mil-mb-15">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Legal</h6>
            <ul className="mil-footer-list">
              {legalLinks.map((link) => (
                <li key={link.name} className="mil-text-m mil-soft mil-mb-15">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-soft mil-mb-15">
                999 Rue du Cherche-Midi, 7755500666 Paris, <br />France
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                +001 (808) 555-0111
              </li>
              <li className="mil-text-m mil-soft mil-mb-15">
                support@loanbolt.com
              </li>
            </ul>
          </div>
          

        </div>
        
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-soft">
                © {new Date().getFullYear()} Loan Bolt Finance & Fintech Design
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-soft">
                Developed with ❤️ for Loan Bolt
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}