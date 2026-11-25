'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { COMPANY_INFO } from '@/data/company';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products & Specs' },
  { href: '/quality', label: 'Quality & Compliance' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Export Desk' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Synchronize body class and event for floating WhatsApp button isolation
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-active');
    } else {
      document.body.classList.remove('mobile-menu-active');
    }
    window.dispatchEvent(
      new CustomEvent('mobile-menu-toggle', { detail: { open: mobileMenuOpen } })
    );
  }, [mobileMenuOpen]);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top Corporate Utility Strip */}
      <div className="bg-[#071529] text-slate-300 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <div className="truncate font-medium tracking-wide">
            <span className="hidden sm:inline">
              Single-Origin Indian Spice Exports • Headquartered in Bengaluru, India
            </span>
            <span className="sm:hidden">
              Bengaluru, India • B2B Spice Exports
            </span>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0 tabular-nums">
            <span className="hidden md:inline text-slate-300">
              Incoterms: <span className="text-white font-medium">FOB • CIF • EXW</span>
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="text-slate-200 hover:text-[#C59238] transition-colors font-medium"
            >
              <span className="hidden sm:inline">Direct Trade Desk: </span>
              <span className="text-white font-semibold">{COMPANY_INFO.contact.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Executive Navigation Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] gap-4">
            {/* Left: Corporate Logo */}
            <Link href="/" className="flex-shrink-0 focus:outline-none">
              <Logo size="md" />
            </Link>

            {/* Center: Desktop Navigation Links */}
            <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-8 h-full">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative h-full inline-flex items-center text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#0B1F3A] font-semibold'
                        : 'text-[#334155] hover:text-[#0B1F3A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0B1F3A]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Clickable Phone + Primary Navy CTA */}
            <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#143159] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C59238]" />
                <span>{COMPANY_INFO.contact.phoneFormatted}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#143159] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-colors shadow-sm"
              >
                Request Bulk Quote
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-slate-200 text-[#0B1F3A] hover:bg-slate-50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Corporate Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 space-y-5">
              <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-slate-100">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-3.5 text-base font-medium ${
                        isActive
                          ? 'text-[#0B1F3A] font-semibold'
                          : 'text-[#334155]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        className={`w-4 h-4 ${
                          isActive ? 'text-[#C59238]' : 'text-slate-400'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2 border-t border-slate-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                    className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-md border border-slate-300 bg-[#F4F7FA] text-[#0B1F3A] font-semibold text-sm tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#C59238]" />
                    <span>Call: {COMPANY_INFO.contact.phoneFormatted}</span>
                  </a>

                  <a
                    href={COMPANY_INFO.contact.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-md bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>WhatsApp Trade Desk</span>
                  </a>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 px-5 rounded-md bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold text-sm transition-colors"
                >
                  Request Bulk Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
