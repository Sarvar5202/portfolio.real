// src/components/common/LanguageSwitcher.tsx
'use client';

import {useLocale, useTranslations} from 'next-intl';
import {useRouter} from 'next/navigation';
import {ChangeEvent} from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // replace locale segment in the path
    const path = window.location.pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  return (
    <div className="absolute top-4 right-4 z-20">
      <select
        value={locale}
        onChange={handleChange}
        className="bg-bgDark text-white border border-primary/30 rounded-md px-2 py-1 text-sm"
        aria-label="Select language"
      >
        <option value="uz">Uzbek</option>
        <option value="ru">Русский</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
