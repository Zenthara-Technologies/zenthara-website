import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactModalProvider } from '@/components/ContactModal';

export const metadata: Metadata = {
  title: 'Zenthara — We build. We deliver.',
  description: 'Zenthara builds scalable web, cloud, and data solutions.'
};

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const heroFont = Space_Grotesk({ subsets: ['latin'], variable: '--font-hero' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${jakarta.variable} ${heroFont.variable} font-sans`}>
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <ContactModalProvider />
      </body>
    </html>
  );
}
