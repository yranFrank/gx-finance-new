import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  
  const words = ["PRECISION", "STRATEGY", "WEALTH", "GX FINANCE"];

  useEffect(() => {
    // 1. Counter Animation (Non-linear for realism)
    const duration = 2200; 
    const startTime = Date.now();

    const animateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quartic function for smooth slowdown at end
      const easeOut = 1 - Math.pow(1 - progress, 4); 
      
      setCount(easeOut * 100);

      if (progress < 1) {
        requestAnimationFrame(animateCounter);
      } else {
        // Animation complete sequence
        setTimeout(() => setIsExiting(true), 200);
        setTimeout(() => onComplete(), 1200); // Wait for exit animation
      }
    };

    requestAnimationFrame(animateCounter);

    // 2. Word Cycle Animation
    const wordInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 450);

    return () => {
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-glc-red text-white overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isExiting ? '-translate-y-full rounded-b-[100px] shadow-2xl' : 'translate-y-0 rounded-b-none'
      }`}
    >
      {/* Dynamic Background Grid (White lines on Red background) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none z-0" 
           style={{ 
             backgroundImage: 'linear-gradient(#FFFFFF 1px, transparent 1px), linear-gradient(90deg, #FFFFFF 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }}>
      </div>

      {/* Top Section */}
      <div className="flex justify-between items-start p-8 md:p-12 z-10">
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
           <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">System Initializing</span>
        </div>
        <div className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-glc-gold uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
          Est. 2014
        </div>
      </div>

      {/* Center Main Content */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 px-8 md:px-12">
        <div className="overflow-hidden">
          <h1 className={`text-5xl md:text-8xl font-black italic tracking-tighter uppercase transition-all duration-300 transform ${isExiting ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}>
             {/* Text rotates between White and Gold for impact */}
             <span className={`block ${textIndex === words.length - 1 ? 'text-glc-gold scale-105 origin-left' : 'text-white'} transition-all duration-300`}>
               {words[textIndex]}
             </span>
          </h1>
        </div>
        <div className="h-1.5 w-32 bg-glc-gold mt-8 rounded-full shadow-[0_0_20px_rgba(204,164,59,0.5)]"></div>
      </div>

      {/* Bottom Section - Giant Number */}
      <div className="p-8 md:p-12 z-10 w-full flex items-end justify-between relative">
        
        {/* Decorative Lines */}
        <div className="w-full absolute bottom-12 left-0 h-[1px] bg-white/20"></div>
        <div 
          className="absolute bottom-12 left-0 h-[2px] bg-glc-gold transition-all duration-100 ease-linear shadow-[0_0_15px_#CCA43B]"
          style={{ width: `${count}%` }}
        ></div>

        <div className="text-xs font-mono text-white/70 hidden md:block">
           SECURE CONNECTION ESTABLISHED<br/>
           ENCRYPTED: TLS 1.3
        </div>

        <div className="flex items-baseline">
          <div className="text-[6rem] md:text-[12rem] leading-[0.8] font-black font-sans tracking-tighter text-white select-none relative drop-shadow-xl">
            {Math.floor(count)}
            {/* Subtle glow behind the number */}
            <div className="absolute inset-0 blur-3xl bg-white/20 -z-10"></div>
          </div>
          <span className="text-2xl md:text-4xl font-bold text-glc-gold mb-4 md:mb-8 ml-2">%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;