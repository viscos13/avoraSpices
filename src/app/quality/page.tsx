'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Scale,
  Package,
  Ship,
  ArrowUpRight,
  ClipboardCheck,
} from 'lucide-react';
import { VISUAL_ASSETS } from '@/data/assets';
import { COMPANY_INFO } from '@/data/company';

const WORKFLOW_STAGES = [
  {
    step: 'I',
    phase: 'Phase I • Harvest Sourcing',
    title: 'Selective Estate Harvesting',
    subtitle: 'High-Elevation Microclimate Selection',
    description:
      'We contract exclusively with accredited estates situated above 800m altitude in the Western Ghats (Idukki, Coorg, Chikmagalur). Harvesters hand-pluck only physiologically mature pods and berries at peak volatile oil saturation.',
    metrics: ['Elevation: 800m – 1,400m', 'Hand-picked selectivity', 'Zero floor collection'],
  },
  {
    step: 'II',
    phase: 'Phase II • Precision Calibration',
    title: 'Multi-Stage Cleaning & Precision Grading',
    subtitle: 'Gravity Separation & Optical Size Calibration',
    description:
      'Raw harvests undergo aspirator de-stoning, spiral density separation, and vibratory sifting. Cardamom is mechanically calibrated into 8mm+, 7.5mm, and 7mm slots. Black pepper passes through spiral cleaners to guarantee 550+ GL bulk density.',
    metrics: ['Optical sorting precision', 'Foreign matter < 0.3%', 'Zero artificial coloring or polish'],
  },
  {
    step: 'III',
    phase: 'Phase III • Laboratory Assay',
    title: 'Laboratory Quality Verification',
    subtitle: 'Gas Chromatography & Heavy Metal Profiling',
    description:
      'Every production lot is subjected to rigorous laboratory testing adhering strictly to Spices Board India & ASTA/ESA standards: Dean-Stark volatile oil distillation, halogen moisture balance, pesticide residue screens, and aflatoxin HPLC assays.',
    metrics: ['Volatile oil profile GC-MS', 'Moisture strictly < 10.5%', 'Aflatoxin B1/B2/G1/G2 compliant'],
  },
  {
    step: 'IV',
    phase: 'Phase IV • Aroma-Lock Shield',
    title: 'Aroma-Lock Export Packaging',
    subtitle: 'Multi-Barrier Vacuum & Nitrogen Flushing',
    description:
      'Spices are packed within humidity-controlled cleanrooms into 5-ply export master cartons with multi-layer EVOH/aluminum barrier foil liners or heavy-duty food-grade polypropylene sacks, protecting against ocean humidity oscillations.',
    metrics: ['Nitrogen-flushed foil packs', 'Puncture-proof 5-ply cartons', 'ISPM-15 heat-treated wood pallets'],
  },
  {
    step: 'V',
    phase: 'Phase V • Port Quarantine Clearance',
    title: 'Port Clearance & Third-Party Inspection',
    subtitle: 'SGS Pre-Shipment Audit & Phytosanitary Sealing',
    description:
      'Consignments are trucked under temperature control to Cochin, Mangalore, or Chennai ports. An independent surveyor (SGS / Intertek) verifies lot sampling, container sealing, and government plant quarantine officers issue official Phytosanitary certificates.',
    metrics: ['Cochin & Mangalore dispatch', 'Third-party container seal', 'Original Bill of Lading & CoO issued'],
  },
];

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-12 lg:px-20 text-[#141210]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Hero */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97E12]" />
            <span>Western Ghats to Destination Port</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210] mb-4 sm:mb-5 leading-tight">
            Zero Compromise from Soil to Destination Port.
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#554D45] font-light leading-relaxed">
            In global spice trading, consistency is everything. Discover how our multi-stage quality protocol eliminates moisture variances, volatile oil degradation, and foreign matter.
          </p>
        </div>

        {/* Quality Lab Macro Visual Frame */}
        <div className="mb-16 sm:mb-24 rounded-3xl overflow-hidden border border-[#141210]/10 relative h-[260px] sm:h-[400px] lg:h-[480px] shadow-sm">
          <Image
            src={VISUAL_ASSETS.qualityLabGrading.path}
            alt={VISUAL_ASSETS.qualityLabGrading.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082920]/90 via-[#082920]/30 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 text-white">
            <div className="max-w-xl">
              <span className="text-[10px] sm:text-xs font-sans text-[#E5A024] uppercase tracking-wider block mb-1 font-semibold">
                Analytical Infrastructure
              </span>
              <h2 className="font-serif text-xl sm:text-3xl text-white">
                Batch-Level Analytical Purity Guarantee
              </h2>
            </div>
            <div className="text-[11px] sm:text-xs font-sans bg-white/10 backdrop-blur-md px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-[#FAF8F5] self-start sm:self-auto">
              Dean-Stark • Halogen Moisture • GC-MS
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 5-STAGE TRACEABLE EXPORT WORKFLOW */}
        {/* ======================================================== */}
        <div className="mb-20 sm:mb-28">
          <div className="mb-10 sm:mb-16 text-center max-w-2xl mx-auto">
            <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
              Standard Operating Procedure
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141210]">
              The 5-Stage Traceable Export Workflow
            </h2>
          </div>

          <div className="relative">
            {/* Center Vertical Hairline */}
            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-[#141210]/10" />

            <div className="space-y-8 sm:space-y-12">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={stage.step}
                    className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content Box (Col span 5) - Open Architectural Look */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'
                      }`}
                    >
                      <div className="p-5 sm:p-8 rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 hover:border-[#0B3B2E] transition-all duration-300">
                        <div
                          className={`flex items-center gap-3 mb-2.5 sm:mb-3 ${
                            isEven ? 'lg:justify-end' : ''
                          }`}
                        >
                          <span className="text-xs font-sans text-[#C97E12] font-bold tracking-wider uppercase">
                            {stage.phase}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl sm:text-2xl text-[#141210] font-normal mb-2.5 sm:mb-3">
                          {stage.title}
                        </h3>

                        <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed mb-5 sm:mb-6">
                          {stage.description}
                        </p>

                        <div
                          className={`flex flex-wrap gap-1.5 sm:gap-2 ${
                            isEven ? 'lg:justify-end' : ''
                          }`}
                        >
                          {stage.metrics.map((m, i) => (
                            <span
                              key={i}
                              className="px-2.5 sm:px-3 py-1 rounded-full bg-white border border-[#141210]/8 text-[11px] sm:text-xs font-sans text-[#141210]"
                            >
                              ✦ {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Center Node (Col span 2) */}
                    <div className="lg:col-span-2 hidden lg:flex justify-center items-center z-10">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-[#0B3B2E] flex items-center justify-center font-serif text-sm font-bold text-[#0B3B2E] shadow-sm">
                        {stage.step}
                      </div>
                    </div>

                    {/* Graphic Reassurance (Col span 5) */}
                    <div
                      className={`lg:col-span-5 hidden lg:block ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="p-6 rounded-2xl border border-[#141210]/8 bg-white shadow-xs">
                        <div className="flex items-center gap-2 text-xs font-sans text-[#141210] mb-1 font-semibold">
                          <CheckCircle2 className="w-4 h-4 text-[#0B3B2E]" />
                          <span>Quality Checkpoint Phase {stage.step} Certified</span>
                        </div>
                        <div className="text-xs font-sans text-[#554D45]">
                          Traceable lot documentation archived for 36 months
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* EXPORT PACKAGING & CONTAINER LOADABILITY GUIDE */}
        {/* ======================================================== */}
        <div id="packaging" className="mb-20 sm:mb-28 scroll-mt-24">
          <div className="mb-8 sm:mb-12">
            <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
              Logistics &amp; Cargo Engineering
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141210]">
              Export Packaging &amp; Container Loadability
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0B3B2E] mb-4 sm:mb-5 border border-[#141210]/6">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Vacuum Aroma-Lock Pouches
              </h3>
              <p className="text-xs text-[#554D45] font-light leading-relaxed mb-4">
                Recommended for 8mm+ Extra Bold Green Cardamom and whole cloves. 5kg and 10kg multi-layer barrier bags flushed with dry food-grade nitrogen.
              </p>
              <div className="text-xs font-sans text-[#C97E12] font-semibold">
                Outer: 5-ply reinforced master cartons
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0B3B2E] mb-4 sm:mb-5 border border-[#141210]/6">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Bulk Multi-Wall Kraft &amp; PP
              </h3>
              <p className="text-xs text-[#554D45] font-light leading-relaxed mb-4">
                Engineered for Tellicherry Black Pepper and commercial clove shipments. 25kg &amp; 50kg UV-stabilized woven polypropylene with inner polyethylene liner.
              </p>
              <div className="text-xs font-sans text-[#C97E12] font-semibold">
                Optional: Breathable food-grade jute
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#0B3B2E] mb-4 sm:mb-5 border border-[#141210]/6">
                <Ship className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Palletized Container Stuffing
              </h3>
              <p className="text-xs text-[#554D45] font-light leading-relaxed mb-4">
                Heat-treated Euro and standard industrial wooden pallets (ISPM-15 certified) with corner edge-protectors and weather-proof stretch-wrapping.
              </p>
              <div className="text-xs font-sans text-[#C97E12] font-semibold">
                Fumigation cert accompanying B/L
              </div>
            </div>
          </div>

          {/* Container Loadability Comparison Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#082920] text-white">
            <h4 className="text-xs font-sans text-[#E5A024] uppercase tracking-wider mb-5 sm:mb-6 font-semibold">
              Standard Ocean Freight Loadability Benchmark
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs font-sans">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#FAF8F5]/60 block mb-1">20ft FCL Cardamom</span>
                <span className="text-white font-semibold text-sm tabular-nums">10.5 – 11.5 MT</span>
                <span className="text-[11px] text-[#FAF8F5]/50 block mt-1">550 master cartons</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#FAF8F5]/60 block mb-1">20ft FCL Black Pepper</span>
                <span className="text-white font-semibold text-sm tabular-nums">14.5 – 16.0 MT</span>
                <span className="text-[11px] text-[#FAF8F5]/50 block mt-1">High density 580 GL</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#FAF8F5]/60 block mb-1">20ft FCL Whole Cloves</span>
                <span className="text-white font-semibold text-sm tabular-nums">11.0 – 12.0 MT</span>
                <span className="text-[11px] text-[#FAF8F5]/50 block mt-1">Clean headless &lt; 2%</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[#FAF8F5]/60 block mb-1">40ft FCL High-Cube</span>
                <span className="text-[#E5A024] font-semibold text-sm tabular-nums">22.0 – 26.5 MT</span>
                <span className="text-[11px] text-[#FAF8F5]/50 block mt-1">Maximum volume utility</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* STATUTORY EXPORT CERTIFICATION TABLE */}
        {/* ======================================================== */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-6 sm:mb-8">
            <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
              Statutory Credentials
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal">
              Official Quality &amp; Export Compliance
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 overflow-hidden divide-y divide-[#141210]/8">
            {COMPANY_INFO.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4"
              >
                <div>
                  <div className="font-serif text-lg sm:text-xl text-[#141210] mb-1">{cert.title}</div>
                  <div className="text-xs font-sans text-[#554D45]">{cert.description}</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0B3B2E]/10 border border-[#0B3B2E]/20 text-xs font-sans text-[#0B3B2E] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{cert.badge}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors shadow-sm"
          >
            <span>Request Pre-Shipment Laboratory Dossier</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5A024]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
