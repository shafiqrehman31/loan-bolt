import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
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
        
        {/* Fonts */}
        <link rel="stylesheet" href="/fonts/css/switzer.css" />
        <link rel="stylesheet" href="/fonts/css/font-awesome.min.css" />
        
        {/* Bootstrap Grid only */}
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        
        {/* Swiper CSS from CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" 
        />
        
        {/* Magnific Popup */}
        <link rel="stylesheet" href="/css/plugins/magnific-popup.css" />
        
        {/* Your template CSS */}
        <link rel="stylesheet" href="/css/style.css" />
        
        {/* Preloader styling */}
        <style>
          {`
            .mil-preloader {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: #ffce00;
              z-index: 99999;
              display: flex !important;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              opacity: 1;
              visibility: visible;
              transition: opacity 0.5s ease;
            }
            
            .mil-load {
              width: 60px;
              height: 60px;
              border: 4px solid #f0f0f0;
              border-top: 4px solid #ffce00;
              border-radius: 50%;
              animation: mil-spin 1s linear infinite;
              margin-bottom: 20px;
            }
            
            @keyframes mil-spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            .mil-counter[data-number="100"] {
              display: inline-block;
              min-width: 40px;
              text-align: center;
            }
          `}
        </style>
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div id="smooth-wrapper" className="mil-wrapper">
          {/* Preloader - Counter starts at 0 */}
          <div className="mil-preloader">
            <div className="mil-load"></div>
            <p className="h2 mil-mb-30">
              <span className="mil-dark mil-counter" data-number="100">0</span>
              <span className="mil-dark">%</span>
            </p>
          </div>
          
          {/* Scroll Progress */}
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>
          
          {/* Back to Top */}
          <div className="progress-wrap active-progress"></div>
          
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <div id="smooth-content">
            {children}
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
        
        {/* All scripts in one with proper loading order */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        
        <Script 
          id="all-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Preloader counter animation
              (function initPreloader() {
                const counter = document.querySelector('.mil-counter[data-number="100"]');
                if (counter) {
                  // Reset to 0
                  counter.textContent = '0';
                  
                  // Animate to 100%
                  let current = 0;
                  const interval = setInterval(function() {
                    current += 2;
                    if (current >= 100) {
                      counter.textContent = '100';
                      clearInterval(interval);
                      
                      // Hide preloader after delay
                      setTimeout(function() {
                        const preloader = document.querySelector('.mil-preloader');
                        if (preloader) {
                          preloader.style.opacity = '0';
                          setTimeout(function() {
                            preloader.style.display = 'none';
                          }, 500);
                        }
                      }, 300);
                    } else {
                      counter.textContent = current;
                    }
                  }, 30);
                } else {
                  // Fallback: hide preloader if no counter
                  setTimeout(function() {
                    const preloader = document.querySelector('.mil-preloader');
                    if (preloader) {
                      preloader.style.display = 'none';
                    }
                  }, 2000);
                }
              })();
              
              // Load other scripts dynamically
              const scripts = [
                '/js/plugins/gsap.min.js',
                '/js/plugins/ScrollSmoother.min.js',
                '/js/plugins/ScrollTrigger.min.js',
                '/js/plugins/ScrollTo.min.js',
                '/js/plugins/swiper.min.js',
                '/js/plugins/magnific-popup.js',
                '/js/main.js'
              ];
              
              function loadScript(src) {
                return new Promise((resolve, reject) => {
                  const script = document.createElement('script');
                  script.src = src;
                  script.onload = resolve;
                  script.onerror = reject;
                  document.body.appendChild(script);
                });
              }
              
              // Load all scripts sequentially
              async function loadAllScripts() {
                for (const src of scripts) {
                  try {
                    await loadScript(src);
                  } catch (error) {
                    console.error('Failed to load script:', src, error);
                  }
                }
              }
              
              // Start loading scripts after preloader animation
              setTimeout(loadAllScripts, 2000);
            `
          }}
        />
      </body>
    </html>
  );
}