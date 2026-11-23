'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Send,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { formatSpiceParam } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

const SPICE_OPTIONS = [
  { id: 'cardamom', label: 'Green Cardamom (0908.31)' },
  { id: 'pepper', label: 'Black Pepper (0904.11)' },
  { id: 'clove', label: 'Whole Cloves (0907.10)' },
];

const VOLUME_OPTIONS = [
  'Trade Sample (Air Courier)',
  '500 kg – 2 MT (LCL)',
  '2 MT – 10 MT (Consolidated)',
  'Full Container (20ft / 40ft FCL)',
];

const INCOTERM_OPTIONS = [
  'FOB (Indian Ports)',
  'CIF (Destination Port)',
  'CFR (Cost & Freight)',
  'EXW (Bengaluru Warehouse)',
  'Air Express Cargo',
];

const FAQ_ITEMS = [
  {
    q: 'What is the procedure for requesting laboratory trade samples?',
    a: 'We dispatch 100g to 500g physical evaluation samples drawn directly from prospective export lots via DHL Express or FedEx International Priority. Samples are packaged in nitrogen-flushed foil pouches and include complete batch GC-MS analysis, moisture certificates, and phytosanitary declarations.',
  },
  {
    q: 'What are standard Minimum Order Quantities (MOQ)?',
    a: 'For ocean freight container consignments, our standard MOQ is 500 kg (LCL consolidation) up to 20ft/40ft FCL (10 to 26 Metric Tons depending on spice density). For air cargo express blenders, trial orders can start from 100 kg.',
  },
  {
    q: 'What payment terms are accepted for international exports?',
    a: 'We accommodate standard international trade financing instruments: Irrevocable Confirmed Letter of Credit at Sight (L/C at Sight) issued by prime international banks, or Telegraphic Transfer (T/T with standard deposit and balance upon presentation of scanned ocean Bill of Lading and inspection certificates).',
  },
  {
    q: 'What is the typical lead time from contract signing to port dispatch?',
    a: 'Standard export packaging and container stuffing takes 7 to 12 working days from proforma confirmation. Sea transit from Cochin/Mangalore/Chennai port takes approx. 4–7 days to the Middle East, 18–22 days to Western Europe, and 26–32 days to North America.',
  },
  {
    q: 'Can an independent inspection agency verify the container before loading?',
    a: 'Yes. We routinely welcome SGS, Intertek, or Bureau Veritas surveyors at our Bengaluru export hub and designated loading port terminals for pre-shipment lot sampling, chemical assay verification, and container seal recording.',
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const spiceParam = searchParams.get('spice');
  const destinationParam = searchParams.get('destination');

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneCountryCode: '+1',
    phone: '',
    destinationCountry: '',
    destinationPort: '',
    spices: [] as string[],
    volume: 'Full Container (20ft / 40ft FCL)',
    incoterm: 'CIF (Destination Port)',
    specifications: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const matched = formatSpiceParam(spiceParam);
    if (matched) {
      setFormData((prev) => ({
        ...prev,
        spices: prev.spices.includes(matched) ? prev.spices : [...prev.spices, matched],
      }));
    }
    if (destinationParam) {
      setFormData((prev) => ({
        ...prev,
        destinationCountry: destinationParam,
      }));
    }
  }, [spiceParam, destinationParam]);

  const toggleSpice = (id: string) => {
    setFormData((prev) => {
      const exists = prev.spices.includes(id);
      return {
        ...prev,
        spices: exists ? prev.spices.filter((s) => s !== id) : [...prev.spices, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const spiceNames = formData.spices.length > 0 ? formData.spices.join(', ') : 'Flagship Indian Spices';
    const message = `*Arova Spices B2B Export RFQ Inquiry*
----------------------------------------
*Company:* ${formData.companyName || 'Not specified'}
*Buyer Name:* ${formData.fullName || 'Overseas Importer'}
*Email:* ${formData.email || 'N/A'}
*Phone:* ${formData.phoneCountryCode} ${formData.phone}
*Destination:* ${formData.destinationCountry} (Port: ${formData.destinationPort || 'Standard'})
*Selected Spices:* ${spiceNames}
*Order Volume:* ${formData.volume}
*Preferred Incoterms:* ${formData.incoterm}
*Specifications / Notes:* ${formData.specifications || 'Standard B2B Export Quality'}
----------------------------------------
_Inquiry submitted via Arova Spices Official Export Desk_`;

    return `https://wa.me/917026647347?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 px-5 sm:px-12 lg:px-20 text-[#141210]">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C97E12]" />
            <span>Direct Commercial Trade Desk</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#141210] mb-3 sm:mb-4">
            Connect with Export Desk
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#554D45] font-light leading-relaxed">
            Headquartered in Bengaluru, India. Receive official technical data sheets, trade quotations, and physical sampling dossiers within 24 business hours.
          </p>
        </div>

        {/* ======================================================== */}
        {/* EXECUTIVE 50/50 SPLIT-SCREEN TRADE DESK */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-20 sm:mb-28">
          {/* Left Column: Direct Deep Emerald Trade Desk (Col span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#082920] text-white border border-[#0B3B2E] shadow-xl space-y-6">
              <span className="text-xs font-sans text-[#E5A024] uppercase tracking-wider block font-semibold">
                Official Export Desk
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Arova Spices International
              </h2>
              <div className="flex items-start gap-3 text-xs font-sans text-[#FAF8F5]/80 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#E5A024] flex-shrink-0 mt-0.5" />
                <span>
                  Bengaluru Trade Centre, Outer Ring Road,<br />
                  Bengaluru, Karnataka 560103, India
                </span>
              </div>

              {/* Direct Phone & WhatsApp CTA Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E5A024]/15 flex items-center justify-center text-[#E5A024]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-sans text-[#FAF8F5]/60 uppercase">Direct Phone Line</div>
                      <div className="text-sm font-sans text-white font-semibold group-hover:text-[#E5A024] transition-colors tabular-nums">
                        {COMPANY_INFO.contact.phoneFormatted}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FAF8F5]/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={COMPANY_INFO.contact.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                      <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-sans text-[#25D366] uppercase font-semibold">Immediate WhatsApp Desk</div>
                      <div className="text-sm font-sans text-white font-semibold tabular-nums">
                        {COMPANY_INFO.contact.phoneFormatted}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E5A024]/15 flex items-center justify-center text-[#E5A024]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-sans text-[#FAF8F5]/60 uppercase">Official Trade Email</div>
                      <div className="text-sm font-sans text-white font-semibold group-hover:text-[#E5A024] transition-colors">
                        {COMPANY_INFO.contact.email}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#FAF8F5]/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Operating Hours (IST & GMT) */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 font-sans text-xs">
                <div className="flex items-center gap-2 text-white uppercase font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#E5A024]" />
                  <span>Trade Desk Operating Hours</span>
                </div>
                <div className="text-[#FAF8F5]/70 flex justify-between">
                  <span>Indian Standard (IST):</span>
                  <span className="text-white font-medium">{COMPANY_INFO.contact.tradeDeskHours.ist}</span>
                </div>
                <div className="text-[#FAF8F5]/70 flex justify-between">
                  <span>Greenwich Mean (GMT):</span>
                  <span className="text-white font-medium">{COMPANY_INFO.contact.tradeDeskHours.gmt}</span>
                </div>
                <div className="text-[11px] text-[#E5A024] pt-1">
                  ✦ Urgent container dispatch escalations handled 24/7 on WhatsApp
                </div>
              </div>

              {/* Compliance Reassurance */}
              <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#FAF8F5]/75">
                <ShieldCheck className="w-4 h-4 text-[#E5A024] flex-shrink-0" />
                <span>Spices Board India Registered • FSSAI Central Export Licensed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive B2B Request for Quotation (Col span 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-12 rounded-3xl bg-[#FBF8F3] border border-[#141210]/10 shadow-sm relative overflow-hidden">
              <div className="mb-6 sm:mb-8">
                <span className="text-xs font-sans text-[#C97E12] uppercase tracking-wider block mb-1 font-semibold">
                  Formal Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal">
                  Request for Quotation (RFQ)
                </h3>
                <p className="font-sans text-xs text-[#554D45] font-light mt-1">
                  Specify your required grades, packaging, destination port, and incoterms.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    {/* Buyer & Company Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                          Buyer / Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g., Jonathan Miller"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] min-h-[48px]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                          Company / Importer Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          placeholder="e.g., Continental Spices GmbH"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] min-h-[48px]"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                          Business Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="purchasing@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] min-h-[48px]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                          Phone / WhatsApp *
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={formData.phoneCountryCode}
                            onChange={(e) => setFormData({ ...formData, phoneCountryCode: e.target.value })}
                            placeholder="+49"
                            className="w-20 px-3 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] text-center min-h-[48px]"
                          />
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="171 1234567"
                            className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] min-h-[48px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Destination Country & Port */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                          Destination Country *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.destinationCountry}
                          onChange={(e) => setFormData({ ...formData, destinationCountry: e.target.value })}
                          placeholder="e.g., Germany / UAE"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] min-h-[48px]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                          Discharge Sea Port / Airport
                        </label>
                        <input
                          type="text"
                          value={formData.destinationPort}
                          onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                          placeholder="e.g., Hamburg / Jebel Ali"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] min-h-[48px]"
                        />
                      </div>
                    </div>

                    {/* Multi-Select Spices Pills */}
                    <div>
                      <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                        Select Required Spices (Select All That Apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SPICE_OPTIONS.map((opt) => {
                          const selected = formData.spices.includes(opt.id);
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => toggleSpice(opt.id)}
                              className={`px-3.5 sm:px-4 py-2.5 rounded-xl text-xs font-sans transition-all border min-h-[44px] flex items-center ${
                                selected
                                  ? 'bg-[#0B3B2E] text-white font-semibold border-[#0B3B2E]'
                                  : 'bg-white text-[#554D45] border-[#141210]/12 hover:border-[#141210]'
                              }`}
                            >
                              {selected ? '✓ ' : '+ '}
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Order Volume Pills */}
                    <div>
                      <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                        Estimated Order Volume / Consignment Size
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {VOLUME_OPTIONS.map((vol) => (
                          <button
                            key={vol}
                            type="button"
                            onClick={() => setFormData({ ...formData, volume: vol })}
                            className={`p-3 rounded-xl text-left text-xs font-sans transition-all border min-h-[44px] flex items-center ${
                              formData.volume === vol
                                ? 'bg-[#0B3B2E]/10 text-[#0B3B2E] border-[#0B3B2E] font-bold'
                                : 'bg-white text-[#554D45] border-[#141210]/10 hover:border-[#141210]/30'
                            }`}
                          >
                            {vol}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Incoterms Pills */}
                    <div>
                      <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                        Preferred Delivery Incoterms
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {INCOTERM_OPTIONS.map((inco) => (
                          <button
                            key={inco}
                            type="button"
                            onClick={() => setFormData({ ...formData, incoterm: inco })}
                            className={`px-3.5 py-2 rounded-lg text-xs font-sans transition-all border min-h-[40px] flex items-center ${
                              formData.incoterm === inco
                                ? 'bg-[#0B3B2E] text-white border-[#0B3B2E] font-semibold'
                                : 'bg-white text-[#554D45] border-[#141210]/10 hover:border-[#141210]/20'
                            }`}
                          >
                            {inco}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Grade Specifications */}
                    <div>
                      <label className="block text-xs font-sans text-[#554D45] uppercase mb-2 font-semibold">
                        Specific Grading &amp; Packaging Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={formData.specifications}
                        onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                        placeholder="e.g., Need 8mm+ Extra Bold Cardamom vacuum-sealed in 10kg cartons; SGS container inspection required at Cochin."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#141210]/12 text-base sm:text-xs font-sans text-[#141210] focus:outline-none focus:border-[#0B3B2E] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 min-h-[48px] rounded-xl text-xs font-sans font-semibold uppercase tracking-wider text-white bg-[#0B3B2E] hover:bg-[#C97E12] transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send className="w-4 h-4 text-[#E5A024]" />
                      <span>Submit RFQ to Bengaluru Export Desk</span>
                    </button>
                  </form>
                ) : (
                  /* SMART CONVERSION SUBMIT STATE */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-white border border-[#0B3B2E]/30 text-center space-y-5 sm:space-y-6"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0B3B2E]/10 border border-[#0B3B2E]/20 mx-auto flex items-center justify-center text-[#0B3B2E]">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    <div>
                      <span className="text-xs font-sans text-[#C97E12] uppercase tracking-wider block mb-1 font-semibold">
                        RFQ Confirmed &amp; Logged
                      </span>
                      <h4 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal">
                        Thank You, {formData.fullName || 'Trade Partner'}
                      </h4>
                      <p className="font-sans text-xs text-[#554D45] mt-2 max-w-md mx-auto leading-relaxed">
                        Your RFQ for <span className="text-[#141210] font-bold">{formData.companyName}</span> has been routed to our Bengaluru commercial desk. Proforma invoice turnaround is under 24 business hours.
                      </p>
                    </div>

                    {/* Dynamic WhatsApp 1-Click Fast Connect Button */}
                    <div className="pt-4 border-t border-[#141210]/10">
                      <p className="font-sans text-xs text-[#554D45] mb-3 sm:mb-4">
                        Want priority response right now? Send your pre-filled inquiry directly to our Export Desk on WhatsApp:
                      </p>

                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2.5 sm:gap-3 w-full py-3.5 sm:py-4 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-sm min-h-[48px]"
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                        <span>Send RFQ Instantly via WhatsApp (+91 70266 47347)</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-sans text-[#554D45] hover:text-[#141210] underline pt-2 block mx-auto"
                    >
                      ← Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERNATIONAL BUYER FAQ ACCORDION */}
        {/* ======================================================== */}
        <div id="faq" className="max-w-4xl mx-auto scroll-mt-24">
          <div className="mb-8 sm:mb-10 text-center">
            <span className="text-xs font-sans tracking-[0.24em] text-[#C97E12] uppercase block mb-2 font-semibold">
              Buyer Clarifications
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#141210] font-normal">
              Frequently Asked Export Questions
            </h3>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#FBF8F3] border border-[#141210]/10 overflow-hidden transition-colors hover:border-[#0B3B2E]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 min-h-[48px]"
                  >
                    <span className="text-sm sm:text-base font-serif text-[#141210] font-normal">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C97E12] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm font-light text-[#554D45] leading-relaxed border-t border-[#141210]/8 pt-3 sm:pt-4 font-sans"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
