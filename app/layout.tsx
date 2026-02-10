import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loan Bolt - Fast & Secure Loan Platform',
  description: 'Get fast, transparent loans with competitive rates. Apply online and receive funds quickly with Loan Bolt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
        
        {/* Preconnect for CDN */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        
        {/* Fonts */}
        <link rel="stylesheet" href="/fonts/css/switzer.css" />
        <link rel="stylesheet" href="/fonts/css/font-awesome.min.css" />
        
        {/* Bootstrap Grid only */}
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        
        {/* Swiper CSS */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
        
        {/* Magnific Popup */}
        <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />
        
        {/* Your template CSS */}
        <link rel="stylesheet" href="/css/style.css" />
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        
        {/* Preloader and animation styles */}
        <style>
          {`
            /* Preloader active state */
            body.mil-preloader-active {
              overflow: hidden;
            }
            
            body.mil-preloader-active #smooth-content {
              opacity: 0;
            }
            
            /* Progress bar */
            .mil-progress-track {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 3px;
              background: transparent;
              z-index: 9998;
            }
            
            .mil-progress {
              height: 100%;
              background: #ffce00;
              width: 0%;
              transition: width 0.1s ease;
            }
            
            /* Back to Top Button - Shutter Up Effect */
            .progress-wrap {
              position: fixed;
              right: 50px;
              bottom: 50px;
              height: 46px;
              width: 46px;
              cursor: pointer;
              display: block;
              border-radius: 50px;
              background: #ffce00;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
              z-index: 1000;
              opacity: 0;
              visibility: hidden;
              transform: translateY(100px);
              transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            
            .progress-wrap.active-progress {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
            
            .progress-wrap::after {
              position: absolute;
              content: '\\f077';
              font-family: 'Font Awesome 5 Free';
              font-weight: 900;
              text-align: center;
              line-height: 46px;
              font-size: 18px;
              color: #16213e;
              left: 0;
              top: 0;
              height: 46px;
              width: 46px;
              cursor: pointer;
              display: block;
              z-index: 1;
              transition: all 0.3s ease;
            }
            
            .progress-wrap:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px rgba(255, 206, 0, 0.3);
            }
            
            .progress-wrap:hover::after {
              color: #ffffff;
            }
            
            /* SVG Progress Circle (optional alternative) */
            .progress-wrap svg.progress-circle path {
              stroke: #16213e;
              stroke-width: 4;
              box-sizing: border-box;
              transition: all 0.3s ease;
            }
            
            /* Responsive */
            @media (max-width: 768px) {
              .progress-wrap {
                right: 20px;
                bottom: 20px;
                height: 40px;
                width: 40px;
              }
              
              .progress-wrap::after {
                line-height: 40px;
                font-size: 16px;
                height: 40px;
                width: 40px;
              }
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        {/* Preloader */}
        <Preloader />
        
        {/* Main Wrapper */}
        <div id="smooth-wrapper" className="mil-wrapper">
          {/* Scroll Progress Bar */}
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>
          
          {/* Back to Top Button with shutter up effect */}
          <div className="progress-wrap active-progress">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
            </svg>
          </div>
          
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <div id="smooth-content">
            {children}
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* JavaScript Files */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/ScrollSmoother.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/ScrollTo.min.js" strategy="afterInteractive" />
        
        {/* Swiper */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" 
          strategy="afterInteractive" 
        />
        
        {/* Other plugins */}
        <Script src="/js/plugins/magnific-popup.js" strategy="afterInteractive" />
        
        {/* Custom scripts for scroll and back-to-top */}
        <Script 
          id="custom-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Wait for preloader to finish
              const checkPreloader = setInterval(function() {
                const preloader = document.querySelector('[style*="position: fixed"][style*="z-index: 99999"]');
                if (!preloader || preloader.style.opacity === '0' || getComputedStyle(preloader).opacity === '0') {
                  clearInterval(checkPreloader);
                  initScrollFunctions();
                }
              }, 100);
              
              function initScrollFunctions() {
                // Scroll Progress
                const progressBar = document.querySelector('.mil-progress');
                if (progressBar) {
                  window.addEventListener('scroll', function() {
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight - windowHeight;
                    const scrolled = (window.scrollY / documentHeight) * 100;
                    progressBar.style.width = scrolled + '%';
                  });
                }
                
                // Back to Top Button with shutter up effect
                const backToTop = document.querySelector('.progress-wrap');
                if (backToTop) {
                  // Show/hide based on scroll
                  window.addEventListener('scroll', function() {
                    if (window.scrollY > 300) {
                      backToTop.classList.add('active-progress');
                    } else {
                      backToTop.classList.remove('active-progress');
                    }
                  });
                  
                  // Click handler with smooth scroll
                  backToTop.addEventListener('click', function(e) {
                    e.preventDefault();
                    gsap.to(window, {
                      duration: 1.2,
                      scrollTo: {
                        y: 0,
                        autoKill: true
                      },
                      ease: "power2.inOut"
                    });
                  });
                  
                  // Initial check
                  if (window.scrollY > 300) {
                    backToTop.classList.add('active-progress');
                  }
                }
                
                // Initialize GSAP ScrollSmoother if available
                if (typeof ScrollSmoother !== 'undefined') {
                  ScrollSmoother.create({
                    wrapper: '#smooth-wrapper',
                    content: '#smooth-content',
                    smooth: 1.2,
                    effects: true,
                    normalizeScroll: true,
                    ignoreMobileResize: true
                  });
                }
              }
              
              // Mobile touch improvements
              document.addEventListener('touchstart', function() {}, {passive: true});
              
              // Load main.js after everything is ready
              window.addEventListener('load', function() {
                if (typeof window.initMainJS === 'function') {
                  window.initMainJS();
                }
              });
            `
          }}
        />
        
        {/* Load main.js */}
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}