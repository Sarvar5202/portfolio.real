// src/components/ScrollProgress.tsx
'use client';

import {useEffect, useState} from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-accent z-50 transition-all duration-75"
      style={{width: `${progress}%`}}
    />
  );
}
