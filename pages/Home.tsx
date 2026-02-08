
import React from 'react';
import Hero from '../components/Hero';
import Awards from '../components/Awards'; // Renaming conceptual overlap: this is lender marquee
import IndustryRecognition from '../components/IndustryRecognition';
import Services from '../components/Services';
import Advantages from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />

      {/* Grid Bordered Section: Identity */}
      <section className="border-y grid-border bg-white">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 divide-x grid-border">
          <div className="lg:col-span-4 p-12 lg:p-24 flex flex-col justify-between">
            <FadeIn>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-glc-red mb-12">01 / Foundation</p>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-8">The Strategy <br/> Behind The <br/> Growth.</h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 p-12 lg:p-24 bg-glc-offwhite">
            <FadeIn delay={200}>
              <div className="max-w-xl space-y-8">
                <p className="text-2xl font-medium leading-tight text-glc-slate">
                  GX Finance operates at the intersection of banking expertise and strategic negotiation.
                </p>
                <p className="text-glc-gray leading-relaxed">
                  Our approach is purely architectural. We analyze the stresses of current lending policies and build reinforced structures that protect and multiply our clients' wealth.
                </p>
                <Link to="/about" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] group">
                  View Profile <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Accredited Lenders Marquee */}
      <Awards />

      <Services />

      {/* Industry Recognition Awards */}
      <IndustryRecognition />
      
      <Advantages />

      {/* Grid Bordered Section: Testimonials Header */}
      <section className="border-t grid-border py-24 px-8">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-baseline gap-8">
          <FadeIn>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Verified <br/> Outcomes.</h2>
          </FadeIn>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-glc-gray">Settled Volume: $2.4B+</p>
        </div>
      </section>
      
      <Testimonials />

      {/* Contact Trigger */}
      <section className="bg-glc-slate text-white py-32 border-t grid-border">
        <div className="max-w-[1800px] mx-auto px-8 flex flex-col items-center text-center">
          <FadeIn>
            <p className="text-glc-gold text-[10px] font-black uppercase tracking-[0.5em] mb-12">Next Phase</p>
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-16">Ready to Build?</h2>
            <Link to="/contact" className="px-16 py-8 border-2 border-white text-sm font-black uppercase tracking-[0.4em] hover:bg-white hover:text-glc-slate transition-all duration-500">
              Start Strategy
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;