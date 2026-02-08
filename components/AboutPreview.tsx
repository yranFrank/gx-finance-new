import React from 'react';
import FadeIn from './FadeIn';
import giannaPhoto from './image/Gianna_xu.jpg';

const Team: React.FC = () => {
  return (
    <section id="about" className="bg-white text-glc-slate py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1">
             <FadeIn delay={100}>
               <div className="inline-block border-b-2 border-glc-red mb-6 pb-2">
                 <span className="text-sm font-bold uppercase tracking-widest text-glc-slate">Who We Are</span>
               </div>
             </FadeIn>
             
             <FadeIn delay={200}>
               <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase mb-10 text-glc-slate">
                 Our <span className="text-glc-gold">Story</span>
               </h2>
             </FadeIn>

             <div className="space-y-6 text-lg text-glc-gray leading-relaxed">
               <FadeIn delay={300}>
                 <p>
                   <span className="text-glc-slate font-bold">FOUNDED 10 YEARS AGO</span> by Gianna, GX Finance was born out of a deep understanding of the challenges clients face when dealing with traditional banks.
                 </p>
               </FadeIn>
               
               <FadeIn delay={400}>
                 <p>
                   We believe finance shouldn't be a barrier to your dreams. With an unwavering commitment to excellence, we have secured the trust of thousands of clients by simplifying the complex lending landscape.
                 </p>
               </FadeIn>
               
               <FadeIn delay={500}>
                 <div className="pt-10 mt-6 border-t border-gray-100">
                   <div className="grid grid-cols-2 gap-12">
                     <div>
                       <p className="text-5xl font-bold text-glc-red mb-2 font-serif">10+</p>
                       <p className="text-xs uppercase tracking-widest text-glc-gray font-bold">Years Experience</p>
                     </div>
                     <div>
                       <p className="text-5xl font-bold text-glc-red mb-2 font-serif">500+</p>
                       <p className="text-xs uppercase tracking-widest text-glc-gray font-bold">Happy Clients</p>
                     </div>
                   </div>
                 </div>
               </FadeIn>
             </div>
          </div>

          {/* Image/Profile Side */}
          <div className="relative order-1 lg:order-2">
             <FadeIn direction="left" delay={300} className="h-full">
               <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl relative group h-full border border-gray-100">
                  <img 
                    src={giannaPhoto}
                    alt="Gianna - Founder" 
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105 grayscale-[20%] hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Embedded Info on Image */}
                  <div className="absolute bottom-8 left-8 text-white">
                     <p className="font-bold text-2xl uppercase mb-1 text-glc-gold">Yan (Gianna) Xu</p>
                     <p className="text-sm uppercase tracking-widest mb-2 text-white/90">Founder & Director</p>
                     <p className="font-mono text-xs opacity-80">Credit Rep No. 5122157</p>
                  </div>
               </div>
             </FadeIn>
             
             {/* Decorative Elements */}
             <FadeIn delay={600} className="absolute -z-10 top-6 -right-6 w-full h-full hidden md:block">
                <div className="w-full h-full border-2 border-glc-gold/20 rounded-sm"></div>
             </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
