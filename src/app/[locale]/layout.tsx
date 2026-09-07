import '../globals.css';
import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import {getMessages} from 'next-intl/server';
import CyberBackground from '@/components/common/CyberBackground';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'Sarvarbek Samariddinov | Frontend Developer & AI Engineer',
  description: 'Portfolio of Sarvarbek Samariddinov - Frontend Developer, Prompt Engineer, and Creative UI/UX Specialist based in Tashkent, Uzbekistan.'
};

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className="bg-bgDark text-white relative selection:bg-primary selection:text-black">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CyberBackground />
          <ScrollProgress />
          {children}
          <BackToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
