'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { HeroTrioStage3D } from '@/components/canvas/HeroTrioStage3D';
import { SectionSpiceStage3D } from '@/components/canvas/SectionSpiceStage3D';
import { SPICES } from '@/data/spices';
import { COMPANY_INFO } from '@/data/company';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

// Dedicated scroll-synchronized section wrapper (Clean open architectural layout)
function SyncedSpiceSection({
  spiceType,
  direction,
  badge,
  title,
  botanical,
  description,
  specs,
  quoteHref,
  fullSpecHref,
  bgColor = 'bg-white',
  accentColor = '#0B3B2E',
}: {
  spiceType: 'cardamom' | 'pepper' | 'clove';
  direction: 'left-to-center' | 'right-to-left';
  badge: string;
  title: string;
  botanical: string;
  description: string;
  specs: { label: string; value: string; highlight?: boolean }[];
  quoteHref: string;
  fullSpecHref: string;
  bgColor?: string;
  accentColor?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const isLeft = direction === 'left-to-center';
  const spiceNoun =
    spiceType === 'cardamom'
      ? 'Cardamom'
      : spiceType === 'pepper'
        ? 'Pepper'
        : 'Clove';

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-auto lg:min-h-[90vh] flex items-center px-5 sm:px-12 lg:px-20 py-16 sm:py-24 overflow-hidden border-b border-[#141210]/8 ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* 3D Visual Column: Displays above text on mobile for instant visual delight */}
        <div
          className={`lg:col-span-6 flex items-center justify-center order-1 ${isLeft ? 'lg:order-1' : 'lg:order-2'
            }`}
        >
          <SectionSpiceStage3D
            spice={spiceType}
            direction={direction}
          />
        </div>

        {/* Open Editorial Specification Column (No template box) */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center order-2 ${
            isLeft ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase mb-3 border self-start shadow-2xs"
            style={{
              backgroundColor: `${accentColor}0D`,
              borderColor: `${accentColor}25`,
              color: accentColor,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
            <span>{badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#141210] font-normal mb-1">
            {title}
          </h2>
          <p className="font-serif italic text-sm sm:text-lg text-[#C97E12] mb-4 sm:mb-5">
            {botanical}
          </p>

          <p className="font-sans text-sm sm:text-base text-[#554D45] font-light leading-relaxed mb-6 sm:mb-8">
            {description}
          </p>

          {/* Clean Borderless Architectural Ledger */}
          <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
            {specs.map((spec, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-2 sm:py-2.5 border-t border-[#141210]/10 text-xs font-sans"
              >
                <span className="text-[#554D45] pr-2">{spec.label}</span>
                <span
                  className={`tabular-nums text-right font-medium sm:font-semibold ${spec.highlight
                    ? 'text-[#C97E12]'
                    : 'text-[#141210]'
                    }`}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Clean Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full sm:w-auto">
            <Link
              href={quoteHref}
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors shadow-sm font-semibold"
            >
              <span>{`Request ${spiceNoun} Quote`}</span>
            </Link>
            <Link
              href={fullSpecHref}
              className="w-full sm:w-auto justify-center text-xs font-sans uppercase tracking-wider text-[#141210] hover:text-[#C97E12] underline underline-offset-4 transition-colors flex items-center gap-1 font-semibold py-2 sm:py-0"
            >
              <span>View Full Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="relative w-full bg-[#FFFFFF] text-[#141210]">
      {/* ======================================================== */}
      {/* SECTION 1: CLEAN SUNLIT HERO (NO EYEBROW BOX/LINE) */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center px-5 sm:px-12 lg:px-20 pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#FBF8F3] via-white to-white">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Hero Editorial Typography (Direct Impact) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Monumental Editorial Headline (Hits immediately with zero AI badge) */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-normal leading-[1.12] sm:leading-[1.08] tracking-tight mb-5 sm:mb-6 text-[#141210]">
              Nature’s Finest Aromatics,{' '}
              <span className="italic font-light text-[#C97E12] block sm:inline">
                Curated for Global Trade.
              </span>
            </h1>

            {/* Concise Executive Subtext */}
            <p className="font-sans text-sm sm:text-lg text-[#554D45] font-light max-w-xl leading-relaxed mb-6 sm:mb-8">
              Direct harvest supply from South India&apos;s Western Ghats spice corridor. Verified essential oil potency, uniform optical precision grading, and compliant bulk export container fulfilment from Bengaluru.
            </p>

            {/* Dual Clean Luxury CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors duration-300 flex items-center justify-center gap-2 shadow-sm font-semibold"
              >
                <span>Explore Spice Portfolio</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5A024]" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider text-[#141210] bg-[#FBF8F3] hover:bg-[#F2EAE0] border border-[#141210]/15 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                <span>Request Export Sample</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C97E12]" />
              </Link>
            </div>

            {/* Origin Accreditation Note */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#141210]/10 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-sans text-[#554D45] font-medium tracking-wide">
              <span className="flex items-center gap-1.5">
                <span className="text-[#C97E12]">✦</span> Spices Board of India
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#C97E12]">✦</span> 100% Single-Origin Traceability
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#C97E12]">✦</span> Direct Bengaluru Trade Desk
              </span>
            </div>
          </div>

          {/* Right Column: Interactive 3D Trio Showcase (Three.js WebGL Gyroscope) */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroTrioStage3D />
          </div>
        </div>
      </section>

      {/* Luxury Ticker Marquee */}
      <div className="relative w-full py-3.5 bg-[#FBF8F3] border-y border-[#141210]/8 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-8 text-xs font-sans tracking-[0.2em] text-[#554D45] uppercase px-4 font-medium"
            >
              <span>Direct Western Ghats Sourcing</span>
              <span className="text-[#C97E12]">✦</span>
              <span>8mm+ Extra Bold Cardamom</span>
              <span className="text-[#C97E12]">✦</span>
              <span>TGSEB Malabar Tellicherry Pepper</span>
              <span className="text-[#C97E12]">✦</span>
              <span>Hand-Picked Lal Pari Cloves</span>
              <span className="text-[#C97E12]">✦</span>
              <span>FCL &amp; LCL Worldwide Dispatch</span>
              <span className="text-[#C97E12]">✦</span>
              <span>100% Laboratory Verified Purity</span>
              <span className="text-[#C97E12]">✦</span>
              <span>Bengaluru Trade Gateway</span>
              <span className="text-[#C97E12]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* SECTION 01: GREEN CARDAMOM (LEFT -> CENTRE-LEFT SWEEP) */}
      {/* ======================================================== */}
      <SyncedSpiceSection
        spiceType="cardamom"
        direction="left-to-center"
        badge="The Queen of Spices • Extra Bold AGEB"
        title="Green Cardamom"
        botanical={`${SPICES.cardamom.botanicalName} • ${SPICES.cardamom.origin}`}
        description={SPICES.cardamom.shortDescription}
        specs={[
          { label: 'Grade Calibration', value: '8mm+ Extra Bold (AGEB)' },
          { label: 'HS Tariff Code', value: '0908.31.00' },
          { label: 'Volatile Essential Oil', value: '7.5% – 8.8% v/w', highlight: true },
          { label: 'Moisture Standard', value: '< 10.5% Retention' },
          { label: '20ft FCL Container Capacity', value: '~11.0 Metric Tons' },
        ]}
        quoteHref="/contact?spice=cardamom"
        fullSpecHref="/products?spice=cardamom"
        bgColor="bg-white"
        accentColor="#0B3B2E"
      />

      {/* ======================================================== */}
      {/* SECTION 02: BLACK PEPPER (RIGHT -> LEFT VORTEX SWEEP) */}
      {/* ======================================================== */}
      <SyncedSpiceSection
        spiceType="pepper"
        direction="right-to-left"
        badge="The King of Spices • Tellicherry TGSEB"
        title="Black Pepper"
        botanical={`${SPICES.pepper.botanicalName} • ${SPICES.pepper.origin}`}
        description={SPICES.pepper.shortDescription}
        specs={[
          { label: 'Garbled Export Grade', value: 'Tellicherry TGSEB / MG-1' },
          { label: 'HS Tariff Code', value: '0904.11.10' },
          { label: 'Bulk Density Benchmark', value: '550 – 585 Grams / Liter' },
          { label: 'Piperine Alkaloid Content', value: '5.5% – 7.2% Potency', highlight: true },
          { label: '20ft FCL Container Capacity', value: '~15.0 Metric Tons' },
        ]}
        quoteHref="/contact?spice=pepper"
        fullSpecHref="/products?spice=pepper"
        bgColor="bg-[#FBF8F3]/60"
        accentColor="#141210"
      />

      {/* ======================================================== */}
      {/* SECTION 03: WHOLE CLOVES (LEFT -> CENTRE-LEFT RISING SPIRAL) */}
      {/* ======================================================== */}
      <SyncedSpiceSection
        spiceType="clove"
        direction="left-to-center"
        badge="Clove Botanical Reserve • Lal Pari Hand-Picked"
        title="Whole Cloves"
        botanical={`${SPICES.clove.botanicalName} • ${SPICES.clove.origin}`}
        description={SPICES.clove.shortDescription}
        specs={[
          { label: 'Grade Standard', value: 'Hand-Picked Lal Pari Bold' },
          { label: 'HS Tariff Code', value: '0907.10.10' },
          { label: 'Eugenol Volatile Oil', value: '17.0% – 21.0% v/w', highlight: true },
          { label: 'Headless Buds Tolerance', value: '< 2.0% Maximum' },
          { label: '20ft FCL Container Capacity', value: '~11.0 Metric Tons' },
        ]}
        quoteHref="/contact?spice=clove"
        fullSpecHref="/products?spice=clove"
        bgColor="bg-white"
        accentColor="#8F3518"
      />

      {/* ======================================================== */}
      {/* WHY INTERNATIONAL BUYERS PARTNER WITH AROVA (Editorial) */}
      {/* ======================================================== */}
      <section className="relative py-16 sm:py-28 px-5 sm:px-12 lg:px-20 bg-[#FBF8F3] border-b border-[#141210]/8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-5 sm:gap-6 pb-6 border-b border-[#141210]/10">
            <div>
              <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
                Commercial Standards
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141210]">
                Why Global Importers Partner with Arova
              </h2>
            </div>
            <p className="font-sans text-sm text-[#554D45] font-light max-w-md leading-relaxed">
              Eliminating the traditional friction points of Indian spice exports: unverified grade blending, erratic moisture levels, and secondary market intermediaries.
            </p>
          </div>

          {/* Clean 4-Column Architectural Grid (No 01/02 numbering) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="pt-6 border-t-2 border-[#0B3B2E]">
              <div className="flex items-center gap-1.5 text-xs font-sans text-[#0B3B2E] font-bold mb-3 tracking-wider uppercase">
                <span className="text-[#C97E12]">✦</span>
                <span>Estate-Direct Sourcing</span>
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Single-Origin Integrity
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed">
                Direct grower partnerships across high-elevation Western Ghats plantations (Idukki, Coorg, Chikmagalur). Zero floor collection and zero spent spice blending.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#0B3B2E]">
              <div className="flex items-center gap-1.5 text-xs font-sans text-[#0B3B2E] font-bold mb-3 tracking-wider uppercase">
                <span className="text-[#C97E12]">✦</span>
                <span>Volatile Oil Stability</span>
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Essential Compound Defense
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed">
                Solar-hybrid and dehumidified curing keeps essential volatile oils (Cineole, Piperine, Eugenol) chemically stable throughout trans-ocean shipping voyages.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#0B3B2E]">
              <div className="flex items-center gap-1.5 text-xs font-sans text-[#0B3B2E] font-bold mb-3 tracking-wider uppercase">
                <span className="text-[#C97E12]">✦</span>
                <span>Aroma-Lock Barrier</span>
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Moisture &amp; Gas Protection
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed">
                Multi-layer EVOH vacuum foil pouches, 5-ply reinforced master cartons, and UV-stabilized bulk sacks ensure zero mold proliferation during freight.
              </p>
            </div>

            <div className="pt-6 border-t-2 border-[#0B3B2E]">
              <div className="flex items-center gap-1.5 text-xs font-sans text-[#0B3B2E] font-bold mb-3 tracking-wider uppercase">
                <span className="text-[#C97E12]">✦</span>
                <span>Statutory Compliance</span>
              </div>
              <h3 className="font-serif text-xl text-[#141210] mb-2 font-medium">
                Phytosanitary &amp; SGS Audited
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#554D45] font-light leading-relaxed">
                Every container ships with authenticated Phytosanitary Certification, Certificate of Origin (CoO), and independent pre-shipment surveyor inspection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* PRE-FOOTER EXECUTIVE CTA (Smooth direct flow) */}
      {/* ======================================================== */}
      <section className="relative py-16 sm:py-28 px-5 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto rounded-3xl p-6 sm:p-14 bg-[#FBF8F3] border border-[#141210]/10 shadow-sm text-center">
          <span className="text-xs font-sans tracking-[0.25em] text-[#C97E12] uppercase block mb-3 font-semibold">
            B2B Inquiries &amp; Quotations
          </span>
          <h2 className="font-serif text-2xl sm:text-5xl text-[#141210] font-normal mb-3 sm:mb-4">
            Ready to Source India&apos;s Finest Harvest?
          </h2>
          <p className="font-sans text-xs sm:text-base text-[#554D45] font-light max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Connect directly with our commercial export desk in Bengaluru. Request official technical data sheets, physical lab-verified evaluation samples, or containerized CIF quotations for your destination port.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors font-semibold shadow-sm text-center"
            >
              Request Bulk Quotation
            </Link>

            <a
              href={COMPANY_INFO.contact.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-sans uppercase tracking-wider text-[#141210] bg-white border border-[#141210]/15 hover:border-[#0B3B2E] transition-colors flex items-center justify-center gap-2 font-semibold shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
              <span>WhatsApp Trade Desk</span>
              <span className="text-[#0B3B2E]">({COMPANY_INFO.contact.phoneFormatted})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
