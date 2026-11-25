'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Reveal } from '@/components/ui/Reveal';
import { VISUAL_ASSETS } from '@/data/assets';
import { COMPANY_INFO } from '@/data/company';
import { SPICE_LIST } from '@/data/spices';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const LAB_PROTOCOLS = [
  {
    title: 'Physical Sieve & Density Grading',
    description:
      'Calibrated mechanical sieving (8.0mm+ cardamom pods, 4.75mm+ Tellicherry berries) combined with spiral gravity separators ensuring strict G/L bulk density and clean uniform appearance.',
  },
  {
    title: 'Moisture & Water Activity Control',
    description:
      'Mandatory halogen moisture verification (<10.5% cardamom, <12.0% black pepper, <11.5% cloves) prevents fungal proliferation and preserves aroma during multi-week sea freight.',
  },
  {
    title: 'Essential Oil Potency Checks',
    description:
      'Hydro-distillation and gas chromatography batch benchmarking to verify volatile oil percentages (1,8-cineole, piperine alkaloid, and clove eugenol content) match contracted buyer limits.',
  },
  {
    title: 'Strict Zero-Adulteration Compliance',
    description:
      '100% single-origin whole harvests strictly free from artificial coloring, chemical bleaching, exhausted spent-spice mixing, or unauthorized additives.',
  },
];

export default function QualityPage() {
  const allPackagingRows = SPICE_LIST.flatMap((s) => s.packagingRows);

  return (
    <div className="bg-white text-[#334155]">
      {/* ======================================================== */}
      {/* 1. NAVY CORPORATE HEADER */}
      {/* ======================================================== */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
            <span className="w-5 h-[2px] bg-[#C59238]" />
            <span>QUALITY ASSURANCE &amp; REGULATORY READINESS</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quality Assurance, Lab Testing &amp; Export Compliance
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Every outbound lot undergoes documented physical sieving, moisture verification, volatile oil potency checks, and independent third-party inspection preparedness.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. LABORATORY & GRADING PROTOCOLS */}
      {/* ======================================================== */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <Image
                  src={VISUAL_ASSETS.qualityInspection.path}
                  alt={VISUAL_ASSETS.qualityInspection.alt}
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
                  <span>LABORATORY BENCHMARKS</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-[#0D1B2A] mb-6">
                  Laboratory &amp; Grading Protocols
                </h2>

                <div className="space-y-6">
                  {LAB_PROTOCOLS.map((protocol) => (
                    <div key={protocol.title} className="flex items-start gap-3.5">
                      <CheckCircle2 className="w-5 h-5 text-[#0B1F3A] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-heading text-base font-bold text-[#0D1B2A] mb-1">
                          {protocol.title}
                        </h3>
                        <p className="text-sm text-[#334155] leading-relaxed">
                          {protocol.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. REGULATORY & DOCUMENTATION READINESS */}
      {/* ======================================================== */}
      <section className="bg-[#F4F7FA] py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                <span className="w-5 h-[2px] bg-[#C59238]" />
                <span>INTERNATIONAL TRADE DOCUMENTATION</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0D1B2A] mb-3">
                Regulatory &amp; Documentation Readiness
              </h2>
              <p className="text-base text-[#334155] leading-relaxed">
                Accurate, on-time export paperwork prevents customs demurrage at destination ports across Europe, the Middle East, North America, and Asia-Pacific.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.certifications.map((cert, idx) => (
              <Reveal key={cert.title} delay={idx * 0.04} className="h-full">
                <div className="bg-white border border-slate-200 rounded-xl p-7 h-full flex flex-col shadow-sm">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0B1F3A] text-[#C59238] flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#0B1F3A] bg-[#F4F7FA] border border-slate-200 px-2.5 py-1 rounded">
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0D1B2A] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. EXPORT PACKAGING & CONTAINER LOADABILITY TABLE */}
      {/* ======================================================== */}
      <section id="packaging" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                  <span className="w-5 h-[2px] bg-[#C59238]" />
                  <span>SHIPPING &amp; LOADABILITY REFERENCE</span>
                </div>
                <h2 className="font-heading text-3xl font-bold text-[#0D1B2A]">
                  Export Packaging &amp; Container Loadability
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors self-start md:self-auto"
              >
                <span>Request Custom Packing Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[780px]">
                  <thead>
                    <tr className="bg-[#0B1F3A] text-white text-xs uppercase tracking-wider">
                      <th className="py-4 px-5 font-semibold">Flagship Spice</th>
                      <th className="py-4 px-5 font-semibold">Packaging Unit Format</th>
                      <th className="py-4 px-5 font-semibold">Master Carton / Bag Weight</th>
                      <th className="py-4 px-5 font-semibold">20ft FCL Load</th>
                      <th className="py-4 px-5 font-semibold">40ft FCL Load</th>
                      <th className="py-4 px-5 font-semibold">Rated Shelf Life</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {allPackagingRows.map((row, idx) => (
                      <tr
                        key={row.spice}
                        className={idx % 2 === 1 ? 'bg-[#F4F7FA]/60' : 'bg-white'}
                      >
                        <td className="py-4 px-5 font-bold text-[#0D1B2A]">{row.spice}</td>
                        <td className="py-4 px-5 text-[#334155]">{row.unitFormat}</td>
                        <td className="py-4 px-5 text-[#334155] tabular-nums">{row.masterWeight}</td>
                        <td className="py-4 px-5 font-semibold text-[#0B1F3A] tabular-nums">{row.load20ft}</td>
                        <td className="py-4 px-5 font-semibold text-[#0B1F3A] tabular-nums">{row.load40ft}</td>
                        <td className="py-4 px-5 text-[#334155] tabular-nums">{row.shelfLife}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
