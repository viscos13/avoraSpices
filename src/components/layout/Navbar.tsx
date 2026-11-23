'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { COMPANY_INFO } from '@/data/company';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Spices', href: '/products' },
  { name: 'Quality & Exports', href: '/quality' },
  { name: 'Our Story', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scroll jank
  // and dispatch event to hide floating widgets
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-active');
      window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open: true } }));
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-active');
      window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open: false } }));
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-active');
      window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open: false } }));
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          isScrolled
            ? 'h-16 sm:h-20 bg-white/94 backdrop-blur-xl border-b border-[#141210]/8 shadow-sm'
            : 'h-18 sm:h-22 bg-gradient-to-b from-white/95 via-white/70 to-transparent'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="relative z-50 flex items-center" aria-label="Arova Spices Home">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 px-6 py-2.5 rounded-full bg-[#FBF8F3]/90 backdrop-blur-md border border-[#141210]/8 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-xs tracking-[0.14em] font-medium transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#0B3B2E] font-semibold' : 'text-[#554D45] hover:text-[#141210]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#0B3B2E] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider text-white font-medium bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors duration-300 shadow-sm"
            >
              <span>Request Bulk Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button with comfortable 44px+ touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#141210] hover:bg-[#FBF8F3] active:bg-[#F2EAE0] transition-colors relative z-50 flex items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B3B2E]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Luxury Editorial Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[75] bg-white/98 backdrop-blur-2xl flex flex-col justify-between overflow-y-auto px-6 sm:px-10 lg:hidden"
            style={{
              paddingTop: 'calc(5.5rem + env(safe-area-inset-top, 0px))',
              paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))',
            }}
          >
            <div className="flex flex-col gap-6">
              <span className="font-sans text-[11px] font-semibold tracking-[0.25em] text-[#C97E12] uppercase">
                B2B Export Navigation
              </span>
              <div className="flex flex-col gap-5">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`font-serif text-3xl sm:text-4xl transition-colors block py-1 ${
                          isActive ? 'text-[#0B3B2E] font-medium' : 'text-[#141210] active:text-[#0B3B2E]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom Trade Actions */}
            <div className="flex flex-col gap-3.5 pt-8 mt-6 border-t border-[#141210]/10">
              <div className="flex items-center justify-between font-sans text-xs text-[#554D45]">
                <span className="uppercase tracking-wider font-medium">BENGALURU EXPORT DESK</span>
                <span className="text-[#141210] font-semibold tabular-nums">{COMPANY_INFO.contact.phoneFormatted}</span>
              </div>

              {/* Direct Tap Actions */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#FBF8F3] border border-[#141210]/12 text-[#141210] font-sans text-xs font-semibold active:bg-[#F2EAE0]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0B3B2E]" />
                  <span>Call Desk</span>
                </a>

                <a
                  href={COMPANY_INFO.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#141210] font-sans text-xs font-semibold active:bg-[#25D366]/25"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 text-center rounded-full text-xs font-sans uppercase tracking-wider text-white font-semibold bg-[#0B3B2E] active:bg-[#C97E12] transition-colors shadow-sm mt-1"
              >
                Request Bulk Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
