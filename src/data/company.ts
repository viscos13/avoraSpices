// Company information, credentials, and export trade logistics for Arova Spices

export const COMPANY_INFO = {
  name: 'Arova Spices',
  legalEntity: 'Arova Spices',
  tagline: 'Export-Grade Indian Spices. Engineered for Global Supply Chains.',
  headquarters: {
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    address: 'Bengaluru, Karnataka, India',
    corridorSummary:
      'Strategic procurement gateway directly adjacent to South India’s premier Western Ghats spice belt (Idukki, Coorg, Wayanad, Chikmagalur), connecting harvest origins to Kempegowda International Air Cargo and Southern deep-water seaports.',
  },
  contact: {
    phone: '+91 70266 47347',
    phoneRaw: '+917026647347',
    phoneFormatted: '+91 70266 47347',
    whatsApp: '+91 70266 47347',
    whatsAppUrl: 'https://wa.me/917026647347',
    email: 'exports@arovaspices.com',
    tradeDeskHours: {
      ist: 'Mon – Sat: 09:00 – 19:00 IST',
      gmt: 'Mon – Sat: 03:30 – 13:30 GMT',
    },
  },
  certifications: [
    {
      title: 'Spices Board of India Norms',
      description: 'Grading calibration, botanical integrity, and export quality conformance aligned with Spices Board of India benchmarks.',
      code: 'GRADE COMPLIANCE',
    },
    {
      title: 'FSSAI Central Export Standards',
      description: 'Food safety management, hygienic processing, and contamination thresholds compliant with FSSAI central export norms.',
      code: 'FOOD SAFETY',
    },
    {
      title: 'APEDA Export Readiness',
      description: 'Structured agricultural export documentation and phytosanitary workflow aligned with international buyer requirements.',
      code: 'TRADE READINESS',
    },
    {
      title: 'Phytosanitary & Fumigation Certificates',
      description: 'Official government plant quarantine inspection and compliant destination-mandated treatment certification.',
      code: 'QUARANTINE CLEARANCE',
    },
    {
      title: 'Certificate of Origin (CoO)',
      description: 'Chamber-attested Certificate of Origin issued per commercial invoice for smooth customs clearance and duty preferences.',
      code: 'CUSTOMS ORIGIN',
    },
    {
      title: 'SGS / Intertek Pre-Shipment Inspection',
      description: 'Independent third-party lot sampling, seal verification, weight inspection, and lab assays supported at stuffing port.',
      code: 'THIRD-PARTY AUDIT',
    },
  ],
  shippingPorts: [
    { name: 'Cochin Port (INCOK)', type: 'Sea Port', transitNote: 'Deep-water terminal servicing Idukki & Kerala Western Ghats' },
    { name: 'New Mangalore Port (INIXE)', type: 'Sea Port', transitNote: 'Direct coastal corridor for Coorg & Chikmagalur harvests' },
    { name: 'Chennai Port (INMAA)', type: 'Sea Port', transitNote: 'High-frequency mainline vessel connections globally' },
    { name: 'Kempegowda Int. Cargo (BLR)', type: 'Air Cargo', transitNote: 'Express courier samples & priority air freight from Bengaluru' },
  ],
  incotermsSupported: ['FOB India', 'CIF Destination Port', 'EXW Bengaluru'],
  proofStrip: [
    { label: 'Single-Origin', detail: 'Direct Western Ghats' },
    { label: '100% Batch Tested', detail: 'Moisture & Oil Verified' },
    { label: 'FCL, LCL & Air', detail: 'FOB • CIF • EXW Terms' },
    { label: '24-Hour Desk', detail: 'Rapid Trade Quotations' },
  ],
};
