import React from 'react';
import FadeIn from './FadeIn';

const Awards: React.FC = () => {
  const lenders = [
    "CBA", "ANZ", "NAB", "Westpac", "Macquarie", "Bankwest", "ING", "Suncorp", "St.George", "Liberty"
  ];

  return (
    <section className="bg-white py-16 border-y border-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 mb-10">
        <FadeIn>
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-glc-slate">
            Accredited with <span className="text-glc-gold">Major Lenders</span>
          </p>
        </FadeIn>
      </div>
      
      {/* 
         Infinite Scroll Marquee Fix:
         - Used 'flex' to position tracks side-by-side naturally (Track 2 starts where Track 1 ends).
         - Removed 'absolute' positioning which caused gaps on wider screens.
         - Added 'flex-shrink-0' to ensure tracks retain full width.
         - Added vertical padding to container to prevent hover scale clipping.
      */}
      <div className="relative flex overflow-x-hidden group">
        {/* Track 1 */}
        <div className="flex animate-scroll whitespace-nowrap py-8 flex-shrink-0">
          {[...lenders, ...lenders, ...lenders].map((lender, index) => (
            <div key={`t1-${index}`} className="mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 cursor-default transform hover:scale-110">
               <span className="text-4xl font-serif font-bold text-glc-slate hover:text-glc-red transition-colors">
                 {lender}
               </span>
            </div>
          ))}
        </div>
        
        {/* Track 2 (Duplicate) - Now flexed naturally next to Track 1 */}
        <div className="flex animate-scroll whitespace-nowrap py-8 flex-shrink-0">
          {[...lenders, ...lenders, ...lenders].map((lender, index) => (
            <div key={`t2-${index}`} className="mx-12 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 cursor-default transform hover:scale-110">
               <span className="text-4xl font-serif font-bold text-glc-slate hover:text-glc-red transition-colors">
                 {lender}
               </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;