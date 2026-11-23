'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VISUAL_ASSETS } from '@/data/assets';
import { COMPANY_INFO } from '@/data/company';
import { ArrowUpRight, MapPin, ShieldCheck, Compass, Plane, Ship } from 'lucide-react';

const FOUR_PILLARS = [
  {
    badge: 'Pillar I • Botanical Purity',
    title: 'Pure Unadulterated Botanical Grades',
    description:
      'We never blend lower-density pinheads into bold pepper, nor do we artificially tint cardamom capsules with dye. Our clients receive 100% genuine single-origin spice harvests verified by independent laboratory certificates.',
  },
  {
    badge: 'Pillar II • Supply Continuity',
    title: 'Consistent Year-Round Contract Supply',
    description:
      'Through direct estate-level forward contracts and climate-controlled storage facilities in Bengaluru, we insulate global manufacturing partners from severe seasonal price swings and harvest shortfalls.',
  },
  {
    badge: 'Pillar III • Sample Integrity',
    title: 'Transparent Pre-Shipment Sampling',
    description:
      'The sample you inspect in your laboratory via DHL air courier is drawn from the exact production batch reserved for your ocean container. What you test is strictly what arrives at your destination port.',
  },
  {
    badge: 'Pillar IV • Direct Accountability',
    title: 'Dedicated Export Desk Communication',
    description:
      'International buyers work directly with senior export account executives in Bengaluru. Direct WhatsApp and phone lines mean no bureaucratic delays, real-time container vessel tracking, and proforma invoices within 24 hours.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-12 lg:px-20 text-[#141210]">
      <div className="max-w-7xl mx-auto">
        {/* ======================================================== */}
        {/* BRAND MANIFESTO HERO */}
        {/* ======================================================== */}
        <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97E12]" />
            <span>Our Heritage &amp; Vision</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-normal text-[#141210] mb-4 sm:mb-6 leading-tight">
            Restoring True Prestige to Indian Spice Exports.
          </h1>
          <p className="font-sans text-sm sm:text-lg text-[#554D45] font-light leading-relaxed">
            For millennia, India’s Malabar Coast and Western Ghats supplied the world with the gold standard of spices. Arova Spices was founded in Bengaluru with a singular mandate: to eliminate the compromises of traditional export channels through uncompromising grading, laboratory transparency, and modern B2B reliability.
          </p>
        </div>

        {/* Western Ghats Misty Canopy Frame */}
        <div className="mb-20 sm:mb-28 rounded-3xl overflow-hidden border border-[#141210]/10 relative h-[260px] sm:h-[420px] lg:h-[520px] shadow-sm">
          <Image
            src={VISUAL_ASSETS.westernGhatsEstate.path}
            alt={VISUAL_ASSETS.westernGhatsEstate.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082920]/90 via-[#082920]/25 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 max-w-xl text-white">
            <span className="text-[10px] sm:text-xs font-sans text-[#E5A024] uppercase tracking-wider block mb-1 font-semibold">
              Microclimate Sanctum
            </span>
            <h2 className="font-serif text-xl sm:text-4xl text-white mb-1.5 sm:mb-2">
              The Western Ghats Biodiversity Corridor
            </h2>
            <p className="font-sans text-[11px] sm:text-sm text-[#FAF8F5]/85 font-light leading-relaxed">
              Volcanic loam, mist-shrouded canopies, and monsoonal nourishment combine to create the world&apos;s most potent concentration of aromatic essential oils.
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* THE BENGALURU STRATEGIC ADVANTAGE */}
        {/* ======================================================== */}
        <div id="bengaluru" className="mb-20 sm:mb-28 scroll-mt-24">
          <div className="p-6 sm:p-14 rounded-3xl bg-[#FBF8F3] border border-[#141210]/10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-sans text-[#0B3B2E] tracking-widest uppercase font-semibold">
                  <MapPin className="w-4 h-4 text-[#0B3B2E]" />
                  <span>Geographic Trade Edge</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-5xl text-[#141210] font-normal">
                  The Bengaluru Strategic Export Advantage
                </h2>

                <p className="font-sans text-xs sm:text-base text-[#554D45] font-light leading-relaxed">
                  Headquartered in **Bengaluru, Karnataka**, Arova Spices operates at the supreme commercial and logistical crossroads of South India&apos;s spice belt.
                </p>

                <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                  <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#141210]/8 shadow-xs">
                    <h4 className="text-xs font-sans text-[#141210] uppercase mb-1.5 font-bold tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B3B2E]" />
                      <span>Direct Access to Plantation Heartlands</span>
                    </h4>
                    <p className="text-xs font-sans text-[#554D45] font-light leading-relaxed">
                      Immediate highway and rail access to Coorg, Chikmagalur, Wayanad, and Idukki plantations allows our quality inspectors to evaluate green harvests on-site before transit.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#141210]/8 shadow-xs">
                    <h4 className="text-xs font-sans text-[#141210] uppercase mb-1.5 font-bold tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C97E12]" />
                      <span>Triple Deep-Water Sea Port Corridors</span>
                    </h4>
                    <p className="text-xs font-sans text-[#554D45] font-light leading-relaxed">
                      Fast container routing to Cochin Port (Cochin terminal), New Mangalore Port (NMPT), and Chennai Port (MAA) provides ocean shipping resilience and weekly vessel departures to Europe, the Americas, and the Middle East.
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#141210]/8 shadow-xs">
                    <h4 className="text-xs font-sans text-[#141210] uppercase mb-1.5 font-bold tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B3B2E]" />
                      <span>Kempegowda International Air Cargo (BLR)</span>
                    </h4>
                    <p className="text-xs font-sans text-[#554D45] font-light leading-relaxed">
                      24-hour dispatch capability for pre-shipment evaluation samples and expedited air cargo shipments to international food blenders worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#141210]/10 space-y-5 sm:space-y-6 shadow-sm">
                  <span className="text-xs font-sans text-[#C97E12] uppercase tracking-wider block font-semibold">
                    Export Headquarters
                  </span>
                  <div className="font-serif text-xl sm:text-2xl text-[#141210]">
                    Arova Spices International LLP
                  </div>
                  <div className="text-xs font-sans text-[#554D45] leading-relaxed">
                    Bengaluru Trade Centre, Outer Ring Road,<br />
                    Bengaluru, Karnataka 560103, India
                  </div>
                  <div className="pt-4 border-t border-[#141210]/10 flex flex-col gap-2.5 text-xs font-sans">
                    <div className="flex justify-between">
                      <span className="text-[#554D45]">Direct Desk:</span>
                      <span className="text-[#141210] font-semibold tabular-nums">{COMPANY_INFO.contact.phoneFormatted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#554D45]">Timezone:</span>
                      <span className="text-[#141210] font-medium">IST (GMT +05:30)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* FOUR PILLARS OF TRADE INTEGRITY */}
        {/* ======================================================== */}
        <div className="mb-20 sm:mb-28">
          <div className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141210]">
              Four Pillars of Trade Integrity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {FOUR_PILLARS.map((pillar) => (
              <div
                key={pillar.badge}
                className="p-6 sm:p-10 rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 hover:border-[#0B3B2E] transition-all shadow-xs"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B3B2E]/10 border border-[#0B3B2E]/20 text-xs font-sans font-semibold text-[#0B3B2E] mb-3 tracking-wide">
                  <span>✦</span>
                  <span>{pillar.badge}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#141210] mb-2 font-medium">
                  {pillar.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* EXPORT READINESS NUMBERS STRIP */}
        {/* ======================================================== */}
        <div className="rounded-3xl p-6 sm:p-14 bg-[#082920] text-white shadow-sm mb-12 sm:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {COMPANY_INFO.tradeStatistics.map((stat, idx) => (
              <div key={idx} className={`pt-5 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''}`}>
                <div className="font-serif text-4xl sm:text-6xl text-[#E5A024] font-light mb-1.5 sm:mb-2 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-sans text-white uppercase tracking-wider font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs font-sans text-[#FAF8F5]/60">
                  {stat.note}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Connect Strip */}
        <div className="text-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors shadow-sm"
          >
            <span>Partner with Arova Spices</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5A024]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
