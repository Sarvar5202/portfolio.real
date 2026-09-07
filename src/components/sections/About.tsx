// src/components/sections/About.tsx
import {useTranslations} from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-20 px-6 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">01. {t('sectionTitle')}</h2>
        <h3 className="text-3xl md:text-5xl font-space font-bold text-white">{t('title')}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group">
          <div>
            <h4 className="text-2xl font-space font-bold text-gradient mb-4">
              {t('heading')}
            </h4>
            <p className="text-gray-300 font-inter leading-relaxed mb-6 text-sm sm:text-base">
              {t('p1')}
            </p>
            <p className="text-gray-400 font-inter leading-relaxed mb-6 text-sm sm:text-base">
              {t('p2')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-800">
            <div>
              <span className="text-xs font-mono text-gray-400 block">{t('location')}</span>
              <span className="text-sm font-semibold text-white">{t('locationValue')}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 block">{t('degree')}</span>
              <span className="text-sm font-semibold text-white">{t('degreeValue')}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 block">{t('status')}</span>
              <span className="text-sm font-semibold text-emerald-400">{t('statusValue')}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-3">
              <i className="fa-solid fa-code-commit"></i>
            </div>
            <span className="counter-value text-3xl sm:text-4xl font-space font-extrabold text-white">25</span>
            <span className="text-xs font-mono text-gray-400 mt-1 uppercase">{t('completedProjects')}</span>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl mb-3">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <span className="counter-value text-3xl sm:text-4xl font-space font-extrabold text-white">18</span>
            <span className="text-xs font-mono text-gray-400 mt-1 uppercase">{t('technologies')}</span>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center text-2xl mb-3">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <span className="counter-value text-3xl sm:text-4xl font-space font-extrabold text-white">3</span>
            <span className="text-xs font-mono text-gray-400 mt-1 uppercase">{t('yearsExperience')}</span>
          </div>

          <div className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-center items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl mb-3">
              <i className="fa-solid fa-face-smile"></i>
            </div>
            <span className="counter-value text-3xl sm:text-4xl font-space font-extrabold text-white">15</span>
            <span className="text-xs font-mono text-gray-400 mt-1 uppercase">{t('happyClients')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
