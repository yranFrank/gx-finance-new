import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3 border-b border-gray-100 backdrop-blur-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative">
               <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="42" stroke="#C8102E" strokeWidth="8" />
                  <path d="M25 45 L50 25 L75 45" stroke="#C8102E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 55 L30 75 L70 75 L70 55" stroke="#C8102E" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-2xl tracking-tight text-glc-slate font-sans group-hover:text-glc-red transition-colors">GX FINANCE</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-xs font-bold uppercase tracking-widest transition-colors relative group ${isActive(link.to) ? 'text-glc-red' : 'text-glc-slate hover:text-glc-red'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-glc-gold transition-all ${isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-6">
              <Link to="/contact" className="flex items-center gap-2 bg-glc-red text-white px-6 py-2.5 rounded-sm hover:bg-red-700 transition-all text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-100 border border-glc-red hover:shadow-red-200">
                <Phone size={14} />
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-glc-slate hover:text-glc-red focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen z-50 left-0 top-full">
          <div className="px-6 pt-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block text-xl font-bold ${isActive(link.to) ? 'text-glc-red' : 'text-glc-slate hover:text-glc-gold'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-glc-red text-white py-4 font-bold uppercase mt-8 rounded-sm"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;