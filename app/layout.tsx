import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NexDeal Advisory | Sparring Partner & Strategic Bodyguard',
  description: 'Conseil stratégique indépendant pour dirigeants et professionnels du M&A confrontés à des choix cruciaux.',
  openGraph: {
    title: 'NexDeal Advisory',
    description: 'Conseil stratégique indépendant pour dirigeants et professionnels du M&A.',
    url: 'https://nexdealadvisory.com',
    siteName: 'NexDeal Advisory',
    locale: 'fr_FR',
    type: 'website',
  },
};

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CookieBanner } from '@/components/CookieBanner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-background-primary text-text-primary flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
