'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { SPICES, SPICE_LIST } from '@/data/spices';
import { VISUAL_ASSETS } from '@/data/assets';
import { formatSpiceParam } from '@/lib/utils';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const spiceParam = searchParams.get('spice');

  const [activeSpiceId, setActiveSpiceId] = useState<'cardamom' | 'pepper' | 'clove'>('cardamom');

  useEffect(() => {
    const matched = formatSpiceParam(spiceParam);
    if (matched) {
      setActiveSpiceId(matched);
    }
  }, [spiceParam]);

  const activeSpice = SPICES[activeSpiceId];
  const activeAsset = VISUAL_ASSETS[activeSpice.imageKey];

  return (
    <div className="bg-white text-[#334155]">
      {/* ======================================================== */}
      {/* 1. NAVY CORPORATE HEADER */}
      {/* ======================================================== */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
            <span className="w-5 h-[2px] bg-[#C59238]" />
            <span>B2B WHOLESALE &amp; QUALITY SPECIFICATIONS</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Export Portfolio &amp; Technical Specifications
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Comprehensive export parameters, botanical grades, chemical volatile oil profiles, and containerized loadability benchmarks prepared for procurement teams and QA directors.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. INTERACTIVE CORPORATE SPECIFICATION VIEWER */}
      {/* ======================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Solid-Navy Pill/Tab Bar */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-slate-200 pb-6 mb-10">
            {SPICE_LIST.map((spice) => {
              const isActive = activeSpiceId === spice.id;
              return (
                <button
                  key={spice.id}
                  type="button"
                  onClick={() => setActiveSpiceId(spice.id)}
                  className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-[#0B1F3A] text-white shadow-sm'
                      : 'bg-[#F4F7FA] text-[#334155] hover:bg-slate-200 hover:text-[#0B1F3A]'
                  }`}
                >
                  {spice.commonName}
                </button>
              );
            })}
          </div>

          {/* Active View 12-Col Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column (5 cols): Photo, Origin, Harvest Window & Action */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <Image
                  src={activeAsset.path}
                  alt={activeAsset.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <span className="absolute top-3.5 right-3.5 bg-[#0B1F3A] text-white text-xs font-semibold px-3 py-1.5 rounded-md tabular-nums">
                  {activeSpice.hsCode}
                </span>
              </div>

              <div className="bg-[#F4F7FA] border border-slate-200 rounded-xl p-6 space-y-4">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-[#0D1B2A]">
                    {activeSpice.commonName}
                  </h2>
                  <p className="text-sm font-medium text-slate-500 mt-0.5">
                    {activeSpice.botanicalName} • {activeSpice.primaryGradeBadge}
                  </p>
                </div>

                <p className="text-sm text-[#334155] leading-relaxed">
                  {activeSpice.longDescription}
                </p>

                <div className="border-t border-slate-200 pt-4 space-y-2.5 text-sm">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C59238] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0D1B2A]">Origin: </span>
                      <span className="text-[#334155]">{activeSpice.origin}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Calendar className="w-4 h-4 text-[#C59238] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#0D1B2A]">Harvest Window: </span>
                      <span className="text-[#334155]">{activeSpice.harvestSeason}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/contact?spice=${activeSpice.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold px-6 py-3.5 rounded-md text-sm transition-colors"
                >
                  <span>Request Quotation for {activeSpice.commonName}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column (7 cols): Technical Trade Ledger & Commercial Grades */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h3 className="font-heading text-xl font-bold text-[#0D1B2A] mb-4">
                  Technical Trade Ledger
                </h3>
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                  <dl className="divide-y divide-slate-200">
                    {activeSpice.technicalLedger.map((row, idx) => (
                      <div
                        key={row.label}
                        className={`px-5 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline ${
                          idx % 2 === 1 ? 'bg-[#F4F7FA]/60' : 'bg-white'
                        }`}
                      >
                        <dt className="sm:col-span-5 text-sm font-medium text-slate-600">
                          {row.label}
                        </dt>
                        <dd className="sm:col-span-7 text-sm font-semibold text-[#0D1B2A] tabular-nums">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl font-bold text-[#0D1B2A] mb-4">
                  Export Grade Classifications
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {activeSpice.grades.map((grade) => (
                    <div
                      key={grade.name}
                      className="border border-slate-200 rounded-xl p-5 bg-white hover:border-[#0B1F3A]/30 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className="font-heading text-base font-bold text-[#0D1B2A]">
                          {grade.name}
                        </h4>
                        <span className="inline-block text-xs font-semibold text-[#0B1F3A] bg-[#F4F7FA] border border-slate-200 px-3 py-1 rounded-md tabular-nums self-start sm:self-auto">
                          {grade.sizeSpecification}
                        </span>
                      </div>
                      <p className="text-sm text-[#334155]">
                        <span className="font-medium text-[#0D1B2A]">Recommended Applications: </span>
                        {grade.typicalUse}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHOLESALE SIDE-BY-SIDE COMPARISON MATRIX */}
      {/* ======================================================== */}
      <section id="matrix" className="bg-[#F4F7FA] py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                <span className="w-5 h-[2px] bg-[#C59238]" />
                <span>QUICK REFERENCE MATRIX</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0D1B2A]">
                Wholesale Side-by-Side Specification Matrix
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-[#0B1F3A] text-white text-xs uppercase tracking-wider">
                      <th className="py-4 px-5 font-semibold">Spice &amp; Botanical Name</th>
                      <th className="py-4 px-5 font-semibold">HS Code</th>
                      <th className="py-4 px-5 font-semibold">Benchmark Grade</th>
                      <th className="py-4 px-5 font-semibold">Key Active / Oil</th>
                      <th className="py-4 px-5 font-semibold">Moisture Max</th>
                      <th className="py-4 px-5 font-semibold">20ft / 40ft FCL</th>
                      <th className="py-4 px-5 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    <tr className="hover:bg-[#F4F7FA]/60 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#0D1B2A]">Green Cardamom</div>
                        <div className="text-xs text-slate-500">Elettaria cardamomum</div>
                      </td>
                      <td className="py-4 px-5 font-semibold text-[#0B1F3A] tabular-nums">0908.31.00</td>
                      <td className="py-4 px-5 text-[#334155]">8mm+ Extra Bold (AGEB)</td>
                      <td className="py-4 px-5 font-medium text-[#0D1B2A] tabular-nums">7.5% – 8.8% Oil</td>
                      <td className="py-4 px-5 tabular-nums">&lt; 10.5%</td>
                      <td className="py-4 px-5 tabular-nums">~11 MT / ~23 MT</td>
                      <td className="py-4 px-5 text-right">
                        <Link
                          href="/contact?spice=cardamom"
                          className="inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#143159] text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                        >
                          Enquire
                        </Link>
                      </td>
                    </tr>

                    <tr className="hover:bg-[#F4F7FA]/60 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#0D1B2A]">Black Pepper</div>
                        <div className="text-xs text-slate-500">Piper nigrum</div>
                      </td>
                      <td className="py-4 px-5 font-semibold text-[#0B1F3A] tabular-nums">0904.11.10</td>
                      <td className="py-4 px-5 text-[#334155]">Tellicherry TGSEB / MG-1</td>
                      <td className="py-4 px-5 font-medium text-[#0D1B2A] tabular-nums">5.5% – 7.2% Piperine</td>
                      <td className="py-4 px-5 tabular-nums">&lt; 12.0%</td>
                      <td className="py-4 px-5 tabular-nums">~15 MT / ~27 MT</td>
                      <td className="py-4 px-5 text-right">
                        <Link
                          href="/contact?spice=pepper"
                          className="inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#143159] text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                        >
                          Enquire
                        </Link>
                      </td>
                    </tr>

                    <tr className="hover:bg-[#F4F7FA]/60 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-bold text-[#0D1B2A]">Whole Cloves</div>
                        <div className="text-xs text-slate-500">Syzygium aromaticum</div>
                      </td>
                      <td className="py-4 px-5 font-semibold text-[#0B1F3A] tabular-nums">0907.10.10</td>
                      <td className="py-4 px-5 text-[#334155]">Hand-Picked Lal Pari</td>
                      <td className="py-4 px-5 font-medium text-[#0D1B2A] tabular-nums">17.0% – 21.0% Eugenol</td>
                      <td className="py-4 px-5 tabular-nums">&lt; 11.5%</td>
                      <td className="py-4 px-5 tabular-nums">~11 MT / ~22 MT</td>
                      <td className="py-4 px-5 text-right">
                        <Link
                          href="/contact?spice=clove"
                          className="inline-flex items-center justify-center bg-[#0B1F3A] hover:bg-[#143159] text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
                        >
                          Enquire
                        </Link>
                      </td>
                    </tr>
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
