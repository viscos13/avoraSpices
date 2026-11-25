'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { COMPANY_INFO } from '@/data/company';
import { formatSpiceParam } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { Reveal } from '@/components/ui/Reveal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';

const SPICE_OPTIONS = [
  { id: 'cardamom', label: 'Green Cardamom' },
  { id: 'pepper', label: 'Black Pepper' },
  { id: 'clove', label: 'Whole Cloves' },
] as const;

const VOLUME_OPTIONS = [
  'Evaluation Sample (1–5 kg)',
  '500 kg – 2 MT',
  '2 MT – 10 MT',
  'Full Container (20ft / 40ft FCL)',
];

const INCOTERM_OPTIONS = [
  'FOB India',
  'CIF Destination Port',
  'EXW Bengaluru',
];

const BUYER_FAQS = [
  {
    q: 'What are your Minimum Order Quantities (MOQs)?',
    a: 'For commercial LCL sea freight or consolidation shipments, the standard MOQ is 500 kg per spice (mixed spice pallet consolidation across cardamom, black pepper, and cloves is supported for 1 MT+ orders). Evaluation samples are dispatched in 250g to 5 kg packs.',
  },
  {
    q: 'How do pre-shipment DHL/FedEx evaluation samples work?',
    a: 'Upon confirming your required grade and destination city, we pull representative samples directly from current graded export lots and dispatch via DHL Express or FedEx International Priority with tracking credentials shared on WhatsApp and email.',
  },
  {
    q: 'What payment terms are accepted for international bulk orders?',
    a: 'We operate under standard institutional trade instruments including Irrevocable Confirmed Letter of Credit (L/C at Sight) from prime international banks, and Telegraphic Transfer (T/T) advance / CAD arrangements depending on order volume and buyer relationship.',
  },
  {
    q: 'What are typical production and container dispatch lead times?',
    a: 'Air-courier samples dispatch within 48 hours. Standard LCL orders dispatch within 5–7 business days. Full 20ft and 40ft container orders (including optical grading, moisture checks, phytosanitary quarantine inspection, and port stuffing) complete within 10–14 business days.',
  },
  {
    q: 'Do you support independent third-party SGS or Intertek pre-shipment inspection?',
    a: 'Yes. We facilitate buyer-nominated pre-shipment inspection agencies (SGS, Intertek, Bureau Veritas) at our Bengaluru facility or container loading ports (Cochin, New Mangalore, Chennai) for weight, seal verification, moisture, and laboratory assay prior to vessel sailing.',
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const spiceParam = searchParams.get('spice');
  const volumeParam = searchParams.get('volume');

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedSpices, setSelectedSpices] = useState<string[]>(['Green Cardamom']);
  const [volume, setVolume] = useState(VOLUME_OPTIONS[1]);
  const [incoterm, setIncoterm] = useState(INCOTERM_OPTIONS[0]);
  const [specifications, setSpecifications] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  useEffect(() => {
    const matched = formatSpiceParam(spiceParam);
    if (matched) {
      const label = SPICE_OPTIONS.find((s) => s.id === matched)?.label;
      if (label) {
        setSelectedSpices([label]);
      }
    }
    if (volumeParam === 'sample') {
      setVolume(VOLUME_OPTIONS[0]);
    }
  }, [spiceParam, volumeParam]);

  const toggleSpice = (label: string) => {
    setSelectedSpices((prev) =>
      prev.includes(label)
        ? prev.length > 1
          ? prev.filter((item) => item !== label)
          : prev
        : [...prev, label]
    );
  };

  const buildWhatsAppRfqUrl = () => {
    const lines = [
      '*AROVA SPICES — B2B EXPORT RFQ*',
      `Name & Title: ${fullName || 'N/A'}`,
      `Company: ${companyName || 'N/A'}`,
      `Email: ${email || 'N/A'}`,
      `Phone/WhatsApp: ${phone || 'N/A'}`,
      `Destination Country & Port: ${destination || 'N/A'}`,
      `Spices Required: ${selectedSpices.join(', ')}`,
      `Volume: ${volume}`,
      `Preferred Incoterm: ${incoterm}`,
      `Grade / Packaging Specs: ${specifications || 'Standard export specs'}`,
    ];
    return `${COMPANY_INFO.contact.whatsAppUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-[#334155]">
      {/* ======================================================== */}
      {/* 1. NAVY CORPORATE HEADER */}
      {/* ======================================================== */}
      <section className="bg-[#0B1F3A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
            <span className="w-5 h-[2px] bg-[#C59238]" />
            <span>BENGALURU TRADE DESK • REQUEST QUOTATION</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Commercial Export Desk &amp; Bulk RFQ
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Share your grade, volume, and destination port to receive a formal commercial quote within 24 business hours.
          </p>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. 2-COLUMN EXECUTIVE TRADE DESK */}
      {/* ======================================================== */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (5 cols): Direct Navy Trade Desk Info Card */}
            <div className="lg:col-span-5 bg-[#0B1F3A] text-white rounded-xl p-8 lg:p-10 space-y-8 shadow-sm">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-2">
                  AROVA SPICES
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Arova Spices — Export Headquarters
                </h2>
                <div className="flex items-start gap-2.5 text-sm text-slate-300 mt-3">
                  <MapPin className="w-4 h-4 text-[#C59238] flex-shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.headquarters.address}</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/15">
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1.5">
                    Direct Export Desk Phone &amp; WhatsApp
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                    className="inline-flex items-center gap-2.5 text-xl font-bold text-white hover:text-[#C59238] transition-colors tabular-nums"
                  >
                    <Phone className="w-5 h-5 text-[#C59238]" />
                    <span>{COMPANY_INFO.contact.phoneFormatted}</span>
                  </a>
                </div>

                <div>
                  <a
                    href={COMPANY_INFO.contact.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-md bg-[#15803D] hover:bg-[#166534] text-white font-semibold text-sm transition-colors shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp Now</span>
                  </a>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    Commercial Trade Email
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-[#C59238] transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4 text-[#C59238]" />
                    <span>{COMPANY_INFO.contact.email}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    Trade Desk Hours
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-300 tabular-nums">
                    <Clock className="w-4 h-4 text-[#C59238] flex-shrink-0 mt-0.5" />
                    <span>Monday – Saturday • 09:00 – 19:00 IST (03:30 – 13:30 GMT)</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="pt-6 border-t border-white/15">
                <div className="text-xs font-bold uppercase tracking-wider text-[#C59238] mb-4">
                  What Happens Next
                </div>
                <ol className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="font-heading font-bold text-[#C59238] tabular-nums">1.</span>
                    <span>Grade &amp; current harvest lot verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-heading font-bold text-[#C59238] tabular-nums">2.</span>
                    <span>Formal FOB/CIF proforma quotation within 24h</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-heading font-bold text-[#C59238] tabular-nums">3.</span>
                    <span>Optional air-courier DHL/FedEx sample dispatch</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column (7 cols): Commercial RFQ Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-8 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="py-6 space-y-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] text-[#C59238] flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#0D1B2A] mb-2">
                      Commercial RFQ Prepared for {companyName || fullName || 'Your Team'}
                    </h3>
                    <p className="text-sm text-[#334155] leading-relaxed">
                      Your quotation parameters ({selectedSpices.join(', ')} • {volume} • {incoterm}) are ready for our Bengaluru trade desk. For instant pricing response and live lot availability, transmit your structured RFQ directly via WhatsApp below.
                    </p>
                  </div>

                  <div className="bg-[#F4F7FA] border border-slate-200 rounded-lg p-5 text-sm space-y-2 tabular-nums">
                    <div>
                      <span className="text-slate-500">Selected Spices: </span>
                      <span className="font-semibold text-[#0D1B2A]">{selectedSpices.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Order Volume: </span>
                      <span className="font-semibold text-[#0D1B2A]">{volume}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Incoterms &amp; Port: </span>
                      <span className="font-semibold text-[#0D1B2A]">
                        {incoterm} {destination ? `— ${destination}` : ''}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={buildWhatsAppRfqUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#15803D] hover:bg-[#166534] text-white font-semibold px-6 py-3.5 rounded-md text-sm transition-colors shadow-sm tabular-nums"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Send This RFQ Directly via WhatsApp (+91 70266 47347)</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-5 py-3.5 rounded-md border border-slate-300 text-[#0B1F3A] hover:bg-slate-50 text-sm font-semibold transition-colors"
                    >
                      Edit RFQ Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-[#0D1B2A]">
                      Commercial Request for Quotation (RFQ)
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Strictly B2B bulk wholesale &amp; industrial importer enquiries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                        Full Name &amp; Job Title *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Henrik Lindqvist, Procurement Director"
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                        Company / Organization Name *
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g., Nordic Spice Imports AB"
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                        Work Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="procurement@company.com"
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                        Phone / WhatsApp (with Country Code) *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+46 70 123 4567"
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A] tabular-nums"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="destination" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                      Destination Country &amp; Port *
                    </label>
                    <input
                      id="destination"
                      type="text"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder="e.g., Rotterdam Port, Netherlands / Jebel Ali, UAE"
                      className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                    />
                  </div>

                  {/* Multi-Select Spice Checkboxes / Buttons */}
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2.5">
                      Flagship Spices Required (Select One or More) *
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {SPICE_OPTIONS.map((spice) => {
                        const checked = selectedSpices.includes(spice.label);
                        return (
                          <button
                            key={spice.id}
                            type="button"
                            onClick={() => toggleSpice(spice.label)}
                            aria-pressed={checked}
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-md border text-sm font-semibold transition-colors ${
                              checked
                                ? 'bg-[#0B1F3A] border-[#0B1F3A] text-white'
                                : 'bg-white border-slate-300 text-[#334155] hover:border-[#0B1F3A]'
                            }`}
                          >
                            <span>{spice.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="volume" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                        Required Volume *
                      </label>
                      <select
                        id="volume"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] bg-white focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                      >
                        {VOLUME_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="incoterm" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                        Preferred Incoterms *
                      </label>
                      <select
                        id="incoterm"
                        value={incoterm}
                        onChange={(e) => setIncoterm(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] bg-white focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                      >
                        {INCOTERM_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specifications" className="block text-xs font-semibold uppercase tracking-wider text-[#0D1B2A] mb-2">
                      Grade / Packaging Specifications &amp; Inspection Notes
                    </label>
                    <textarea
                      id="specifications"
                      rows={3}
                      value={specifications}
                      onChange={(e) => setSpecifications(e.target.value)}
                      placeholder="Specify required grade (e.g., AGEB 8mm+, TGSEB), moisture target, carton/sack weight, or SGS inspection requirement..."
                      className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-[#0D1B2A] focus:outline-none focus:border-[#0B1F3A] focus:ring-1 focus:ring-[#0B1F3A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#143159] text-white font-semibold px-7 py-4 rounded-md text-sm transition-colors shadow-sm"
                  >
                    <span>Generate &amp; Submit Commercial RFQ</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. WHOLESALE BUYER FAQ */}
      {/* ======================================================== */}
      <section id="faq" className="bg-[#F4F7FA] py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C59238] mb-3">
                <span className="w-5 h-[2px] bg-[#C59238]" />
                <span>INTERNATIONAL TRADE TERMS</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#0D1B2A]">
                Wholesale Buyer Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {BUYER_FAQS.map((item, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={item.q}
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-heading text-base font-bold text-[#0D1B2A] hover:bg-slate-50/60 transition-colors"
                    >
                      <span>{item.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#0B1F3A] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-[#334155] leading-relaxed border-t border-slate-100">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactContent />
    </Suspense>
  );
}
