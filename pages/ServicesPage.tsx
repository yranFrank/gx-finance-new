import React from 'react';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import FadeIn from '../components/FadeIn';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="bg-glc-slate text-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-glc-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        <FadeIn>
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Our <span className="text-glc-gold">Expertise</span></h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">Comprehensive financial solutions tailored to your personal and business needs.</p>
        </FadeIn>
      </div>
      <Services />
      <FAQ />
    </div>
  );
};

export default ServicesPage;