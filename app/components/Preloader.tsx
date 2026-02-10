'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Immediately show content to prevent FOUC
    document.body.classList.remove('mil-preloader-active');

    // Function to simulate loading progress
    const simulateProgress = () => {
      let current = 0;
      const target = 100;
      const duration = 1500;
      const steps = 60;
      const increment = target / steps;
      const intervalTime = duration / steps;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
          setProgress(100);
          setIsComplete(true);
          
          // Hide preloader after a short delay
          setTimeout(() => {
            setLoading(false);
          }, 300);
        } else {
          setProgress(Math.floor(current));
        }
      }, intervalTime);

      return interval;
    };

    // Start the progress simulation
    const progressInterval = simulateProgress();

    // Fallback: hide preloader after max 2.5 seconds
    const timeoutId = setTimeout(() => {
      setProgress(100);
      setIsComplete(true);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#ffce00',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: isComplete ? 0 : 1,
        pointerEvents: 'none'
      }}
    >
      {/* Animated circles effect */}
      <div 
        style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          marginBottom: '40px'
        }}
      >
        {/* Outer circle */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}
        ></div>
        
        {/* Middle circle */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70px',
            height: '70px',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            animation: 'pulse 1.5s infinite'
          }}
        ></div>
        
        {/* Inner circle */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            animation: 'pulse 1s infinite'
          }}
        ></div>
        
        {/* Bolt icon in center */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '30px',
            color: '#ffffff'
          }}
        >
          <i className="fas fa-bolt"></i>
        </div>
      </div>
      
      {/* Progress text */}
      <div 
        style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#16213e',
          marginBottom: '10px',
          fontFamily: 'inherit'
        }}
      >
        {progress}%
      </div>
      
      {/* Loading text */}
      <div 
        style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#16213e',
          opacity: '0.8',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}
      >
        Loading...
      </div>
      
      {/* Animations */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}