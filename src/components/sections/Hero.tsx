// src/components/sections/Hero.tsx
'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const roles = [
    'Prompt Engineer',
    'Next.js & React',
    'TypeScript',
    'AI Agent Developer',
    'Three.js 3D Web',
    'Full-Stack Engineer',
  ];
  const [current, setCurrent] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const role = roles[roleIndex];
      if (deleting) {
        setCurrent(role.substring(0, charIndex - 1));
        setCharIndex(c => c - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      } else {
        setCurrent(role.substring(0, charIndex + 1));
        setCharIndex(c => c + 1);
        if (charIndex + 1 === role.length) {
          setDeleting(true);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-grid-pattern"
    >
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 mb-8">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs font-mono text-gray-300">{t('available')}</span>
        </div>
        <p className="text-gray-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">{t('hello')}</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-space font-extrabold tracking-tight mb-4">
          <span className="text-gradient">{t('name')}</span>
        </h1>
        <div className="h-12 sm:h-16 flex items-center justify-center mb-8">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-inter font-semibold text-gray-200 flex items-center gap-2 sm:gap-3">
            <span>{t('specialize')}</span>
            <span id="typing-text" className="text-primary font-mono border-r-2 border-primary pr-2">
              {current}
            </span>
          </h2>
        </div>
        <p className="max-w-2xl text-gray-400 text-sm sm:text-base md:text-lg font-inter leading-relaxed mb-10">
          {t('description')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            id="cv-btn"
            className="glass-card glass-card-hover px-7 py-3.5 rounded-xl text-white font-medium flex items-center gap-3 border-primary/30 text-xs sm:text-sm cursor-pointer"
          >
            <i className="fa-solid fa-file-arrow-down text-primary"></i>
            <span>{t('downloadCV')}</span>
          </button>
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-black font-semibold flex items-center gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <i className="fa-solid fa-rocket"></i>
            <span>{t('viewProjects')}</span>
          </a>
          <a
            href="#contact"
            className="glass-card glass-card-hover px-7 py-3.5 rounded-xl text-white font-medium flex items-center gap-3 border-secondary/30 text-xs sm:text-sm cursor-pointer"
          >
            <i className="fa-solid fa-paper-plane text-secondary"></i>
            <span>{t('contactMe')}</span>
          </a>
        </div>
        <div className="mt-12 flex items-center gap-6 text-gray-400 text-xl">
          <a
            href="https://t.me/ssamariddinovv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:scale-125 transition-all"
            aria-label="Telegram"
          >
            <i className="fa-brands fa-telegram"></i>
          </a>
          <a
            href="https://github.com/Sarvar5202"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:scale-125 transition-all"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sarvarbek-samariddinov/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:scale-125 transition-all"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="tel:+998884647999" className="hover:text-primary hover:scale-125 transition-all" aria-label="Phone">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
