
import React from 'react';
import FadeIn from './FadeIn';

const IndustryRecognition: React.FC = () => {
  const awards = [
    {
      id: "elite",
      title: "Elite Broker",
      year: "2024/2025",
      sub: "Financial Year",
      renderIcon: () => (
        <span className="block text-4xl font-serif text-yellow-500 mb-1">♦</span>
      ),
      bgGlow: "bg-yellow-400/10",
    },
    {
      id: "plat",
      title: "Platinum Award",
      year: "2023",
      sub: "LMG Plan Australia",
      renderIcon: () => (
         <div className="w-8 h-1 bg-blue-900 mb-2 mx-auto"></div>
      ),
      bgGlow: "bg-blue-900/10",
    },
    {
      id: "gold",
      title: "Gold Award",
      year: "2021",
      sub: "Plan Australia",
      renderIcon: () => (
         <div className="w-8 h-1 bg-yellow-500 mb-2 mx-auto"></div>
      ),
      bgGlow: "bg-yellow-600/10",
    },
    {
      id: "diamond",
      title: "Diamond Club",
      year: "2024",
      sub: "MQG",
      renderIcon: () => (
         <div className="w-8 h-1 bg-gray-800 mb-2 mx-auto"></div>
      ),
      bgGlow: "bg-gray-900/10",
    }
  ];

  // Repeat the array to ensure smooth scrolling
  const scrollItems = [...awards, ...awards, ...awards, ...awards];

  return (
    <section className="bg-white border-b grid-border py-24 overflow-hidden">
       {/* Header */}
       <div className="max-w-[1800px] mx-auto px-8 mb-20 text-center">
          <FadeIn>
             <div className="flex flex-col items-center">
               <span className="w-px h-12 bg-glc-slate mb-6"></span>
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-glc-gold mb-6">Honours</p>
               <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-glc-slate leading-none">
                  Elite Status
               </h3>
             </div>
          </FadeIn>
       </div>

       {/* Scrolling Marquee */}
       <div className="relative flex overflow-x-hidden group">
          {/* Track 1 */}
          <div className="flex animate-scroll whitespace-nowrap py-4 flex-shrink-0">
             {scrollItems.map((item, i) => (
                <div key={`t1-${i}`} className="mx-8 md:mx-16 w-64 flex-shrink-0 flex flex-col items-center justify-center group/item cursor-default">
                   {/* Badge Circle */}
                   <div className="w-40 h-40 mb-8 relative flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-500">
                      <div className={`absolute inset-0 rounded-full ${item.bgGlow} animate-pulse-slow`}></div>
                      <div className="w-full h-full rounded-full border border-gray-100 bg-white flex items-center justify-center overflow-hidden shadow-sm relative z-10">
                         <div className="text-center p-4">
                            {item.renderIcon()}
                            <span className="text-[10px] font-black uppercase text-glc-slate leading-tight block mt-2">
                              {item.title}<br/>{item.year}
                            </span>
                         </div>
                      </div>
                   </div>
                   <p className="text-sm font-black text-glc-slate uppercase tracking-wider mb-2">{item.title}</p>
                   <p className="text-[10px] font-bold text-glc-gray uppercase tracking-widest">{item.sub}</p>
                </div>
             ))}
          </div>

          {/* Track 2 */}
          <div className="flex animate-scroll whitespace-nowrap py-4 flex-shrink-0">
             {scrollItems.map((item, i) => (
                <div key={`t2-${i}`} className="mx-8 md:mx-16 w-64 flex-shrink-0 flex flex-col items-center justify-center group/item cursor-default">
                   <div className="w-40 h-40 mb-8 relative flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-500">
                      <div className={`absolute inset-0 rounded-full ${item.bgGlow} animate-pulse-slow`}></div>
                      <div className="w-full h-full rounded-full border border-gray-100 bg-white flex items-center justify-center overflow-hidden shadow-sm relative z-10">
                         <div className="text-center p-4">
                            {item.renderIcon()}
                            <span className="text-[10px] font-black uppercase text-glc-slate leading-tight block mt-2">
                              {item.title}<br/>{item.year}
                            </span>
                         </div>
                      </div>
                   </div>
                   <p className="text-sm font-black text-glc-slate uppercase tracking-wider mb-2">{item.title}</p>
                   <p className="text-[10px] font-bold text-glc-gray uppercase tracking-widest">{item.sub}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

export default IndustryRecognition;