// src/components/sections/Projects.tsx
import {useTranslations} from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');

  return (
    <section id="projects" className="py-20 px-6 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">03. {t('sectionTitle')}</h2>
        <h3 className="text-3xl md:text-5xl font-space font-bold text-white">{t('title')}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Featured Single Project Container */}
      <div className="max-w-3xl mx-auto">
        <div className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col group border border-amber-500/30">
          {/* Project Banner Image Visual */}
          <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-[#0c0f1d] via-[#121829] to-[#080b14] flex items-center justify-center p-6">
            <div className="flex flex-col items-center justify-center text-center transform group-hover:scale-105 transition-transform duration-500">
              {/* Najot Ta'lim Gold Emblem SVG */}
              <svg className="w-24 h-24 text-[#c5a059] mb-3 drop-shadow-[0_0_20px_rgba(197,160,89,0.5)]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 165L50 115L70 95L100 125L130 95L150 115L100 165Z" fill="currentColor"/>
                <path d="M100 140L35 75L55 55L100 100L145 55L165 75L100 140Z" fill="currentColor" opacity="0.85"/>
                <path d="M100 115L20 35L40 15L100 75L160 15L180 35L100 115Z" fill="currentColor" opacity="0.65"/>
              </svg>
              <div className="font-space font-extrabold tracking-widest text-2xl sm:text-3xl text-white">
                NAJOT <span className="text-[#c5a059]">TA'LIM</span>
              </div>
              <span className="text-xs font-mono text-amber-200/80 tracking-widest uppercase mt-1">{t('crmManagement')}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80"></div>
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 text-amber-300 backdrop-blur-md border border-amber-500/30">React / CRM</span>
          </div>
          
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-space font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{t('projectTitle')}</h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {t('projectDesc')}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-amber-200 border border-amber-500/20">React</span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-gray-300">JavaScript</span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-gray-300">Tailwind CSS</span>
                <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-gray-300">REST API</span>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <a href="https://github.com/Sarvar5202/exam7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-gray-300 hover:text-amber-400 transition-colors">
                  <i className="fa-brands fa-github text-base"></i> GitHub
                </a>
                <a href="https://crm-exam-lemon.vercel.app/login" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-amber-400 hover:text-white transition-colors ml-auto">
                  <i className="fa-solid fa-arrow-up-right-from-square text-base"></i> {t('liveDemo')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
