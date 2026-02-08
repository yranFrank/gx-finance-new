import React from 'react';
import FadeIn from './FadeIn';

interface ScrollFadeProps {
  children: React.ReactNode;
  stagger?: number;
}

const ScrollFade: React.FC<ScrollFadeProps> = ({ children, stagger = 140 }) => {
  const items = React.Children.toArray(children).filter(Boolean);

  return (
    <>
      {items.map((child, index) => (
        <FadeIn key={index} delay={index * stagger}>
          {child as React.ReactNode}
        </FadeIn>
      ))}
    </>
  );
};

export default ScrollFade;
