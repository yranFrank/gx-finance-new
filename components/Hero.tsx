import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, TrendingUp, CheckCircle2, Activity, PieChart, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle Parallax Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden py-20"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {/* --- Dynamic Background (Red & Gold Theme) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `linear-gradient(#C8102E 1px, transparent 1px), linear-gradient(90deg, #C8102E 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>

        {/* Ambient Moving Orbs */}
        <div 
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-glc-red/5 rounded-full blur-3xl transition-transform duration-100 ease-out animate-pulse-slow"
            style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * 20}px)` }}
        ></div>
        <div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glc-gold/10 rounded-full blur-3xl transition-transform duration-100 ease-out animate-pulse-slow"
            style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * -20}px)` }}
        ></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6">
        <FadeIn delay={100} className="w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content - Typography Focused */}
            <div className="space-y-12 relative z-20">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-glc-red/5 rounded-full border border-glc-red/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glc-red opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-glc-red"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-[0.25em] text-glc-red">Architectural Finance</span>
              </div>

              {/* Heading */}
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter group cursor-default">
                <span className="block text-glc-red transition-transform duration-500 hover:translate-x-2">
                  Capital
                </span>
                <span className="block font-serif italic font-normal text-glc-gold opacity-90 transition-transform duration-500 hover:translate-x-6 hover:opacity-100">
                  Structures
                </span>
                <span className="block text-glc-slate transition-transform duration-500 hover:translate-x-2">
                  Reimagined.
                </span>
              </h1>

              <p className="text-xl text-gray-500 font-medium max-w-lg leading-relaxed border-l-4 border-glc-gold pl-6">
                We design complex lending frameworks for residential and commercial expansion. Bespoke finance for the ambitious.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link 
                  to="/contact" 
                  className="px-10 py-5 bg-glc-red text-white text-xs font-black uppercase tracking-[0.2em] shadow-xl hover:bg-glc-slate transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-4 group"
                >
                  Start Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to="/services" 
                  className="px-10 py-5 bg-white border-2 border-glc-slate/5 text-glc-slate text-xs font-black uppercase tracking-[0.2em] hover:border-glc-gold hover:text-glc-gold transition-all duration-300"
                >
                  View Services
                </Link>
              </div>

              {/* Stats */}
              <div className="pt-12 grid grid-cols-3 gap-8">
                <div>
                    <p className="text-3xl font-black text-glc-red">$2.4B+</p>
                    <p className="text-[10px] font-bold text-glc-gold uppercase tracking-widest mt-1">Settled</p>
                </div>
                <div>
                    <p className="text-3xl font-black text-glc-red">10+</p>
                    <p className="text-[10px] font-bold text-glc-gold uppercase tracking-widest mt-1">Years Exp</p>
                </div>
                <div>
                    <p className="text-3xl font-black text-glc-red">500+</p>
                    <p className="text-[10px] font-bold text-glc-gold uppercase tracking-widest mt-1">Clients</p>
                </div>
              </div>
            </div>

            {/* Right Content - "Orbiting Financial Solar System" (No Blocks) */}
            <div className="hidden lg:flex items-center justify-center relative h-[600px] w-full perspective-1200">
              
              {/* Central Hub: The Core Value */}
              <div className="relative z-20 w-48 h-48 rounded-full bg-white border border-gray-100 shadow-[0_0_60px_rgba(200,16,46,0.15)] flex flex-col items-center justify-center animate-float">
                 <div className="absolute inset-0 rounded-full border-4 border-glc-gold/10 animate-pulse-slow"></div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Exclusive</p>
                 <div className="text-5xl font-black text-glc-red tracking-tight">5.89<span className="text-2xl">%</span></div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-glc-slate mt-1">GX Rate</p>
              </div>

              {/* Orbit Track 1 (Inner) */}
              <div className="absolute w-[400px] h-[400px] border border-dashed border-gray-200 rounded-full animate-orbit-cw">
                 {/* Satellite 1: Savings (Mini Bar Chart) */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-ccw">
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-lg flex items-center justify-center p-3">
                          <div className="flex items-end gap-1 h-8 w-full justify-center">
                             <div className="w-2 bg-gray-200 h-4 rounded-t-sm"></div>
                             <div className="w-2 bg-glc-gold h-6 rounded-t-sm"></div>
                             <div className="w-2 bg-glc-red h-8 rounded-t-sm"></div>
                          </div>
                       </div>
                       <div className="bg-white px-3 py-1 rounded-full shadow-md border border-gray-50 text-[10px] font-bold text-glc-slate whitespace-nowrap">
                          Avg Savings $4k+
                       </div>
                    </div>
                 </div>

                 {/* Satellite 2: Approval Badge (Pill) */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-orbit-ccw">
                     <div className="bg-white px-4 py-2 rounded-full shadow-xl border border-green-100 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <div>
                           <p className="text-[9px] uppercase font-bold text-gray-400 leading-none">Status</p>
                           <p className="text-xs font-black text-glc-slate leading-none">Pre-Approved</p>
                        </div>
                     </div>
                 </div>
              </div>

              {/* Orbit Track 2 (Outer) */}
              <div className="absolute w-[600px] h-[600px] border border-gray-100 rounded-full animate-orbit-ccw-fast opacity-60">
                  {/* Satellite 3: Equity Growth (Circular Progress) */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 animate-orbit-cw-fast">
                      <div className="relative w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center">
                         <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#f3f4f6" strokeWidth="8" />
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#CCA43B" strokeWidth="8" strokeDasharray="283" strokeDashoffset="70" strokeLinecap="round" />
                         </svg>
                         <div className="text-center z-10">
                            <p className="text-xs font-black text-glc-slate">+12%</p>
                            <p className="text-[8px] font-bold uppercase text-gray-400">Equity</p>
                         </div>
                      </div>
                  </div>

                  {/* Satellite 4: Market Trend (Floating Icon) */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 animate-orbit-cw-fast">
                      <div className="w-14 h-14 bg-glc-red text-white rounded-full shadow-lg shadow-red-200 flex items-center justify-center">
                         <TrendingUp size={24} />
                      </div>
                  </div>
              </div>

              {/* Decorative Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-glc-gold/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
              
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;