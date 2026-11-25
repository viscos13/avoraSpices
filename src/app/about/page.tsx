'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { VISUAL_ASSETS } from '@/data/assets';
import { COMPANY_INFO } from '@/data/company';
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  PackageSearch,
  UserCheck,
  Ship,
  Plane,
} from 'lucide-react';

const OPERATING_PRINCIPLES = [
  {
    icon: CheckCircle2,
    title: 'Spec-True Batches',
    description:
      'Every lot is calibrated strictly to agreed sieve diameter, bulk density (G/L), moisture maximum, and foreign-matter tolerances—never blended down with spent or lower-grade stock.',
  },
  {
    icon: Scale,
    title: 'Transparent Trade Pricing',
    description:
      'Direct sourcing in Karnataka and Kerala enables straightforward FOB India, CIF Destination Port, and EXW Bengaluru quotations with clear freight and duty breakdowns.',
  },
  {
    icon: PackageSearch,
    title: 'Sample-First Confidence',
    description:
      'We encourage every international importer and quality team to inspect air-couriered harvest samples before locking commercial purchase orders or letters of credit.',
  },
  {
    icon: UserCheck,
    title: 'Direct Founder-Led Accountability',
    description:
      'Trade negotiations, lot verification, pre-shipment inspection schedules, and container dispatch updates are managed directly from our Bengaluru trade desk without anonymous call centers.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#334155]">
      {/* ======================================================== */}
      {/* 1. NAVY CORPORATE HEADER */}
      {/* ======================================================== */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
            <span className="w-5 h-[2px] bg-[#C59238]" />
            <span>CORPORATE PROFILE • BENGALURU, INDIA</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for Disciplined, Long-Term Global Spice Trade
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Arova Spices is a focused Indian agricultural export enterprise dedicated exclusively to institutional B2B supply of Green Cardamom, Black Pepper, and Whole Cloves.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. COMPANY PROFILE & BENGALURU STRATEGIC CORRIDOR */}
      {/* ======================================================== */}
      <section id="bengaluru" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <Image
                  src={VISUAL_ASSETS.westernGhatsOrigin.path}
                  alt={VISUAL_ASSETS.westernGhatsOrigin.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                  <span className="w-5 h-[2px] bg-[#C59238]" />
                  <span>GEO-STRATEGIC PROCUREMENT HUB</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-[#0D1B2A] mb-5">
                  The Bengaluru Export Corridor Advantage
                </h2>
                <p className="text-base text-[#334155] leading-relaxed mb-4">
                  Operating from Bengaluru, Karnataka, Arova Spices is positioned directly at the commercial junction connecting South India&apos;s primary Western Ghats cultivation zones—Idukki, Coorg, Chikmagalur, Wayanad, and Kanyakumari.
                </p>
                <p className="text-base text-[#334155] leading-relaxed mb-7">
                  Instead of maintaining diluted commodity catalogs across dozens of unrelated products, we specialize exclusively in three core Indian whole spices, directing capital and quality engineering toward superior lot grading and rapid dispatch.
                </p>

                {/* Port & Air Connectivity Box */}
                <div className="bg-[#F4F7FA] border border-slate-200 rounded-xl p-6 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Direct Logistics &amp; Dispatch Infrastructure
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {COMPANY_INFO.shippingPorts.map((port) => {
                      const IsAir = port.type === 'Air Cargo';
                      return (
                        <div key={port.name} className="flex items-start gap-2.5">
                          {IsAir ? (
                            <Plane className="w-4 h-4 text-[#C59238] flex-shrink-0 mt-0.5" />
                          ) : (
                            <Ship className="w-4 h-4 text-[#0B1F3A] flex-shrink-0 mt-0.5" />
                          )}
                          <div>
                            <div className="text-sm font-bold text-[#0D1B2A]">{port.name}</div>
                            <div className="text-xs text-slate-600 mt-0.5">{port.transitNote}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FOUR OPERATING PRINCIPLES */}
      {/* ======================================================== */}
      <section className="bg-[#F4F7FA] py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                <span className="w-5 h-[2px] bg-[#C59238]" />
                <span>HOW WE DO BUSINESS</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0D1B2A]">
                Our Four Operating Principles
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {OPERATING_PRINCIPLES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={idx * 0.05} className="h-full">
                  <div className="bg-white border border-slate-200 rounded-xl p-7 h-full flex flex-col shadow-sm">
                    <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#C59238] flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0D1B2A] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold px-8 py-3.5 rounded-md text-sm transition-colors shadow-sm"
            >
              <span>Connect With Our Bengaluru Trade Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
