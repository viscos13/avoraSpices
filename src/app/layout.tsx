import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { QuickConnectPill } from '@/components/layout/QuickConnectPill';
import { Preloader } from '@/components/ui/Preloader';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#FFFFFF',
};

export const metadata: Metadata = {
  title: 'Arova Spices | Premium Indian Spice Export • Bengaluru, India',
  description:
    'International B2B exporter of single-origin Indian spices: 8mm+ Extra Bold Green Cardamom, Tellicherry Black Pepper (TGSEB), and Hand-Picked Lal Pari Cloves. Headquartered in Bengaluru, India.',
  keywords: [
    'Indian Spice Export',
    'Green Cardamom B2B',
    'Tellicherry Black Pepper Bulk',
    'Whole Cloves Export',
    'Spices Board of India exporter',
    'Bengaluru Spice Importers',
    'FCL LCL Spices Export',
  ],
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-ink antialiased selection:bg-saffron/20 selection:text-ink font-sans">
        {/* Editorial Preloader */}
        <Preloader />

        {/* Global Architectural Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="relative z-10">{children}</main>

        {/* Deep Malabar Emerald Architectural Footer */}
        <Footer />

        {/* Floating Quick Connect: 1-Tap WhatsApp Trade Desk + Request Quote */}
        <QuickConnectPill />
      </body>
    </html>
  );
}
