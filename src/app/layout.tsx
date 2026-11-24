import type { Metadata } from 'next';
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rayhantp.vercel.app'),
  title: 'Rayhan Tshani Putra — Sistem Operasional, Infrastruktur & Produksi Visual',
  description:
    'Portofolio pribadi Rayhan Tshani Putra: membangun sistem kasir (POS), asisten AI di VPS dengan multi-router & WhatsApp, infrastruktur jaringan/NAS/CCTV, serta produksi visual.',
  openGraph: {
    title: 'Rayhan Tshani Putra — Portofolio Editorial',
    description:
      'Membangun sistem nyata, infrastruktur praktis dari perangkat keras hingga server, dan produksi visual.',
    url: 'https://rayhantp.vercel.app',
    siteName: 'Rayhan Tshani Putra',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-theme="paper"
      className={`${instrumentSerif.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
