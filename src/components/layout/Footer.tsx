'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { COMPANY_INFO } from '@/data/company';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white overflow-hidden border-t border-[#143159]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Corporate Profile & Bengaluru HQ */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Logo size="lg" inverted={true} />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Single-origin Indian agricultural export house focused strictly on bulk whole-spice fulfilment for global food manufacturers, importers, and wholesale blenders.
            </p>
            <div className="flex items-start gap-2.5 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-[#C59238] flex-shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.headquarters.address}</span>
            </div>
          </div>

          {/* Column 2: Export Portfolio */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-[#C59238] mb-5">
              Export Portfolio
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link
                  href="/products?spice=cardamom"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  Green Cardamom (HS 0908.31)
                </Link>
              </li>
              <li>
                <Link
                  href="/products?spice=pepper"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  Black Pepper (HS 0904.11)
                </Link>
              </li>
              <li>
                <Link
                  href="/products?spice=clove"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  Whole Cloves (HS 0907.10)
                </Link>
              </li>
              <li>
                <Link
                  href="/products#matrix"
                  className="hover:text-[#C59238] text-white font-medium transition-colors"
                >
                  Specification Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Operations & Compliance */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-[#C59238] mb-5">
              Operations &amp; Compliance
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/quality" className="hover:text-white transition-colors">
                  Quality &amp; Lab Protocols
                </Link>
              </li>
              <li>
                <Link href="/quality#packaging" className="hover:text-white transition-colors">
                  Bulk Packaging &amp; FCL/LCL
                </Link>
              </li>
              <li>
                <Link href="/contact?volume=sample" className="hover:text-white transition-colors">
                  Pre-Shipment Samples
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Export Desk &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Trade Desk */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-[#C59238] mb-5">
              Direct Trade Desk
            </h3>
            <div className="space-y-3.5 text-sm">
              <a
                href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                className="flex items-center gap-3 text-white font-semibold hover:text-[#C59238] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C59238] flex-shrink-0" />
                <span>{COMPANY_INFO.contact.phoneFormatted}</span>
              </a>

              <a
                href={COMPANY_INFO.contact.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-xs transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
                <span>WhatsApp Trade Desk</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C59238] flex-shrink-0" />
                <span>{COMPANY_INFO.contact.email}</span>
              </a>

              <div className="pt-1 text-xs text-slate-300 space-y-0.5 tabular-nums">
                <div className="text-slate-400 uppercase tracking-wider font-semibold text-[11px]">
                  Operating Hours
                </div>
                <div>{COMPANY_INFO.contact.tradeDeskHours.ist}</div>
                <div className="text-slate-400">{COMPANY_INFO.contact.tradeDeskHours.gmt}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Bar */}
        <div className="border-t border-white/10 pt-8 mt-12 pb-12 sm:pb-6 lg:pr-52 sm:pr-48 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-slate-300">
          <div className="font-medium text-white">
            © 2026 Arova Spices • Bengaluru, Karnataka, India
          </div>
          <div className="text-slate-300">
            Spices Board Standards • FSSAI Compliant • APEDA Export Ready • SGS Inspection Supported
          </div>
        </div>
      </div>
    </footer>
  );
}
