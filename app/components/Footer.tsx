'use client';

import Link from 'next/link';

export default function Footer() {
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

  return (
    <footer className="mil-footer">
      {/* Main Footer */}
      <div className="mil-footer-main">
        <div className="container">
          <div className="row">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6 mil-mb-60">
              <Link href="/" className="mil-footer-logo mil-mb-40">
                <img src="/img/Loan-Bolt-Logo-Single-white.png" alt="Loan Bolt" width="150" height="150" />
              </Link>
              <p className="mil-text-m mil-light mil-mb-30">
                Fast, transparent loan solutions designed to help you achieve your financial goals with confidence.
              </p>
              
              {/* Company Registration */}
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mil-mb-60">
              <h6 className="mil-light mil-mb-30">Quick Links</h6>
              <ul className="mil-footer-list">
                {mainLinks.map((link) => (
                  <li key={link.name} className="mil-mb-15">
                    <Link 
                      href={link.href} 
                      className="mil-text-m mil-light mil-footer-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="col-lg-3 col-md-6 mil-mb-60">
              <h6 className="mil-light mil-mb-30">Legal</h6>
              <ul className="mil-footer-list">
                {legalLinks.map((link) => (
                  <li key={link.name} className="mil-mb-15">
                    <Link 
                      href={link.href} 
                      className="mil-text-m mil-light mil-footer-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-6 mil-mb-60">
              <div className="mil-contact-info">
                <h6 className="mil-light mil-mb-30">Contact Us</h6>
                <ul className="mil-footer-list">
                  <li className="mil-mb-20">
                    <div className="mil-contact-item">
                      <i className="fas fa-map-marker-alt mil-accent mil-mr-15"></i>
                      <div>
                        <p className="mil-text-m mil-light mil-mb-5">Address</p>
                        <p className="mil-text-s mil-soft">
                          3 Gelderd Road<br />
                          Leeds, England<br />
                          LS12 6LN
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mil-mb-20">
                    <div className="mil-contact-item">
                      <i className="fas fa-envelope mil-accent mil-mr-15"></i>
                      <div>
                        <p className="mil-text-m mil-light mil-mb-5">Email</p>
                        <a 
                          href="mailto:contact@loanbolt.com" 
                          className="mil-text-s mil-accent"
                        >
                          contact@loan-bolt.com
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mil-footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mil-mb-20 mil-sm-mb-15">
              <p className="mil-text-s mil-soft">
                © {new Date().getFullYear()} Loan Bolt Smart Loans. Fast Decisions.
              </p>
              <p className="mil-text-xs mil-soft mil-mt-5">
                Loan Bolt is a trading style of PRO ACTIVES GROUP LTD.
              </p>
            </div>
            
            <div className="col-lg-6">
              <div className="mil-footer-disclaimer">
                <p className="mil-text-xs mil-soft mil-text-right mil-sm-text-left">
                  Rates and terms vary based on creditworthiness. Not all applicants will qualify.
                  Borrow responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS Styles */}
      <style jsx>{`
        .mil-footer {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
        }
        
        .mil-footer-main {
          padding: 80px 0 60px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .mil-footer-bottom {
          padding: 30px 0;
          background: rgba(0, 0, 0, 0.2);
        }
        
        /* Logo */
        .mil-footer-logo img {
          height: 60px;
          width: auto;
        }
        
        /* Company Info */
        .mil-company-info {
          padding: 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border-left: 3px solid #ffce00;
        }
        
        /* Footer Lists */
        .mil-footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .mil-footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .mil-footer-link:hover {
          color: #ffce00 !important;
          transform: translateX(5px);
        }
        
        /* Contact Items */
        .mil-contact-item {
          display: flex;
          align-items: flex-start;
        }
        
        .mil-contact-item i {
          margin-top: 5px;
          font-size: 16px;
        }
        
        /* Footer Disclaimer */
        .mil-footer-disclaimer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 15px;
        }
        
        /* Text Utilities */
        .mil-light {
          color: white !important;
        }
        
        .mil-soft {
          color: rgba(255, 255, 255, 0.7) !important;
        }
        
        .mil-accent {
          color: #ffce00 !important;
        }
        
        .mil-mr-15 {
          margin-right: 15px;
        }
        
        .mil-mt-5 {
          margin-top: 5px;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
          .mil-footer-main {
            padding: 60px 0 40px;
          }
          
          .mil-footer-bottom {
            padding: 25px 0;
          }
        }
        
        @media (max-width: 768px) {
          .mil-footer-main {
            padding: 40px 0 30px;
          }
          
          .mil-footer-bottom {
            padding: 20px 0;
            text-align: center;
          }
          
          .mil-footer-disclaimer p {
            text-align: center !important;
          }
          
          .mil-company-info {
            text-align: center;
          }
        }
        
        @media (max-width: 576px) {
          .mil-footer-main {
            padding: 30px 0 20px;
          }
          
          .mil-footer-bottom {
            padding: 15px 0;
          }
        }
      `}</style>
    </footer>
  );
}