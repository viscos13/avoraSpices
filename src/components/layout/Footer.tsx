'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '../ui/Logo';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { COMPANY_INFO } from '@/data/company';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative bg-[#082920] text-[#FAF8F5] pt-16 sm:pt-20 overflow-hidden border-t border-[#0B3B2E]"
      style={{
        paddingBottom: 'max(7rem, calc(5rem + env(safe-area-inset-bottom, 0px)))',
      }}
    >
      {/* Saffron Gold Hairline Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E5A024]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Bengaluru Headquarters (Col span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="mb-5 inline-block">
              <Logo size="lg" inverted={true} />
            </Link>
            <p className="font-sans text-sm text-[#FAF8F5]/75 font-light leading-relaxed mb-6 max-w-sm">
              Headquartered in Bengaluru, India. Single-origin Indian spice exports curated strictly for international food manufacturers, wholesale spice importers, and gourmet blenders worldwide.
            </p>
            <div className="flex items-start gap-2.5 font-sans text-xs text-[#FAF8F5]/85">
              <MapPin className="w-4 h-4 text-[#E5A024] flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.headquarters.address}</span>
            </div>
          </div>

          {/* Column 2: Flagship Spices Portfolio (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E5A024] font-semibold mb-4 sm:mb-6">
              Flagship Spices
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li>
                <Link
                  href="/products?spice=cardamom"
                  className="text-[#FAF8F5]/85 hover:text-[#E5A024] transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Green Cardamom</span>
                  <span className="text-[11px] text-[#FAF8F5]/50 group-hover:text-[#E5A024] tabular-nums">0908.31</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?spice=pepper"
                  className="text-[#FAF8F5]/85 hover:text-[#E5A024] transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Black Pepper</span>
                  <span className="text-[11px] text-[#FAF8F5]/50 group-hover:text-[#E5A024] tabular-nums">0904.11</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products?spice=clove"
                  className="text-[#FAF8F5]/85 hover:text-[#E5A024] transition-colors flex items-center justify-between group py-0.5"
                >
                  <span>Whole Cloves</span>
                  <span className="text-[11px] text-[#FAF8F5]/50 group-hover:text-[#E5A024] tabular-nums">0907.10</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs text-[#E5A024] hover:underline"
                >
                  <span>Technical Specification Matrix</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trade & Logistics (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E5A024] font-semibold mb-4 sm:mb-6">
              Trade &amp; Logistics
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#FAF8F5]/85">
              <li>
                <Link href="/quality" className="hover:text-[#E5A024] transition-colors py-0.5 block">
                  5-Stage Traceable Protocol
                </Link>
              </li>
              <li>
                <Link href="/quality#packaging" className="hover:text-[#E5A024] transition-colors py-0.5 block">
                  Container Loadability (FCL / LCL)
                </Link>
              </li>
              <li>
                <Link href="/about#bengaluru" className="hover:text-[#E5A024] transition-colors py-0.5 block">
                  Bengaluru Export Corridor Advantage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E5A024] transition-colors py-0.5 block">
                  Request Pre-Shipment Trade Sample
                </Link>
              </li>
              <li>
                <Link href="/contact#faq" className="hover:text-[#E5A024] transition-colors py-0.5 block">
                  International Trade FAQ &amp; Incoterms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Export Desk (Col span 3) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[#E5A024] font-semibold mb-4 sm:mb-6">
              Export Desk
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-[#FAF8F5] hover:text-[#E5A024] transition-colors font-sans py-1"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#E5A024]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold tabular-nums">{COMPANY_INFO.contact.phoneFormatted}</span>
              </a>

              <a
                href={COMPANY_INFO.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#FAF8F5] hover:text-[#25D366] transition-colors font-sans py-1"
              >
                <div className="w-8 h-8 rounded-full bg-[#25D366]/15 flex items-center justify-center border border-[#25D366]/30 text-[#25D366]">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" />
                </div>
                <span>WhatsApp Trade Desk</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-sm text-[#FAF8F5] hover:text-[#E5A024] transition-colors font-sans py-1"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#E5A024]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.contact.email}</span>
              </a>

              <div className="mt-2 p-3.5 rounded-xl bg-white/5 border border-white/5 font-sans text-xs text-[#FAF8F5]/75">
                <div className="text-[#E5A024] font-semibold mb-1 uppercase tracking-wider text-[10px]">
                  Export Desk Operating Hours
                </div>
                <div>{COMPANY_INFO.contact.tradeDeskHours.ist}</div>
                <div className="text-[#FAF8F5]/50 text-[11px]">{COMPANY_INFO.contact.tradeDeskHours.gmt}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance Ribbon (Offset cleanly away from bottom floating pill) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-[#FAF8F5]/65 sm:pr-48">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#E5A024] flex-shrink-0" />
            <span>
              Spices Board India Standards • FSSAI Central Export License • APEDA Export Ready • Phytosanitary &amp; SGS Audit Supported
            </span>
          </div>

          <div className="flex items-center gap-4 text-center pt-2 md:pt-0">
            <span>© {new Date().getFullYear()} AROVA SPICES INTERNATIONAL LLP</span>
            <span className="text-white/20">|</span>
            <span className="text-[#E5A024] font-medium">BENGALURU • INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
