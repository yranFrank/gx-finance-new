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
            font-size: clamp(72px, 14vw, 190px);
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #ffffff;
            gap: clamp(12px, 2vw, 28px);
            text-shadow:
              0 0 16px rgba(255, 255, 255, 0.12),
              0 0 48px rgba(120, 170, 255, 0.22);
          }
          .gx-word {
            display: inline-block;
            white-space: nowrap;
          }
          .gx-initial {
            animation: gx-slide-left 0.95s ease 0.35s forwards;
          }
          .gx-finance {
            opacity: 0;
            transform: translateX(-0.8em);
            animation: gx-reveal 0.85s ease 1s forwards;
            font-weight: 600;
            font-size: clamp(46px, 7.6vw, 118px);
            text-transform: lowercase;
            background: linear-gradient(120deg, #ffffff 0%, #b8d4ff 45%, #6aa8ff 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          @keyframes gx-slide-left {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-0.95em);
            }
          }
          @keyframes gx-reveal {
            from {
              opacity: 0;
              transform: translateX(-0.8em);
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
