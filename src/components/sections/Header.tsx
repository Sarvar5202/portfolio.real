// src/components/sections/Header.tsx
'use client';

import {useState, useEffect} from 'react';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Nav');
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  // Close mobile menu on route change (optional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className="absolute top-0 left-0 w-full z-40 px-4 sm:px-6 py-4 transition-all duration-300"
      id="navbar"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card rounded-2xl px-5 py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-space font-bold text-lg text-black shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-space font-bold tracking-tight text-white group-hover:text-primary transition-colors text-sm sm:text-base">
              Sarvarbek
            </span>
            <span className="text-[9px] text-gray-400 font-mono tracking-widest -mt-1">PORTFOLIO</span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-sm font-medium">
          <a href="#skills" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-xs text-primary font-mono">01.</span> {t('skills')}
          </a>
          <a href="#experience" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-xs text-primary font-mono">02.</span> {t('experience')}
          </a>
          <a href="#projects" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-xs text-primary font-mono">03.</span> {t('projects')}
          </a>
          <a href="#contact" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-1">
            <span className="text-xs text-primary font-mono">04.</span> {t('contact')}
          </a>
        </nav>

        {/* Action button & mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-black font-semibold text-xs tracking-wide shadow-md shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all cursor-pointer"
          >
            {t('letsTalk')}
          </a>
          <button
            id="mobile-menu-btn"
            className="md:hidden text-xl text-white focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <i className={mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} id="menu-icon"></i>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`${mobileOpen ? 'flex' : 'hidden'} md:hidden max-w-7xl mx-auto mt-2 glass-card rounded-2xl p-6 flex-col gap-3 text-center`}
      >
        <a href="#skills" className="mobile-link text-gray-200 hover:text-primary py-2 text-base">
          {t('skills')}
        </a>
        <a href="#experience" className="mobile-link text-gray-200 hover:text-primary py-2 text-base">
          {t('experience')}
        </a>
        <a href="#projects" className="mobile-link text-gray-200 hover:text-primary py-2 text-base">
          {t('projects')}
        </a>
        <a href="#contact" className="mobile-link text-gray-200 hover:text-primary py-2 text-base">
          {t('contact')}
        </a>
      </div>
      <LanguageSwitcher />
    </header>
  );
}
