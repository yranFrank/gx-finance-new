import React from 'react';
import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010409] text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <FadeIn>
              <h3 className="font-extrabold text-2xl mb-6 text-white tracking-tight">GX FINANCE</h3>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                Professional excellence in financial services. Dedicated to providing tailored lending solutions for your future.
              </p>
            </FadeIn>
          </div>
          
          <div>
            <FadeIn delay={100}>
              <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-glc-gold">Licensing</h4>
              <div className="text-gray-500 text-xs space-y-3 font-mono">
                <p>Yan (Gianna) Xu (CR No. 5122157)</p>
                <p>GX Finance Pty Ltd ACN 640510817</p>
                <p>Credit Rep Number 52899</p>
                <p className="pt-2 text-gray-600">Licensed Under:</p>
                <p>Buyers Choice Licensing Pty Ltd</p>
                <p>ACL 509484</p>
              </div>
            </FadeIn>
          </div>

          <div>
             <FadeIn delay={200}>
               <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-glc-gold">Contact</h4>
               <p className="text-gray-500 text-sm mb-2 hover:text-white transition-colors cursor-pointer">+61 430 807 217</p>
               <p className="text-gray-500 text-sm hover:text-white transition-colors cursor-pointer">admin@gxfinance.com.au</p>
             </FadeIn>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} GX Finance Pty Ltd. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;