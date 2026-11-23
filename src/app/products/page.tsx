'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SPICES, SpiceSpecification } from '@/data/spices';
import { VISUAL_ASSETS } from '@/data/assets';
import { formatSpiceParam } from '@/lib/utils';
import { ProductsPedestal3D } from '@/components/canvas/ProductsPedestal3D';
import { ArrowUpRight, ShieldCheck, SlidersHorizontal, Check } from 'lucide-react';

const SPICE_TABS = [
  {
    id: 'cardamom',
    name: 'Green Cardamom',
    botanical: 'Elettaria cardamomum',
    accentColor: '#0B3B2E',
    dotColor: '#1E6B52',
  },
  {
    id: 'pepper',
    name: 'Black Pepper',
    botanical: 'Piper nigrum',
    accentColor: '#1E1915',
    dotColor: '#4A413B',
  },
  {
    id: 'clove',
    name: 'Whole Cloves',
    botanical: 'Syzygium aromaticum',
    accentColor: '#8F3518',
    dotColor: '#C45732',
  },
] as const;

function ProductsContent() {
  const searchParams = useSearchParams();
  const spiceParam = searchParams.get('spice');

  const [activeSpiceId, setActiveSpiceId] = useState<'cardamom' | 'pepper' | 'clove'>('cardamom');
  const [viewMode, setViewMode] = useState<'3d' | 'macro'>('3d');

  useEffect(() => {
    const matched = formatSpiceParam(spiceParam);
    if (matched) {
      setActiveSpiceId(matched);
    }
  }, [spiceParam]);

  const activeSpice: SpiceSpecification = SPICES[activeSpiceId];
  const activeImage = VISUAL_ASSETS[activeSpice.imageKey];
  const currentTab = SPICE_TABS.find((t) => t.id === activeSpiceId) || SPICE_TABS[0];

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-12 lg:px-20 text-[#141210]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97E12]" />
            <span>B2B Export Catalogue • Single-Origin</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210] mb-3 sm:mb-4">
            The Flagship Spice Trilogy
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#554D45] font-light leading-relaxed">
            Exclusively three flagship botanicals. No retail consumer clutter. Verified export grades, gas chromatography certificates, and container loadability benchmarks.
          </p>
        </div>

        {/* LUXURY COLOR-CODED SPICE SELECTOR BUTTONS (Zero 01/02/03 numbering) */}
        <div className="flex justify-center mb-10 sm:mb-14 px-2">
          <div className="inline-flex p-1.5 rounded-full bg-[#FBF8F3] border border-[#141210]/10 shadow-xs gap-1 sm:gap-2">
            {SPICE_TABS.map((tab) => {
              const isActive = activeSpiceId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSpiceId(tab.id)}
                  className={`relative px-4 sm:px-7 py-2.5 rounded-full text-xs font-sans tracking-wide transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 ${
                    isActive
                      ? 'text-white font-semibold shadow-md'
                      : 'text-[#554D45] hover:text-[#141210] hover:bg-white/60'
                  }`}
                  style={{
                    backgroundColor: isActive ? tab.accentColor : undefined,
                  }}
                >
                  {/* Botanical Gem Dot */}
                  <span
                    className={`w-2 h-2 rounded-full transition-transform duration-200 ${
                      isActive ? 'scale-125' : 'opacity-70'
                    }`}
                    style={{
                      backgroundColor: isActive ? '#FFFFFF' : tab.dotColor,
                    }}
                  />
                  <span className="whitespace-nowrap font-medium sm:font-semibold">{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE 360° INSPECTION LAB HERO */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-20 sm:mb-24">
          {/* Left Column: 360° Interactive 3D Studio Pedestal (Col span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#FBF8F3] border border-[#141210]/10 overflow-hidden relative min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] flex flex-col justify-between p-4 sm:p-6">
            {/* View Mode Toggle Pill */}
            <div className="relative z-20 flex items-center justify-between pb-3 border-b border-[#141210]/8">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full animate-ping"
                  style={{ backgroundColor: currentTab.accentColor }}
                />
                <span className="text-[11px] sm:text-xs font-sans text-[#554D45] uppercase font-semibold tracking-wider">
                  {viewMode === '3d' ? '3D Interactive View' : 'Macro Studio Detail'}
                </span>
              </div>

              <div className="inline-flex p-1 rounded-full bg-white border border-[#141210]/10 text-xs font-sans shadow-2xs">
                <button
                  onClick={() => setViewMode('3d')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                    viewMode === '3d'
                      ? 'bg-[#141210] text-white font-semibold shadow-xs'
                      : 'text-[#554D45] hover:text-[#141210]'
                  }`}
                >
                  3D View
                </button>
                <button
                  onClick={() => setViewMode('macro')}
                  className={`px-3 sm:px-4 py-1.5 rounded-full transition-all ${
                    viewMode === 'macro'
                      ? 'bg-[#141210] text-white font-semibold shadow-xs'
                      : 'text-[#554D45] hover:text-[#141210]'
                  }`}
                >
                  Macro Detail
                </button>
              </div>
            </div>

            {/* Display Stage (Flex-1 item cleanly bounded between top toggle & bottom metadata bar to prevent any overlap) */}
            <div className="relative flex-1 w-full my-3 min-h-[280px] sm:min-h-[380px] rounded-2xl overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                {viewMode === '3d' ? (
                  <motion.div
                    key={`3d-${activeSpiceId}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full"
                  >
                    <ProductsPedestal3D spice={activeSpiceId} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`macro-${activeSpiceId}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full rounded-2xl overflow-hidden"
                  >
                    {activeImage && (
                      <Image
                        src={activeImage.path}
                        alt={activeImage.alt}
                        fill
                        className="object-cover rounded-2xl"
                        priority
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/85 via-transparent to-transparent rounded-2xl" />
                    {/* Caption sits securely inside the image at the bottom, safely above the metadata bar */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md text-xs font-sans text-[#141210] font-medium shadow-md border border-white/40">
                      {activeImage?.caption}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Metadata Bar (Isolated in its own row, never touched by the caption) */}
            <div className="relative z-20 flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs font-sans text-[#554D45] border-t border-[#141210]/10 pt-3">
              <span>ORIGIN: {activeSpice.origin}</span>
              <span className="text-[#C97E12] font-semibold">HARVEST: {activeSpice.harvestSeason}</span>
            </div>
          </div>

          {/* Right Column: Open Architectural Sensory Profile (No template card box) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-1 sm:py-2">
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs font-sans text-[#C97E12] tracking-widest uppercase font-semibold">
                  Flagship Profile
                </span>
                <span className="text-xs font-sans text-[#0B3B2E] bg-[#0B3B2E]/10 px-3 py-1 rounded-full font-bold tabular-nums">
                  HS: {activeSpice.hsCode}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal mb-1">
                {activeSpice.commonName}
              </h2>
              <p className="font-serif italic text-sm sm:text-base text-[#C97E12] mb-4 sm:mb-5">
                {activeSpice.botanicalName} ({activeSpice.family})
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed mb-6">
                {activeSpice.longDescription}
              </p>

              {/* Sensory Aroma Potency Meters */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3.5 text-xs font-sans text-[#141210] uppercase tracking-wider font-semibold">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#C97E12]" />
                  <span>Sensory Aroma &amp; Chemical Potency</span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Aroma Intensity', val: activeSpice.sensoryProfile.aromaIntensity },
                    { label: 'Essential Volatile Oil', val: activeSpice.sensoryProfile.essentialOilContent },
                    { label: 'Visual Boldness & Calibration', val: activeSpice.sensoryProfile.visualBoldness },
                    { label: 'Natural Pungency', val: activeSpice.sensoryProfile.pungency },
                    { label: 'Ocean Shelf Stability', val: activeSpice.sensoryProfile.shelfStability },
                  ].map((meter) => (
                    <div key={meter.label}>
                      <div className="flex justify-between text-xs font-sans text-[#554D45] mb-1">
                        <span>{meter.label}</span>
                        <span className="text-[#141210] font-bold tabular-nums">{meter.val}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#F2EAE0] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${meter.val}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full bg-[#0B3B2E] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Action CTA */}
            <div className="pt-5 sm:pt-6 border-t border-[#141210]/10 flex flex-col gap-3">
              <Link
                href={`/contact?spice=${activeSpiceId}`}
                className="w-full py-3.5 sm:py-4 rounded-full text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors text-center flex items-center justify-center gap-2 shadow-sm min-h-[48px]"
              >
                <span>Request Bulk Quote for {activeSpice.commonName}</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A024]" />
              </Link>
              <div className="text-center text-[11px] font-sans text-[#554D45]">
                Direct Proforma &amp; Phytosanitary Dossier turnaround &lt; 24h
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* COMPREHENSIVE TECHNICAL EXPORT SPECIFICATION TABLE */}
        {/* ======================================================== */}
        <div className="mb-16 sm:mb-24">
          <div className="mb-6 sm:mb-8">
            <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
              Export Compliance Dossier
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal">
              Technical Specifications — {activeSpice.commonName}
            </h3>
          </div>

          <div className="rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 overflow-hidden shadow-sm">
            <div className="p-4 sm:p-6 bg-[#F2EAE0] border-b border-[#141210]/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-xs font-sans text-[#141210] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0B3B2E]" />
                <span>Standard Adherence: Spices Board India &amp; ISO 6571 / ASTA</span>
              </div>
              <div className="text-xs font-sans text-[#554D45]">
                Available Lot Samples: Air Courier Ready via DHL / FedEx
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#141210]/10">
              {/* Left Column: Chemical & Physical Parameters */}
              <div className="p-5 sm:p-8 space-y-4">
                <h4 className="text-xs font-sans text-[#141210] uppercase tracking-wider mb-4 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B3B2E]" />
                  <span>Chemical &amp; Physical Assay Benchmarks</span>
                </h4>
                {activeSpice.keySpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#141210]/8 text-xs font-sans"
                  >
                    <span className="text-[#554D45]">{spec.label}</span>
                    <div className="text-left sm:text-right">
                      <span className="text-[#141210] font-semibold tabular-nums">{spec.value}</span>
                      {spec.tolerance && (
                        <span className="block text-[10px] text-[#554D45]">{spec.tolerance}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Packaging & Loadability */}
              <div className="p-5 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-sans text-[#141210] uppercase tracking-wider mb-4 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C97E12]" />
                    <span>Export Packaging Architecture</span>
                  </h4>
                  <div className="space-y-3">
                    {activeSpice.packagingOptions.map((pack, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white border border-[#141210]/8 text-xs font-sans"
                      >
                        <div className="flex justify-between text-[#141210] font-medium mb-1">
                          <span>{pack.type}</span>
                          <span className="text-[#C97E12] font-semibold tabular-nums">{pack.weight}</span>
                        </div>
                        <div className="text-[#554D45] text-[11px]">{pack.protection}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-sans text-[#141210] uppercase tracking-wider mb-4 font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0B3B2E]" />
                    <span>Container Loadability (FCL / LCL)</span>
                  </h4>
                  <div className="space-y-2 text-xs font-sans">
                    <div className="flex justify-between p-3 rounded-lg bg-white border border-[#141210]/6">
                      <span className="text-[#554D45]">20ft FCL Container:</span>
                      <span className="text-[#141210] font-semibold tabular-nums">
                        {activeSpice.containerLoadability.container20ft}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 rounded-lg bg-white border border-[#141210]/6">
                      <span className="text-[#554D45]">40ft FCL Container:</span>
                      <span className="text-[#141210] font-semibold tabular-nums">
                        {activeSpice.containerLoadability.container40ft}
                      </span>
                    </div>
                    <div className="flex justify-between p-3 rounded-lg bg-white border border-[#141210]/6">
                      <span className="text-[#554D45]">Air Cargo MOQ:</span>
                      <span className="text-[#0B3B2E] font-semibold tabular-nums">
                        {activeSpice.containerLoadability.airCargoMoq}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* SIDE-BY-SIDE ARCHITECTURAL COMPARISON MATRIX */}
        {/* ======================================================== */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
            <div>
              <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-1 sm:mb-2 font-semibold">
                Cross-Catalogue Comparison
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal">
                Flagship Comparison Matrix
              </h3>
            </div>
            <div className="lg:hidden inline-flex items-center gap-1.5 text-[11px] font-sans text-[#8C827A]">
              <span>⇄ Swipe horizontally to compare specifications</span>
            </div>
          </div>

          <div className="overflow-x-auto touch-scroll rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 shadow-sm">
            <table className="w-full text-left text-xs font-sans border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F2EAE0] border-b border-[#141210]/10 text-[#141210] uppercase tracking-wider font-semibold">
                  <th className="p-4 sm:p-5">Feature / Metric</th>
                  <th className="p-4 sm:p-5 text-[#0B3B2E] border-t-2 border-[#0B3B2E]">Green Cardamom</th>
                  <th className="p-4 sm:p-5 text-[#141210] border-t-2 border-[#141210]">Black Pepper</th>
                  <th className="p-4 sm:p-5 text-[#8F3518] border-t-2 border-[#8F3518]">Whole Cloves</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#141210]/8">
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">Botanical Classification</td>
                  <td className="p-4 sm:p-5 italic text-[#141210]">Elettaria cardamomum</td>
                  <td className="p-4 sm:p-5 italic text-[#141210]">Piper nigrum</td>
                  <td className="p-4 sm:p-5 italic text-[#141210]">Syzygium aromaticum</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">HS Tariff Code</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#0B3B2E] tabular-nums">0908.31.00</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#141210] tabular-nums">0904.11.10</td>
                  <td className="p-4 sm:p-5 font-semibold text-[#8F3518] tabular-nums">0907.10.10</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">Primary Export Grade</td>
                  <td className="p-4 sm:p-5 text-[#141210]">8mm+ Extra Bold (AGEB)</td>
                  <td className="p-4 sm:p-5 text-[#141210]">TGSEB 550–585 GL</td>
                  <td className="p-4 sm:p-5 text-[#141210]">Hand-Picked Lal Pari Bold</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">Moisture Tolerance</td>
                  <td className="p-4 sm:p-5 text-[#141210] tabular-nums">Max 10.5%</td>
                  <td className="p-4 sm:p-5 text-[#141210] tabular-nums">Max 11.5%</td>
                  <td className="p-4 sm:p-5 text-[#141210] tabular-nums">Max 11.0%</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">Key Essential Compound</td>
                  <td className="p-4 sm:p-5 text-[#141210]">Cineole &amp; Terpinyl Acetate</td>
                  <td className="p-4 sm:p-5 text-[#141210]">Piperine (5.5–7.2%)</td>
                  <td className="p-4 sm:p-5 text-[#141210]">Eugenol (17–21%)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">Standard MOQ</td>
                  <td className="p-4 sm:p-5 text-[#141210] tabular-nums">500 kg (Air: 100 kg)</td>
                  <td className="p-4 sm:p-5 text-[#141210] tabular-nums">1,000 kg (Air: 250 kg)</td>
                  <td className="p-4 sm:p-5 text-[#141210] tabular-nums">500 kg (Air: 100 kg)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 text-[#554D45] font-medium">Action</td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/contact?spice=cardamom"
                      className="px-4 py-2 rounded-full bg-[#0B3B2E] text-white text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-[#C97E12] transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A024]" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/contact?spice=pepper"
                      className="px-4 py-2 rounded-full bg-[#141210] text-white text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-[#C97E12] transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A024]" />
                    </Link>
                  </td>
                  <td className="p-4 sm:p-5">
                    <Link
                      href="/contact?spice=clove"
                      className="px-4 py-2 rounded-full bg-[#8F3518] text-white text-xs font-semibold inline-flex items-center gap-1.5 hover:bg-[#C97E12] transition-colors"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A024]" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
