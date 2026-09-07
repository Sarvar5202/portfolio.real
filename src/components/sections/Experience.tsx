// src/components/sections/Experience.tsx
import {useTranslations} from 'next-intl';

export default function Experience() {
  const t = useTranslations('Experience');

  return (
    <section id="experience" className="py-20 px-6 relative max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">02. {t('sectionTitle')}</h2>
        <h3 className="text-3xl md:text-5xl font-space font-bold text-white">{t('title')}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative border-l border-gray-800 ml-4 md:ml-32 space-y-12">
        <div className="relative pl-8 group">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-bgDark group-hover:scale-150 transition-transform shadow-lg shadow-primary"></div>
          <div className="hidden md:block absolute -left-36 top-0 text-xs font-mono text-gray-400">2024 - Present</div>
          
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
              <h4 className="text-xl font-space font-bold text-white">{t('jobs.job1.title')}</h4>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20">{t('fullTime')}</span>
            </div>
            <span className="md:hidden text-xs font-mono text-gray-400 block mb-3">2024 - Present</span>
            <h5 className="text-sm font-medium text-secondary mb-4">{t('jobs.job1.company')}</h5>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t('jobs.job1.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Next.js</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">TypeScript</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Three.js</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="relative pl-8 group">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-bgDark group-hover:scale-150 transition-transform shadow-lg shadow-secondary"></div>
          <div className="hidden md:block absolute -left-36 top-0 text-xs font-mono text-gray-400">2023 - 2024</div>
          
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
              <h4 className="text-xl font-space font-bold text-white">{t('jobs.job2.title')}</h4>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-secondary/10 text-secondary border border-secondary/20">{t('contract')}</span>
            </div>
            <span className="md:hidden text-xs font-mono text-gray-400 block mb-3">2023 - 2024</span>
            <h5 className="text-sm font-medium text-primary mb-4">{t('jobs.job2.company')}</h5>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t('jobs.job2.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">React</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Redux Toolkit</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">REST API</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">PostgreSQL</span>
            </div>
          </div>
        </div>

        <div className="relative pl-8 group">
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-bgDark group-hover:scale-150 transition-transform shadow-lg shadow-accent"></div>
          <div className="hidden md:block absolute -left-36 top-0 text-xs font-mono text-gray-400">2022 - 2023</div>
          
          <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
              <h4 className="text-xl font-space font-bold text-white">{t('jobs.job3.title')}</h4>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">{t('freelance')}</span>
            </div>
            <span className="md:hidden text-xs font-mono text-gray-400 block mb-3">2022 - 2023</span>
            <h5 className="text-sm font-medium text-gray-400 mb-4">{t('jobs.job3.company')}</h5>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t('jobs.job3.desc')}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Node.js</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Supabase</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">GSAP</span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-gray-300">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
