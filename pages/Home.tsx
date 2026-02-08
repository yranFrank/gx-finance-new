import React from 'react';
import Hero from '../components/Hero';
import Awards from '../components/Awards';
import Services from '../components/Services';
import Advantages from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Awards />
      <Services />
      <Advantages />
      <Testimonials />
      
      {/* Final Call to Action - Light Mode */}
      <div className="bg-glc-slate py-32 text-center border-t border-white/5 relative overflow-hidden group">
         
         <div className="relative z-10 max-w-3xl mx-auto px-6">
           <FadeIn>
             <h2 className="text-white text-5xl md:text-6xl font-extrabold mb-8 uppercase tracking-tight">
               Ready to <span className="text-glc-gold">Start?</span>
             </h2>
             <p className="text-gray-300 text-lg mb-12 max-w-xl mx-auto">
               Your financial freedom is just a conversation away. Let's build your future together.
             </p>
             <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-glc-red text-white px-12 py-5 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-glc-red transition-all shadow-xl shadow-red-900/50">
               Get Free Consultation
               <ArrowRight size={20} />
             </Link>
           </FadeIn>
         </div>
      </div>
    </div>
  );
};

export default Home;