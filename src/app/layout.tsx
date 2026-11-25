import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { QuickConnectPill } from '@/components/layout/QuickConnectPill';

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#0B1F3A',
};

export const metadata: Metadata = {
  title: 'Arova Spices | Institutional Indian Spice Exports • Bengaluru, India',
  description:
    'B2B international bulk spice exporter headquartered in Bengaluru, India. Single-origin 8mm+ Green Cardamom (AGEB), Malabar Black Pepper (TGSEB), and Hand-Picked Lal Pari Whole Cloves.',
  keywords: [
    'Indian Spice Export B2B',
    'Green Cardamom Wholesale Exporter',
    'Tellicherry Black Pepper TGSEB Bulk',
    'Whole Cloves Lal Pari Export',
    'Spices Board Exporter India',
    'Bengaluru Bulk Spice Supplier',
    'FCL LCL Spices Export India',
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
    <html lang="en" className={`${jakartaSans.variable} ${inter.variable}`}>
      <body className="bg-white text-[#334155] antialiased selection:bg-[#0B1F3A] selection:text-white font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <QuickConnectPill />
      </body>
    </html>
  );
}
