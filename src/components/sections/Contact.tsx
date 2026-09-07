// src/components/sections/Contact.tsx
'use client';

import {useState, FormEvent} from 'react';
import {useTranslations} from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');
  const [showToast, setShowToast] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const TELEGRAM_BOT_TOKEN = '8940781944:AAFoIz60ePRqLlNVlAAFJEXZyPMa7YqF7ps';
  const TELEGRAM_CHAT_ID = '7890020641';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const text = `📬 *Yangi Xabar (Portfolio)*\n\n👤 *Ism:* ${name}\n📧 *Email:* ${email}\n📌 *Mavzu:* ${subject}\n💬 *Xabar:* ${message}`;

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'Markdown'
        })
      });
    } catch (err) {
      console.error('Telegram API error:', err);
    } finally {
      setSubmitting(false);
      setShowToast(true);
      form.reset();
      setTimeout(() => setShowToast(false), 3500);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono text-primary uppercase tracking-widest mb-2">04. {t('sectionTitle')}</h2>
        <h3 className="text-3xl md:text-5xl font-space font-bold text-white">{t('title')}</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Contact Details */}
        <div className="lg:col-span-5 space-y-4">
          <a href="https://t.me/ssamariddinovv" target="_blank" rel="noopener noreferrer" className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-5 group block cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-telegram"></i>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block">Telegram</span>
              <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">@ssamariddinovv</span>
            </div>
            <i className="fa-solid fa-chevron-right ml-auto text-gray-600 group-hover:text-primary transition-colors"></i>
          </a>

          <a href="https://www.linkedin.com/in/sarvarbek-samariddinov/" target="_blank" rel="noopener noreferrer" className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-5 group block cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block">LinkedIn</span>
              <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">Sarvarbek Samariddinov</span>
            </div>
            <i className="fa-solid fa-chevron-right ml-auto text-gray-600 group-hover:text-primary transition-colors"></i>
          </a>

          <a href="https://github.com/Sarvar5202" target="_blank" rel="noopener noreferrer" className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-5 group block cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <i className="fa-brands fa-github"></i>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block">GitHub</span>
              <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">github.com/Sarvar5202</span>
            </div>
            <i className="fa-solid fa-chevron-right ml-auto text-gray-600 group-hover:text-primary transition-colors"></i>
          </a>

          <a href="tel:+998884647999" className="glass-card glass-card-hover p-6 rounded-2xl flex items-center gap-5 group block cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase block">{t('directPhone')}</span>
              <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">+998 88 464 79 99</span>
            </div>
            <i className="fa-solid fa-chevron-right ml-auto text-gray-600 group-hover:text-primary transition-colors"></i>
          </a>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 relative">
          <h4 className="text-2xl font-space font-bold text-white mb-6">{t('sendMessage')}</h4>
          
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono text-gray-400 uppercase mb-2">{t('yourName')}</label>
                <input type="text" id="form-name" name="name" required placeholder="John Doe" className="w-full bg-white/5 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-mono text-gray-400 uppercase mb-2">{t('emailAddress')}</label>
                <input type="email" id="form-email" name="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>

            <div>
              <label htmlFor="form-subject" className="block text-xs font-mono text-gray-400 uppercase mb-2">{t('subject')}</label>
              <input type="text" id="form-subject" name="subject" required placeholder="Project Inquiry / Opportunity" className="w-full bg-white/5 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors" />
            </div>

            <div>
              <label htmlFor="form-message" className="block text-xs font-mono text-gray-400 uppercase mb-2">{t('message')}</label>
              <textarea id="form-message" name="message" rows={4} required placeholder="Tell me about your project..." className="w-full bg-white/5 border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
            </div>

            <button type="submit" disabled={submitting} className="w-full py-4 rounded-xl bg-gradient-to-r from-primary via-accent to-secondary text-black font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-95 transition-all cursor-pointer">
              <i className="fa-solid fa-paper-plane"></i>
              <span>{submitting ? 'Sending...' : t('submit')}</span>
            </button>
          </form>

          {showToast && (
            <div id="toast" className="absolute top-4 right-4 glass-card border border-emerald-500/40 text-emerald-400 px-5 py-3 rounded-xl text-sm font-mono flex items-center gap-3 animate-bounce">
              <i className="fa-solid fa-circle-check"></i>
              <span>{t('success')}</span>
            </div>
          )}
        </div>
      </div>

      {/* Map Container */}
      <div className="glass-card rounded-3xl overflow-hidden relative shadow-2xl">
        <div className="p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono text-primary uppercase block">{t('locationMap')}</span>
            <h4 className="text-xl font-space font-bold text-white">{t('locationCity')}</h4>
          </div>

          <a href="https://yandex.com/maps/?ll=69.2401,41.2995&z=12" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-primary hover:text-black font-mono text-xs text-white transition-all flex items-center gap-2 cursor-pointer border border-white/10">
            <i className="fa-solid fa-map-location-dot"></i>
            <span>{t('openMap')}</span>
          </a>
        </div>

        <div className="relative w-full h-80 bg-gray-950">
          <iframe src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12" width="100%" height="100%" frameBorder="0" allowFullScreen={true} className="grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"></iframe>
        </div>
      </div>
    </section>
  );
}
