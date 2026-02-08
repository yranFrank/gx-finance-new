import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import FadeIn from './FadeIn';
import CountUp from './CountUp';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Clean Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>
      
      {/* Subtle Red/Gold Glows for Ambience - kept very minimal */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glc-red/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content - Clean Typography */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <FadeIn delay={100} direction="left">
            <div className="inline-block border-b border-glc-gold pb-2 mb-8">
               <span className="text-glc-slate text-xs font-bold uppercase tracking-[0.2em]">Premium Finance Solutions</span>
            </div>
          </FadeIn>

          <FadeIn delay={200} direction="up">
            <h1 className="text-6xl lg:text-7xl font-extrabold text-glc-slate leading-[1.05] mb-8 tracking-tight">
              Precision in <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-glc-red to-red-600 relative">
                Lending
                {/* Decorative Line under text */}
                <svg className="absolute w-full h-3 bottom-1 left-0 text-glc-gold -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" className="animate-[draw_1s_ease-out_1s_forwards]" />
                </svg>
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-glc-gray text-lg leading-relaxed max-w-lg mb-10 border-l-2 border-glc-slate/20 pl-6">
               Simplifying the complex. We engineer tailored financial strategies for home loans, commercial expansion, and wealth creation.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 bg-glc-slate text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-glc-red transition-colors duration-300 rounded-sm shadow-lg shadow-gray-200 hover:shadow-red-100">
                <span>Start Application</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider text-glc-slate hover:text-glc-gold transition-colors border border-transparent hover:border-gray-200 rounded-sm">
                View Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={500}>
             <div className="mt-16 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                       <img src={`https://picsum.photos/100?random=${i+10}`} className="w-full h-full object-cover grayscale" alt="client" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-glc-slate text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    500+
                  </div>
                </div>
                <div className="h-8 w-px bg-gray-200"></div>
                <div>
                   <div className="flex text-glc-gold gap-0.5">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-current" />)}
                   </div>
                   <p className="text-xs font-bold uppercase tracking-wide text-glc-slate mt-1">Trusted Excellence</p>
                </div>
             </div>
          </FadeIn>
        </div>

        {/* Right Content - Abstract Linear Graphics */}
        <div className="relative h-[600px] flex items-center justify-center order-1 lg:order-2">
           <div className="w-full h-full relative">
              <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl">
                 <defs>
                    <linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#0F172A" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#0F172A" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#CCA43B" />
                      <stop offset="100%" stopColor="#F3E5AB" />
                    </linearGradient>
                 </defs>

                 {/* Abstract City/Data Pillars - Staggered Growth Animation */}
                 <rect x="150" y="550" width="60" height="0" fill="url(#grad1)" className="animate-grow-up origin-bottom" style={{animationDuration: '1.2s'}} rx="2" />
                 <rect x="230" y="550" width="60" height="0" fill="url(#grad1)" className="animate-grow-up origin-bottom" style={{animationDuration: '1.8s', animationDelay: '0.2s'}} rx="2" />
                 <rect x="310" y="550" width="60" height="0" fill="url(#grad1)" className="animate-grow-up origin-bottom" style={{animationDuration: '1.5s', animationDelay: '0.1s'}} rx="2" />
                 <rect x="390" y="550" width="60" height="0" fill="url(#grad1)" className="animate-grow-up origin-bottom" style={{animationDuration: '2.2s', animationDelay: '0.3s'}} rx="2" />
                 <rect x="470" y="550" width="60" height="0" fill="url(#grad1)" className="animate-grow-up origin-bottom" style={{animationDuration: '1.6s', animationDelay: '0.1s'}} rx="2" />
                 <rect x="550" y="550" width="60" height="0" fill="url(#grad1)" className="animate-grow-up origin-bottom" style={{animationDuration: '2.0s', animationDelay: '0.4s'}} rx="2" />

                 {/* Connecting Grid Lines - Horizontal */}
                 <line x1="100" y1="450" x2="700" y2="450" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="600" strokeDashoffset="600" className="animate-draw" style={{animationDelay: '1s'}} />
                 <line x1="100" y1="300" x2="700" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="600" strokeDashoffset="600" className="animate-draw" style={{animationDelay: '1.2s'}} />
                 <line x1="100" y1="150" x2="700" y2="150" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="600" strokeDashoffset="600" className="animate-draw" style={{animationDelay: '1.4s'}} />

                 {/* The Golden Trajectory Line - Key Visual */}
                 <path 
                    d="M 120 500 C 250 500, 300 450, 400 300 S 550 150, 680 100" 
                    fill="none" 
                    stroke="url(#goldGrad)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    className="animate-draw"
                    style={{animationDuration: '2.5s', animationDelay: '1.5s', animationTimingFunction: 'ease-in-out'}}
                 />
                 
                 {/* Floating Red Accent Node */}
                 <circle cx="680" cy="100" r="0" fill="#C8102E" className="animate-[bounce_2s_infinite]" style={{animationName: 'fadeIn, pulse', animationDuration: '0.5s, 2s', animationDelay: '4s, 4.5s', animationFillMode: 'forwards, infinite'}}>
                    <animate attributeName="r" from="0" to="8" dur="0.5s" begin="3.8s" fill="freeze" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
                 </circle>
                 
                 {/* Decorative Red Line at bottom */}
                 <rect x="150" y="550" width="0" height="4" fill="#C8102E" className="animate-expand-width" style={{animationDelay: '2.5s', animationDuration: '1s'}} />
              </svg>

              {/* Floating Stat Card - Minimalist */}
              <div className="absolute top-1/4 left-0 animate-float" style={{animationDuration: '8s'}}>
                 <div className="bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border-l-4 border-glc-red rounded-r-lg">
                    <p className="text-glc-gray text-xs font-bold uppercase tracking-wider mb-1">Interest Rates</p>
                    <div className="flex items-baseline gap-2">
                       <span className="text-3xl font-bold text-glc-slate">From</span>
                       <span className="text-3xl font-bold text-glc-gold">5.89%</span>
                    </div>
                 </div>
              </div>

              {/* Another Floating Element - Minimalist */}
              <div className="absolute bottom-1/4 right-0 animate-float" style={{animationDuration: '10s', animationDelay: '1s'}}>
                 <div className="bg-glc-slate p-6 shadow-2xl rounded-l-lg text-white border-r-4 border-glc-gold">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                       <p className="text-xs font-bold uppercase tracking-wider text-gray-300">Market Status</p>
                    </div>
                    <p className="text-xl font-bold">Optimized</p>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;