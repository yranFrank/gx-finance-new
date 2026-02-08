import React from 'react';
import { Target, Users, ShieldCheck } from 'lucide-react';
import FadeIn from './FadeIn';

const Advantages: React.FC = () => {
  const advantages = [
    {
      title: "Tailored Strategies",
      description: "Every financial story is unique. We craft bespoke lending solutions to match your specific goals.",
      icon: Target
    },
    {
      title: "Skilled Negotiators",
      description: "We leverage our deep industry relationships to secure you the most competitive rates available.",
      icon: ShieldCheck
    },
    {
      title: "Enduring Partnership",
      description: "Our commitment doesn't end at settlement. We stay with you to support your continued financial growth.",
      icon: Users
    }
  ];

  return (
    <section id="advantages" className="bg-white py-32 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
             <span className="text-glc-red text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Why Choose Us</span>
             <h2 className="text-4xl md:text-5xl font-extrabold text-glc-slate uppercase tracking-tight">
               The <span className="text-glc-gold">GX Advantage</span>
             </h2>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {advantages.map((adv, index) => (
            <FadeIn key={index} delay={index * 150} direction="up">
              <div className="flex flex-col items-center text-center group h-full p-8 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                <div className="mb-8 relative">
                   {/* Icon Circle */}
                   <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center text-glc-slate group-hover:text-white group-hover:bg-glc-red group-hover:border-glc-red transition-all duration-500 shadow-xl z-10 relative">
                     <adv.icon size={32} strokeWidth={1.5} />
                   </div>
                   {/* Ring Effect */}
                   <div className="absolute inset-0 border border-gray-100 rounded-full scale-125 group-hover:scale-110 transition-transform duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold text-glc-slate uppercase mb-4">
                  {adv.title}
                </h3>
                <p className="text-glc-gray leading-relaxed text-sm max-w-xs mx-auto">
                  {adv.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;