// Company information, credentials, and export trade logistics for Arova Spices

export const COMPANY_INFO = {
  name: 'Arova Spices',
  legalEntity: 'Arova Spices International LLP',
  tagline: "India's Finest Spices for Global Trade",
  headquarters: {
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    address: 'Bengaluru Trade Centre, Outer Ring Road, Bengaluru, Karnataka 560103, India',
    geoStrategicNote: 'Strategic Gateway to Karnataka & Kerala Western Ghats plantations with rapid transit to Cochin, Mangalore, and Chennai sea ports and Kempegowda International Airport (BLR).',
  },
  contact: {
    phone: '+91 70266 47347',
    phoneRaw: '+917026647347',
    phoneFormatted: '+91 70266 47347',
    whatsApp: '+91 70266 47347',
    whatsAppUrl: 'https://wa.me/917026647347',
    email: 'exports@arovaspices.com',
    tradeDeskHours: {
      ist: 'Mon – Sat • 09:00 – 19:00 IST',
      gmt: 'Mon – Sat • 03:30 – 13:30 GMT',
      urgentResponse: '24/7 dedicated container dispatch escalation on WhatsApp',
    },
  },
  certifications: [
    {
      title: 'Spices Board of India',
      description: 'Registered Exporter & Quality Evaluation System adherence',
      badge: 'SPICES BOARD INDIA',
    },
    {
      title: 'FSSAI Certified',
      description: 'Food Safety and Standards Authority of India (Central Export License)',
      badge: 'FSSAI EXPORT COMPLIANT',
    },
    {
      title: 'APEDA Ready',
      description: 'Agricultural and Processed Food Products Export Development Authority',
      badge: 'APEDA RECOGNIZED',
    },
    {
      title: 'Phytosanitary Certified',
      description: 'Government plant quarantine certification accompanying every bill of lading',
      badge: 'PHYTOSANITARY INSPECTED',
    },
    {
      title: 'SGS / Intertek Supported',
      description: 'Third-party pre-shipment sampling, sealing, and inspection at loading port',
      badge: 'INDEPENDENT SGS AUDIT',
    },
  ],
  shippingPorts: [
    { name: 'Cochin Port (COK)', type: 'Sea Port', transitNote: 'Primary deep-water terminal for Western Ghats spices' },
    { name: 'New Mangalore Port (NMPT)', type: 'Sea Port', transitNote: 'Direct corridor for Coorg & Chikmagalur harvests' },
    { name: 'Chennai Port (MAA)', type: 'Sea Port', transitNote: 'High-frequency container departures to SE Asia & Americas' },
    { name: 'Kempegowda Int. Cargo (BLR)', type: 'Air Cargo', transitNote: '24h express sample & urgent air shipment hub' },
  ],
  incotermsSupported: ['FOB (Free on Board)', 'CIF (Cost, Insurance & Freight)', 'CFR (Cost & Freight)', 'EXW (Ex Works Bengaluru)'],
  containerCapacities: {
    twentyFootFcl: '10 to 15 Metric Tons (Spice specific)',
    fortyFootFcl: '21 to 27 Metric Tons',
    lclConsolidation: 'Minimum order 500 kg',
    airCourierSample: 'Express 250g – 1000g sample dispatch via DHL / FedEx',
  },
  tradeStatistics: [
    { label: 'Flagship Single-Origin Spices', value: '3', note: 'Uncompromised focus on Green Cardamom, Black Pepper & Cloves' },
    { label: 'Laboratory Batch Verification', value: '100%', note: 'Volatile oil, moisture & microbial certification per lot' },
    { label: 'Export Quote Turnaround', value: '< 24 Hours', note: 'Detailed proforma invoice with live freight rates' },
    { label: 'Global Dispatch Flexibility', value: 'FCL & LCL', note: 'Palletized, vacuum-sealed, or buyer private-label' },
  ],
};
