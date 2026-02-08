import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Info */}
          <div>
            <FadeIn>
              <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-none mb-10 text-glc-slate">
                Let's Talk<br/>
                <span className="text-glc-red">Business.</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg text-glc-gray mb-16 max-w-md leading-relaxed border-l-2 border-glc-gold pl-4">
                Ready to secure your financial future? We are here to help you navigate the market with confidence.
              </p>
            </FadeIn>
            
            <div className="space-y-12">
              <FadeIn delay={300}>
                <div className="group flex gap-6 items-start">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-glc-slate shrink-0 group-hover:bg-glc-red group-hover:text-white transition-colors">
                     <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-glc-gray mb-1">Phone</p>
                    <p className="text-2xl font-bold text-glc-slate hover:text-glc-red transition-colors cursor-pointer">+61 430 807 217</p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={400}>
                <div className="group flex gap-6 items-start">
                   <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-glc-slate shrink-0 group-hover:bg-glc-red group-hover:text-white transition-colors">
                     <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-glc-gray mb-1">Email</p>
                    <p className="text-xl font-bold text-glc-slate hover:text-glc-red transition-colors cursor-pointer">admin@gxfinance.com.au</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="group flex gap-6 items-start">
                   <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-glc-slate shrink-0 group-hover:bg-glc-red group-hover:text-white transition-colors">
                     <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-glc-gray mb-1">Office</p>
                    <p className="text-xl font-bold text-glc-slate">Level 1, Suite 2/339 Whitehorse Rd,<br/>Balwyn VIC 3103</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Form */}
          <FadeIn direction="left" delay={200} className="w-full">
            <div className="bg-glc-offwhite p-10 md:p-14 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-100">
              
              <form className="space-y-8 relative z-10">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-glc-slate">Name</label>
                  <input type="text" className="w-full bg-white border border-gray-200 rounded-sm px-4 py-4 text-glc-slate focus:outline-none focus:border-glc-red transition-all text-sm placeholder-gray-400" placeholder="ENTER YOUR NAME" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-glc-slate">Email</label>
                  <input type="email" className="w-full bg-white border border-gray-200 rounded-sm px-4 py-4 text-glc-slate focus:outline-none focus:border-glc-red transition-all text-sm placeholder-gray-400" placeholder="ENTER YOUR EMAIL" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-glc-slate">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-gray-200 rounded-sm px-4 py-4 text-glc-slate focus:outline-none focus:border-glc-red transition-all text-sm placeholder-gray-400 resize-none" placeholder="HOW CAN WE HELP?"></textarea>
                </div>
                
                <button className="w-full bg-glc-red text-white py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-red-800 transition-all duration-300 flex items-center justify-center gap-3 mt-8 shadow-lg shadow-red-100">
                  Send Request <Send size={16} />
                </button>
              </form>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Contact;