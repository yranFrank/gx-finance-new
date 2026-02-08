import React from 'react';
import { Star, Quote } from 'lucide-react';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Sokoskov",
      role: "Home Buyer",
      text: "Highly recommended! We had the best experience with Gianna and the team. They went above and beyond to help us achieve our financial goals."
    },
    {
      name: "Wayting Huyhn",
      role: "Property Investor",
      text: "Highly professional, efficient, and incredibly supportive. Submitted the materials yesterday and got approved today! Couldn't have done it without them."
    },
    {
      name: "James Doe",
      role: "Refinancer",
      text: "GX Finance made refinancing simple. They explained every step and found me a rate that saved me thousands per year. Truly grateful."
    }
  ];

  return (
    <section id="testimonials" className="bg-glc-offwhite text-glc-slate py-32 relative overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-20 text-center">
            Client <span className="text-glc-red">Success</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={i * 150} className="h-full">
              <div className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full flex flex-col justify-between">
                 <div>
                   <div className="flex gap-1 mb-6">
                     {[1,2,3,4,5].map(star => (
                       <Star key={star} size={16} className="fill-glc-gold text-glc-gold" />
                     ))}
                   </div>
                   <div className="mb-8 relative">
                     <Quote size={24} className="text-gray-200 absolute -top-4 -left-2" />
                     <p className="text-glc-slate leading-relaxed italic relative z-10 pl-4 text-sm">"{t.text}"</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                   <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-glc-red font-bold text-sm border border-red-100">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                      <p className="font-bold text-glc-slate uppercase tracking-wider text-xs">{t.name}</p>
                      <p className="text-[10px] text-glc-gold uppercase mt-1 tracking-widest">{t.role}</p>
                   </div>
                 </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;