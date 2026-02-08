import React from 'react';
import Contact from '../components/Contact';
import FadeIn from '../components/FadeIn';
import ScrollFade from '../components/ScrollFade';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <ScrollFade>
        <div className="bg-glc-slate text-white py-24 px-6 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight mb-6">Contact <span className="text-glc-gold">Us</span></h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">We are here to answer your questions and guide you through your financial journey.</p>
          </FadeIn>
        </div>
        <Contact />
        {/* Map Placeholder */}
        <div className="w-full h-96 bg-gray-200 relative grayscale">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.016336829705!2d145.0815!3d-37.8125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641113e614d3f%3A0x5045675218ce7e0!2s339%20Whitehorse%20Rd%2C%20Balwyn%20VIC%203103%2C%20Australia!5e0!3m2!1sen!2sus!4v1645498223123!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </ScrollFade>
    </div>
  );
};

export default ContactPage;
