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
        
        {/* Custom styles for preloader and shutter effect */}
        <style>
          {`
            /* Preloader Styles */
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
              transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .mil-load {
              width: 60px;
              height: 60px;
              border: 4px solid rgba(255, 255, 255, 0.3);
              border-top: 4px solid #16213e;
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
              font-size: 48px;
              font-weight: 700;
              color: #16213e;
            }
            
            /* Back to Top Button with Shutter Up Effect */
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
              z-index: 9999;
              opacity: 0;
              visibility: hidden;
              transform: translateY(100px) scale(0.5);
              transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            }
            
            .progress-wrap.active-progress {
              opacity: 1;
              visibility: visible;
              transform: translateY(0) scale(1);
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
              transform: translateY(-5px) scale(1.05);
              box-shadow: 0 10px 25px rgba(255, 206, 0, 0.3);
            }
            
            .progress-wrap:hover::after {
              color: #ffffff;
              transform: rotate(360deg);
            }
            
            /* Shutter Up Animation */
            @keyframes shutterUp {
              0% {
                transform: translateY(100px) scale(0.5);
                opacity: 0;
              }
              70% {
                transform: translateY(-10px) scale(1.1);
                opacity: 1;
              }
              100% {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }
            
            .shutter-up {
              animation: shutterUp 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            }
            
            /* Pulse animation for button */
            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 rgba(255, 206, 0, 0.7);
              }
              70% {
                box-shadow: 0 0 0 15px rgba(255, 206, 0, 0);
              }
              100% {
                box-shadow: 0 0 0 0 rgba(255, 206, 0, 0);
              }
            }
            
            .pulse-effect {
              animation: pulse 2s infinite;
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
              
              .mil-counter[data-number="100"] {
                font-size: 36px;
              }
            }
            
            /* Preloader Exit Animation */
            @keyframes preloaderExit {
              0% {
                opacity: 1;
                transform: scale(1);
              }
              100% {
                opacity: 0;
                transform: scale(1.1);
              }
            }
            
            .preloader-exit {
              animation: preloaderExit 0.5s ease forwards;
            }
          `}
        </style>
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div id="smooth-wrapper" className="mil-wrapper">
          {/* Preloader - Yellow background with dark text */}
          <div className="mil-preloader">
            <div className="mil-load"></div>
            <p className="h2 mil-mb-30">
              <span className="mil-dark mil-counter" data-number="100">0</span>
              <span className="mil-dark" style={{fontSize: '48px', fontWeight: '700', color: '#16213e'}}>%</span>
            </p>
          </div>
          
          {/* Scroll Progress */}
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>
          
          {/* Back to Top Button - Will have shutter up effect */}
          <div className="progress-wrap" id="back-to-top">
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
        
        {/* jQuery */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        
        {/* Main script with preloader and shutter up effect */}
        <Script 
          id="main-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Preloader animation with shutter up effect
              (function initPreloader() {
                const counter = document.querySelector('.mil-counter[data-number="100"]');
                const preloader = document.querySelector('.mil-preloader');
                const backToTop = document.getElementById('back-to-top');
                
                if (counter && preloader) {
                  // Reset to 0
                  counter.textContent = '0';
                  
                  // Add pulse effect to preloader
                  preloader.style.position = 'fixed';
                  preloader.style.background = '#ffce00';
                  
                  // Animate to 100% with easing
                  let current = 0;
                  const duration = 2000; // 2 seconds total
                  const steps = 100;
                  const increment = 100 / steps;
                  const intervalTime = duration / steps;
                  
                  const interval = setInterval(function() {
                    current += increment;
                    if (current >= 100) {
                      counter.textContent = '100';
                      clearInterval(interval);
                      
                      // Add exit animation to preloader
                      setTimeout(function() {
                        preloader.classList.add('preloader-exit');
                        
                        // Trigger shutter up effect for back-to-top button
                        setTimeout(function() {
                          if (backToTop) {
                            // Show the button with shutter up animation
                            backToTop.classList.add('shutter-up', 'pulse-effect');
                            backToTop.classList.add('active-progress');
                            
                            // After shutter animation, keep it visible
                            setTimeout(function() {
                              backToTop.classList.remove('shutter-up');
                            }, 1000);
                            
                            // Add click functionality
                            backToTop.addEventListener('click', function(e) {
                              e.preventDefault();
                              window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                              });
                            });
                            
                            // Show on scroll
                            window.addEventListener('scroll', function() {
                              if (window.scrollY > 300) {
                                backToTop.classList.add('active-progress');
                              } else {
                                backToTop.classList.remove('active-progress');
                              }
                            });
                          }
                          
                          // Hide preloader after animations
                          setTimeout(function() {
                            preloader.style.display = 'none';
                          }, 500);
                          
                        }, 300); // Delay before shutter effect
                        
                      }, 300); // Delay before preloader exit
                      
                    } else {
                      counter.textContent = Math.floor(current);
                      
                      // Change color gradient as counter progresses
                      const progressColor = Math.floor((current / 100) * 255);
                      preloader.style.background = \`linear-gradient(135deg, #ffce00 0%, rgb(\${255 - progressColor}, \${206 - progressColor}, \${progressColor}) 100%)\`;
                    }
                  }, intervalTime);
                } else {
                  // Fallback: show back-to-top button if preloader fails
                  setTimeout(function() {
                    if (backToTop) {
                      backToTop.classList.add('active-progress', 'shutter-up');
                    }
                    if (preloader) {
                      preloader.style.display = 'none';
                    }
                  }, 2000);
                }
                
                // Mobile-specific improvements
                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                  // Smoother animation for mobile
                  if (counter) {
                    counter.style.fontSize = '36px';
                  }
                }
              })();
              
              // Load other scripts after preloader
              function loadScript(src) {
                return new Promise((resolve, reject) => {
                  const script = document.createElement('script');
                  script.src = src;
                  script.onload = resolve;
                  script.onerror = reject;
                  document.body.appendChild(script);
                });
              }
              
              // Load scripts with delay to ensure smooth preloader
              setTimeout(function() {
                const scripts = [
                  '/js/plugins/gsap.min.js',
                  '/js/plugins/ScrollSmoother.min.js',
                  '/js/plugins/ScrollTrigger.min.js',
                  '/js/plugins/ScrollTo.min.js',
                  '/js/plugins/swiper.min.js',
                  '/js/plugins/magnific-popup.js',
                  '/js/main.js'
                ];
                
                async function loadAllScripts() {
                  for (const src of scripts) {
                    try {
                      await loadScript(src);
                    } catch (error) {
                      console.log('Script load skipped or failed:', src);
                    }
                  }
                }
                
                loadAllScripts();
              }, 2500); // Load after preloader completes
              
              // Scroll progress functionality
              window.addEventListener('scroll', function() {
                const progressBar = document.querySelector('.mil-progress');
                if (progressBar) {
                  const windowHeight = window.innerHeight;
                  const documentHeight = document.documentElement.scrollHeight - windowHeight;
                  const scrolled = (window.scrollY / documentHeight) * 100;
                  progressBar.style.width = scrolled + '%';
                }
                
                // Show/hide back-to-top button
                const backToTop = document.getElementById('back-to-top');
                if (backToTop && !backToTop.classList.contains('shutter-up')) {
                  if (window.scrollY > 300) {
                    backToTop.classList.add('active-progress');
                  } else {
                    backToTop.classList.remove('active-progress');
                  }
                }
              });
              
              // Initialize back-to-top button after page loads
              window.addEventListener('load', function() {
                const backToTop = document.getElementById('back-to-top');
                if (backToTop && !backToTop.classList.contains('active-progress')) {
                  // If not already shown by preloader, show it
                  setTimeout(function() {
                    backToTop.classList.add('active-progress', 'shutter-up');
                  }, 1000);
                }
              });
            `
          }}
        />
      </body>
    </html>
  );
}