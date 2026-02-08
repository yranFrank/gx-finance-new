import React from 'react';
import Team from '../components/AboutPreview';
import Advantages from '../components/FeaturedProducts';
import FadeIn from '../components/FadeIn';
import ScrollFade from '../components/ScrollFade';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      <ScrollFade>
        <div className="bg-glc-offwhite py-24 px-6 text-center border-b border-gray-100 relative overflow-hidden">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-glc-slate mb-6">About <span className="text-glc-red">GX Finance</span></h1>
            <p className="text-glc-gray max-w-2xl mx-auto text-lg">More than just brokers, we are your long-term partners in wealth creation.</p>
          </FadeIn>
        </div>
        <Team />
        <Advantages />
      </ScrollFade>
    </div>
  );
};

export default AboutPage;
