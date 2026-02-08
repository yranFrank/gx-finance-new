import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up' 
}) => {
  // Default to false, but if issues arise, logic below handles it
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safety check: if IntersectionObserver is not supported, show immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Fallback: Force visible after 500ms to ensure no content remains hidden due to bugs
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500 + delay);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      clearTimeout(timer);
    };
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-10';
        case 'left': return '-translate-x-10';
        case 'right': return 'translate-x-10';
        default: return 'translate-y-10';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform will-change-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
