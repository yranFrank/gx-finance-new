import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimeout = window.setTimeout(() => setIsExiting(true), 2200);
    const completeTimeout = window.setTimeout(() => onComplete(), 3000);

    return () => {
      window.clearTimeout(exitTimeout);
      window.clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0d12] text-white overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      <div className="relative flex items-center justify-center">
        <div className="gx-loader text-center flex items-center">
          <span className="gx-word gx-initial">GX</span>
          <span className="gx-word gx-finance">finance</span>
        </div>
      </div>
      <style>
        {`
          .gx-loader {
            font-family: "Suisse Intl", "Inter", system-ui, sans-serif;
            font-size: clamp(48px, 10vw, 120px);
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #ffffff;
          }
          .gx-word {
            display: inline-block;
            white-space: nowrap;
          }
          .gx-initial {
            animation: gx-shift 1.1s ease 0.9s forwards;
          }
          .gx-finance {
            opacity: 0;
            transform: translateX(-12px);
            animation: gx-reveal 0.8s ease 1.4s forwards;
            font-weight: 500;
            font-size: clamp(32px, 6.5vw, 88px);
            text-transform: lowercase;
            margin-left: 16px;
          }
          @keyframes gx-shift {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(80px);
            }
          }
          @keyframes gx-reveal {
            from {
              opacity: 0;
              transform: translateX(-12px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
