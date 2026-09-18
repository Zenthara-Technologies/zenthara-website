import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactModalProvider } from '@/components/ContactModal';
import { THEME_INIT_SCRIPT } from '@/components/ThemeToggle';
import { ScrollReveal } from '@/components/ScrollReveal';
import { HashScrollCleanup } from '@/components/HashScrollCleanup';
import { CookieConsent } from '@/components/CookieConsent';

const SITE_URL = 'https://zentharatechnologies.com';
const SITE_NAME = 'Zenthara';
const SITE_DESCRIPTION = 'Zenthara is a product engineering partner that builds scalable web, cloud, and AI-powered solutions for teams who need to move fast without cutting corners.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Zenthara - We build. We deliver.', template: `%s — ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Zenthara - We build. We deliver.',
    description: SITE_DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Zenthara — product engineering partner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenthara - We build. We deliver.',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
};

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const heroFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-hero' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className={`min-h-screen flex flex-col ${jakarta.variable} ${heroFont.variable} font-sans`}>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <ContactModalProvider />
        <CookieConsent />
        <ScrollReveal />
        <Suspense fallback={null}>
          <HashScrollCleanup />
        </Suspense>
      </body>
    </html>
  );
}
