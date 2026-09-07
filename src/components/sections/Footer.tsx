// src/components/sections/Footer.tsx
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="py-12 px-6 border-t border-gray-900 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-space font-bold text-black text-sm">
            S
          </div>
          <span className="font-space font-bold text-white text-base">Sarvarbek Samariddinov</span>
        </div>

        <p className="text-xs font-mono text-gray-500">
          {t('rights')}
        </p>

        <div className="flex items-center gap-4 text-gray-400 text-lg">
          <a href="https://t.me/ssamariddinovv" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Telegram"><i className="fa-brands fa-telegram"></i></a>
          <a href="https://github.com/Sarvar5202" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/sarvarbek-samariddinov/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
          <a href="tel:+998884647999" className="hover:text-primary transition-colors" aria-label="Phone"><i className="fa-solid fa-phone"></i></a>
        </div>
      </div>
    </footer>
  );
}
