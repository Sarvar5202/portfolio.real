// src/components/BackToTop.tsx
'use client';

import {useEffect, useState} from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card border border-primary/40 text-primary flex items-center justify-center transition-all duration-300 z-50 hover:bg-primary hover:text-black shadow-lg shadow-primary/20 cursor-pointer ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to Top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
