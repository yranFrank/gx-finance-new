import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';

/**
 * GX Finance - Dark Mode Redesign
 * Theme: Black / Red / Gold
 */
function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // When loading is done, we keep the preloader in DOM for a second for the exit animation
  // but we can make the main content visible immediately behind it
  useEffect(() => {
    // Show content immediately so it's ready when the curtain lifts
    setShowContent(true);
  }, []);

  return (
    <>
      {loading && (
        <Preloader onComplete={() => setLoading(false)} />
      )}
      
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans antialiased text-glc-slate flex flex-col selection:bg-glc-gold/30 selection:text-glc-red">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;