import React from 'react';
import FadeIn from './FadeIn';
import { ArrowUpRight, Home, TrendingUp, Building2, Landmark } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Home Loans",
      icon: Home,
      description: "First home buyers, investment properties, and next home purchases made simple. We navigate grants and secure rates that fit your lifestyle."
    },
    {
      id: "02",
      title: "Refinancing",
      icon: TrendingUp,
      description: "Lower your interest rates, consolidate debt, or access equity for renovations. We analyze your situation to find better terms that save money."
    },
    {
      id: "03",
      title: "Commercial",
      icon: Building2,
      description: "Smart financing solutions for your business success. From equipment finance to commercial property acquisition, we support your growth."
    },
    {
      id: "04",
      title: "SMSF Lending",
      icon: Landmark,
      description: "Strategize for retirement by investing with your Self-Managed Super Fund. We understand the specific regulatory requirements for SMSF."
    }
  ];

  return (
    <section id="services" className="bg-glc-offwhite text-glc-slate py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
           <FadeIn>
            <h2 className="text-5xl md:text-6xl font-extrabold text-glc-slate tracking-tight uppercase leading-none">
              Our <span className="text-glc-red">Services</span>
            </h2>
           </FadeIn>
           <FadeIn delay={100}>
             <p className="text-glc-gray max-w-sm text-sm leading-relaxed border-l-2 border-glc-gold pl-4">
               Tailored financial solutions designed to maximize your potential and secure your future assets.
             </p>
           </FadeIn>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 100}>
              <div className="group bg-white p-8 rounded-xl transition-all duration-500 border border-gray-100 relative overflow-hidden h-full flex flex-col shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative Circle */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-50 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:scale-150"></div>

                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-14 h-14 bg-glc-slate text-white rounded-lg flex items-center justify-center group-hover:bg-glc-red transition-colors duration-300 shadow-lg">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-5xl font-bold text-gray-100 font-serif group-hover:text-glc-gold/20 transition-colors select-none">{service.id}</span>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="flex items-center justify-between mb-3">
                     <h3 className="text-xl font-bold uppercase text-glc-slate group-hover:text-glc-red transition-colors">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="text-gray-300 group-hover:text-glc-red transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                  </div>
                  
                  <p className="text-glc-gray text-sm leading-relaxed mb-6 group-hover:text-glc-slate transition-colors border-t border-gray-100 pt-4 group-hover:border-red-100">
                    {service.description}
                  </p>
                </div>
                
                {/* Bottom Border Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-glc-gold group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;