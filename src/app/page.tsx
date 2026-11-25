'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { SPICE_LIST } from '@/data/spices';
import { VISUAL_ASSETS } from '@/data/assets';
import { COMPANY_INFO } from '@/data/company';
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Microscope,
  PackageCheck,
  FileCheck2,
  CheckCircle2,
} from 'lucide-react';

const PILLARS = [
  {
    icon: MapPin,
    title: 'Estate-Direct Procurement',
    description:
      'Direct grower and auction house sourcing across Idukki, Coorg, Wayanad, and Kanyakumari — removing middle-tier markups and preserving origin traceability.',
  },
  {
    icon: Microscope,
    title: 'Precision Grading & Purity',
    description:
      'Multi-stage mechanical cleaning, optical color sorting, sieve calibration, and strict zero-spent-spice blending across every export lot.',
  },
  {
    icon: PackageCheck,
    title: 'Pre-Shipment Sample Guarantee',
    description:
      'Physical batch evaluation samples dispatched globally via DHL/FedEx prior to commercial bulk commitment so your QA team buys with total certainty.',
  },
  {
    icon: FileCheck2,
    title: 'Full Export Documentation',
    description:
      'Complete shipping documentation including Phytosanitary, Certificate of Origin, Fumigation certificates, and third-party SGS/Intertek pre-shipment inspection.',
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Requirement & Grade Alignment',
    description:
      'Confirm spice grade, moisture benchmark, packing specification, volume, and destination port under FOB, CIF, or EXW terms.',
  },
  {
    step: '02',
    title: 'Evaluation Sample & Proforma',
    description:
      'Dispatch air-courier physical harvest lot sample alongside a formal commercial proforma quotation within 24 business hours.',
  },
  {
    step: '03',
    title: 'Batch Grading & Aroma-Lock Packing',
    description:
      'Perform sieve calibration, density checks, moisture verification, and vacuum-sealed barrier or palletized export sack packing.',
  },
  {
    step: '04',
    title: 'Customs Clearance & Container Dispatch',
    description:
      'Issue Phytosanitary, CoO, and inspection certificates with scheduled container stuffing and bill-of-lading dispatch from South Indian ports.',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-[#334155]">
      {/* ======================================================== */}
      {/* SECTION 1: COMMANDING NAVY EXECUTIVE HERO */}
      {/* ======================================================== */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C59238] mb-5">
                <span className="w-6 h-[2px] bg-[#C59238]" />
                <span>INSTITUTIONAL B2B SPICE SUPPLY • BENGALURU, INDIA</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-[1.12] text-white mb-6">
                Export-Grade Indian Spices. Engineered for Global Supply Chains.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Direct farm-gate sourcing from South India&apos;s Western Ghats, precision sieve &amp; density grading, and moisture-locked containerized fulfilment for wholesalers, importers, and food manufacturers.
              </p>

              {/* Primary Action Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C59238] hover:bg-[#B3812C] text-[#0B1F3A] font-bold px-7 py-3.5 rounded-md text-sm transition-colors shadow-sm"
                >
                  <span>Request Commercial Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-medium px-7 py-3.5 rounded-md text-sm transition-colors"
                >
                  <span>View Product Specifications</span>
                </Link>
              </div>

              {/* 4-Column Institutional Proof Strip */}
              <div className="border-t border-white/15 mt-10 pt-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {COMPANY_INFO.proofStrip.map((item) => (
                  <div key={item.label}>
                    <div className="font-heading text-sm sm:text-base font-bold text-white">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl relative aspect-[16/11] bg-[#143159]">
                <Image
                  src={VISUAL_ASSETS.heroTradeSpices.path}
                  alt={VISUAL_ASSETS.heroTradeSpices.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-[#0B1F3A]/90 backdrop-blur-md border-t border-white/15 px-5 py-3.5">
                  <div className="text-xs sm:text-sm text-white">
                    <span className="font-bold text-[#C59238] mr-1.5">Origin Corridor:</span>
                    <span className="text-slate-200 font-medium">
                      Idukki • Coorg • Wayanad • Chikmagalur
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: CORE EXPORT PRODUCT PORTFOLIO */}
      {/* ======================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                <span className="w-5 h-[2px] bg-[#C59238]" />
                <span>CORE EXPORT PORTFOLIO</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0D1B2A]">
                Three Flagship Indian Spices, Graded to Exact Buyer Specs
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SPICE_LIST.map((spice, idx) => {
              const asset = VISUAL_ASSETS[spice.imageKey];
              return (
                <Reveal key={spice.id} delay={idx * 0.06} className="h-full">
                  <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#0B1F3A]/30 transition-all flex flex-col h-full">
                    {/* Macro Image + HS Code Tag */}
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={asset.path}
                        alt={asset.alt}
                        fill
                        className="object-cover"
                      />
                      <span className="absolute top-3.5 right-3.5 bg-[#0B1F3A] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm tabular-nums border border-white/15">
                        {spice.hsCode}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col">
                      <div className="mb-5">
                        <h3 className="font-heading text-xl font-bold text-[#0D1B2A]">
                          {spice.commonName}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 mt-1">
                          {spice.botanicalName} • {spice.origin}
                        </p>
                      </div>

                      {/* 4-Row Clean Technical Summary */}
                      <div className="divide-y divide-slate-100 border-y border-slate-100 mb-6 text-sm flex-1">
                        {spice.cardSummaryRows.map((row) => (
                          <div
                            key={row.label}
                            className="py-2.5 flex items-center justify-between gap-4"
                          >
                            <span className="text-slate-500">{row.label}</span>
                            <span className="font-semibold text-[#0D1B2A] text-right tabular-nums">
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Dual Bottom Action Bar */}
                      <div className="flex items-center justify-between gap-4 pt-1">
                        <Link
                          href={`/contact?spice=${spice.id}`}
                          className="inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold text-xs px-5 py-2.5 rounded-md transition-colors"
                        >
                          Request Quote
                        </Link>
                        <Link
                          href={`/products?spice=${spice.id}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B1F3A] hover:text-[#C59238] transition-colors"
                        >
                          <span>Full Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: BUILT FOR COMMERCIAL RELIABILITY */}
      {/* ======================================================== */}
      <section className="bg-[#F4F7FA] py-20 lg:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                  <span className="w-5 h-[2px] bg-[#C59238]" />
                  <span>COMMERCIAL GOVERNANCE</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0D1B2A]">
                  Built for Commercial Reliability
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base text-[#334155] leading-relaxed">
                  International food manufacturers and spice wholesalers face critical trade risks—inconsistent sieve grading, ocean-transit moisture spoilage, and opaque broker supply chains. Arova Spices enforces institutional batch control from estate procurement to port stuffing.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={idx * 0.05} className="h-full">
                  <div className="bg-white border border-slate-200 rounded-xl p-7 h-full flex flex-col shadow-sm">
                    <div className="w-11 h-11 rounded-lg bg-[#0B1F3A] text-[#C59238] flex items-center justify-center mb-5 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0D1B2A] mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: HOW WE FULFIL GLOBAL ORDERS */}
      {/* ======================================================== */}
      <section className="bg-[#0B1F3A] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                <span className="w-5 h-[2px] bg-[#C59238]" />
                <span>EXPORT FULFILMENT WORKFLOW</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                How We Fulfil Global Orders
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.05}>
                <div className="border-t-2 border-[#C59238]/60 pt-6">
                  <div className="font-heading text-sm font-extrabold text-[#C59238] tracking-widest mb-3 tabular-nums">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: PACKAGING & CONTAINER LOGISTICS SHOWCASE */}
      {/* ======================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[16/10] bg-slate-100">
                <Image
                  src={VISUAL_ASSETS.exportPackaging.path}
                  alt={VISUAL_ASSETS.exportPackaging.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                  <span className="w-5 h-[2px] bg-[#C59238]" />
                  <span>LOGISTICS &amp; BARRIER PACKING</span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0D1B2A] mb-5">
                  Export Packaging Standards
                </h2>
                <p className="text-base text-[#334155] leading-relaxed mb-7">
                  Ocean transit demands moisture-impermeable protection to retain natural chlorophyll color, eugenol intensity, and volatile oil yields upon port arrival. Every shipment is packed in dedicated hygiene-monitored facilities.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0B1F3A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#334155]">
                      <strong className="text-[#0D1B2A] font-semibold">Nitrogen-Flushed Foil Vacuum Pouches:</strong> 5 kg / 10 kg inner vacuum pouches sealed inside 5-ply heavy corrugated export cartons.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0B1F3A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#334155]">
                      <strong className="text-[#0D1B2A] font-semibold">Moisture-Lined Bulk Sacks:</strong> 25 kg multi-wall kraft bags and 50 kg high-density PP / food-grade jute sacks with HDPE inner liners.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0B1F3A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#334155]">
                      <strong className="text-[#0D1B2A] font-semibold">Private-Label Importer Cartons:</strong> Custom buyer stencil markings, lot barcoding, and private-label outer cartons available for contract volumes.
                    </span>
                  </li>
                </ul>

                {/* Shipping Terms Strip */}
                <div className="bg-[#F4F7FA] border border-slate-200 rounded-lg p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="px-2 py-1">
                    <div className="text-xs font-bold text-[#0B1F3A]">20ft &amp; 40ft FCL</div>
                  </div>
                  <div className="px-2 py-1 border-l border-slate-200">
                    <div className="text-xs font-bold text-[#0B1F3A]">LCL Consolidation</div>
                  </div>
                  <div className="px-2 py-1 sm:border-l border-slate-200">
                    <div className="text-xs font-bold text-[#0B1F3A]">Express Air Cargo</div>
                  </div>
                  <div className="px-2 py-1 border-l border-slate-200">
                    <div className="text-xs font-bold text-[#C59238]">FOB • CIF • EXW</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: EXECUTIVE B2B CONVERSION BANNER */}
      {/* ======================================================== */}
      <section className="bg-[#F4F7FA] py-20 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="bg-white border border-slate-200 border-t-4 border-t-[#0B1F3A] rounded-xl p-8 sm:p-10 lg:p-12 shadow-sm text-center">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1B2A] mb-4">
                Ready to Evaluate Our Current Harvest Grades?
              </h2>
              <p className="text-base text-[#334155] max-w-2xl mx-auto leading-relaxed mb-8">
                Connect directly with our Bengaluru export desk for current seasonal pricing, technical data sheets, or air-couriered evaluation samples.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold px-8 py-3.5 rounded-md text-sm transition-colors shadow-sm"
                >
                  <span>Request Bulk Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={COMPANY_INFO.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-semibold px-7 py-3.5 rounded-md text-sm transition-colors tabular-nums"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Trade Desk: {COMPANY_INFO.contact.phoneFormatted}</span>
                </a>
              </div>

              <div className="mt-7 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-[#C59238]" />
                <span>24-Hour Commercial Quotation Desk • Bengaluru, India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
