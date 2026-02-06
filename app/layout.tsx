import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// REMOVE THIS LINE: import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Loan Bolt - Finance & Fintech Platform',
  description: 'Modern finance and fintech platform',
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
        
        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <div id="smooth-wrapper" className="mil-wrapper">
          {/* Preloader */}
          <div className="mil-preloader">
            <div className="mil-load"></div>
            <p className="h2 mil-mb-30">
              <span className="mil-light mil-counter" data-number="100">100</span>
              <span className="mil-light">%</span>
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
        
        {/* JavaScript Files */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/swiper.min.js" strategy="lazyOnload" />
        <Script src="/js/plugins/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/plugins/ScrollSmoother.min.js" strategy="lazyOnload" />
        <Script src="/js/plugins/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/js/plugins/ScrollTo.min.js" strategy="lazyOnload" />
        <Script src="/js/plugins/magnific-popup.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}