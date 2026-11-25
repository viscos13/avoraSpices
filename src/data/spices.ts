// Technical B2B Data for Arova Spices' 3 Flagship Single-Origin Spices

export interface SpiceGrade {
  name: string;
  sizeSpecification: string;
  typicalUse: string;
}

export interface SpiceSpecification {
  id: 'cardamom' | 'pepper' | 'clove';
  commonName: string;
  botanicalName: string;
  family: string;
  hsCode: string;
  hsFullCode: string;
  origin: string;
  harvestSeason: string;
  primaryGradeBadge: string;
  shortDescription: string;
  longDescription: string;
  imageKey: string;
  cardSummaryRows: {
    label: string;
    value: string;
  }[];
  grades: SpiceGrade[];
  technicalLedger: {
    label: string;
    value: string;
    note?: string;
  }[];
  packagingFormatsSummary: string;
  container20ftShort: string;
  container40ftShort: string;
  sampleDispatchMoq: string;
  packagingRows: {
    spice: string;
    unitFormat: string;
    masterWeight: string;
    load20ft: string;
    load40ft: string;
    shelfLife: string;
  }[];
}

export const SPICES: Record<'cardamom' | 'pepper' | 'clove', SpiceSpecification> = {
  cardamom: {
    id: 'cardamom',
    commonName: 'Green Cardamom',
    botanicalName: 'Elettaria cardamomum',
    family: 'Zingiberaceae',
    hsCode: 'HS 0908.31',
    hsFullCode: '0908.31.00 (Whole, Neither Crushed nor Ground)',
    origin: 'Idukki & Western Ghats, South India',
    harvestSeason: 'August – February (Peak: Oct – Dec)',
    primaryGradeBadge: '8mm+ Extra Bold (AGEB)',
    shortDescription:
      'Uniform emerald-green unbleached pods cured under controlled humidity to lock natural 1,8-cineole and alpha-terpinyl acetate volatile oils.',
    longDescription:
      'Procured directly from high-elevation Western Ghats estates (800m–1,300m ASL) in Idukki and surrounding hills. Pods undergo mechanical sieve calibration, color uniformity sorting, and moisture stabilization below 10.5% prior to vacuum barrier packing.',
    imageKey: 'productCardamom',
    cardSummaryRows: [
      { label: 'Export Grade', value: '8mm+ Extra Bold (AGEB)' },
      { label: 'Essential Oil', value: '7.5% – 8.8% v/w' },
      { label: 'Moisture Limit', value: '< 10.5%' },
      { label: '20ft FCL Capacity', value: '~11 MT' },
    ],
    grades: [
      {
        name: 'Alleppey Green Extra Bold (AGEB)',
        sizeSpecification: '8.0mm – 8.5mm+ sieve calibration',
        typicalUse: 'Specialty retail packing, Scandinavian baking, Middle Eastern Gahwa roasting',
      },
      {
        name: 'Alleppey Green Bold (AGB)',
        sizeSpecification: '7.2mm – 8.0mm sieve calibration',
        typicalUse: 'Whole spice distribution, gourmet confectionery, commercial blends',
      },
      {
        name: 'Alleppey Green Superior (AGS)',
        sizeSpecification: '6.5mm – 7.2mm sieve calibration',
        typicalUse: 'Industrial spice milling, oleoresin extraction, commercial beverage blenders',
      },
    ],
    technicalLedger: [
      { label: 'Botanical Name', value: 'Elettaria cardamomum (Family: Zingiberaceae)' },
      { label: 'HS Tariff Code', value: '0908.31.00' },
      { label: 'Available Export Grades', value: 'AGEB (8mm+), AGB (7.2–8mm), AGS (6.5–7.2mm)' },
      { label: 'Moisture Limit', value: 'Max 10.0% – 10.5% (ISO 6571 method)' },
      { label: 'Volatile Essential Oil', value: '7.5% – 8.8% v/w (natural unbleached seed oil)' },
      { label: 'Extraneous / Foreign Matter', value: '< 0.5% by weight (immature/split pods < 1.5%)' },
      { label: 'Packaging Formats', value: '5 kg / 10 kg nitrogen-flushed foil vacuum pouches inside 20 kg 5-ply master cartons' },
      { label: '20ft FCL Loadability', value: 'Approx. 10.5 – 11.5 Metric Tons (525–575 master cartons)' },
      { label: '40ft FCL Loadability', value: 'Approx. 22.0 – 24.0 Metric Tons (1,100–1,200 master cartons)' },
      { label: 'Sample Dispatch MOQ', value: '250g – 2 kg evaluation sample via DHL / FedEx Express; 500 kg LCL commercial MOQ' },
    ],
    packagingFormatsSummary: '5kg / 10kg Vacuum Foil Pouches in 20kg 5-Ply Cartons',
    container20ftShort: '10.5 – 11.5 MT',
    container40ftShort: '22.0 – 24.0 MT',
    sampleDispatchMoq: '250g–2kg Express Sample / 500kg LCL MOQ',
    packagingRows: [
      {
        spice: 'Green Cardamom',
        unitFormat: 'Nitrogen-flushed foil vacuum pouches',
        masterWeight: '20 kg net (4 × 5 kg or 2 × 10 kg)',
        load20ft: '10.5 – 11.5 MT',
        load40ft: '22.0 – 24.0 MT',
        shelfLife: '24 Months (cool, dry storage)',
      },
    ],
  },
  pepper: {
    id: 'pepper',
    commonName: 'Black Pepper',
    botanicalName: 'Piper nigrum',
    family: 'Piperaceae',
    hsCode: 'HS 0904.11',
    hsFullCode: '0904.11.10 (Whole Black Peppercorns)',
    origin: 'Malabar Coast & Coorg, South India',
    harvestSeason: 'December – April (Peak: Jan – Mar)',
    primaryGradeBadge: 'Tellicherry TGSEB / MG-1',
    shortDescription:
      'High-bulk-density peppercorns density-separated and optically cleaned for consistent piperine pungency and deep aromatic heat.',
    longDescription:
      'Sourced from mature vine estates across Coorg, Wayanad, and the Malabar belt. Berries are sun-cured, spiral density graded to hit strict Grams-per-Liter (550–585+ G/L) benchmarks, and cleaned of light berries and pinheads to satisfy European and North American food standards.',
    imageKey: 'productPepper',
    cardSummaryRows: [
      { label: 'Export Grade', value: 'Tellicherry TGSEB / MG1' },
      { label: 'Bulk Density', value: '550 – 585 g/L' },
      { label: 'Piperine Content', value: '5.5% – 7.2%' },
      { label: '20ft FCL Capacity', value: '~15 MT' },
    ],
    grades: [
      {
        name: 'Tellicherry Garbled Special Extra Bold (TGSEB)',
        sizeSpecification: '4.75mm – 5.0mm+ berry diameter',
        typicalUse: 'Premium gourmet mills, whole spice retail, hospitality supply',
      },
      {
        name: 'Tellicherry Garbled Extra Bold (TGEB)',
        sizeSpecification: '4.25mm – 4.75mm berry diameter',
        typicalUse: 'Charcuterie curing, butcher spice blends, specialty wholesale',
      },
      {
        name: 'Malabar Garbled Grade 1 (MG-1 • 550–580 G/L)',
        sizeSpecification: '3.5mm – 4.25mm (Guaranteed high density)',
        typicalUse: 'Food manufacturing, seasoning formulators, oleoresin extraction',
      },
    ],
    technicalLedger: [
      { label: 'Botanical Name', value: 'Piper nigrum (Family: Piperaceae)' },
      { label: 'HS Tariff Code', value: '0904.11.10' },
      { label: 'Available Export Grades', value: 'Tellicherry TGSEB, TGEB, Malabar Garbled MG-1 (550–585 G/L)' },
      { label: 'Moisture Limit', value: 'Max 11.5% – 12.0%' },
      { label: 'Piperine & Volatile Oil', value: 'Piperine 5.5% – 7.2% | Volatile Oil 2.5% – 3.8% v/w' },
      { label: 'Extraneous / Light Berries', value: 'Extraneous < 0.5% | Light Berries < 1.5% (spiral cleaned)' },
      { label: 'Packaging Formats', value: '25 kg multi-wall kraft bags (PE liner) or 50 kg PP / food-grade jute sacks' },
      { label: '20ft FCL Loadability', value: 'Approx. 14.5 – 16.0 Metric Tons (palletized or floor-loaded)' },
      { label: '40ft FCL Loadability', value: 'Approx. 26.0 – 27.5 Metric Tons' },
      { label: 'Sample Dispatch MOQ', value: '500g – 2 kg evaluation sample via DHL / FedEx Express; 500 kg LCL commercial MOQ' },
    ],
    packagingFormatsSummary: '25kg Kraft Liner Bags / 50kg PP & Jute Sacks',
    container20ftShort: '14.5 – 16.0 MT',
    container40ftShort: '26.0 – 27.5 MT',
    sampleDispatchMoq: '500g–2kg Express Sample / 500kg LCL MOQ',
    packagingRows: [
      {
        spice: 'Black Pepper',
        unitFormat: 'Multi-wall kraft w/ PE liner or PP / Jute sack',
        masterWeight: '25 kg / 50 kg net sacks',
        load20ft: '14.5 – 16.0 MT',
        load40ft: '26.0 – 27.5 MT',
        shelfLife: '36 Months (ambient dry warehouse)',
      },
    ],
  },
  clove: {
    id: 'clove',
    commonName: 'Whole Cloves',
    botanicalName: 'Syzygium aromaticum',
    family: 'Myrtaceae',
    hsCode: 'HS 0907.10',
    hsFullCode: '0907.10.10 (Whole Cloves, Neither Crushed nor Ground)',
    origin: 'Kanyakumari & Western Ghats Slopes, South India',
    harvestSeason: 'January – May (Peak: Feb – Apr)',
    primaryGradeBadge: 'Hand-Picked Lal Pari',
    shortDescription:
      'Intact, full-crowned reddish-mahogany flower buds carefully graded for maximum natural eugenol essential oil potency.',
    longDescription:
      'Hand-picked immediately prior to blossom opening and cured cleanly on raised sun tiers to prevent moisture scorching. Batches are hand-sorted to the Lal Pari visual grade—minimizing headless stems and mother cloves while preserving high 17%–21% eugenol concentrations.',
    imageKey: 'productCloves',
    cardSummaryRows: [
      { label: 'Export Grade', value: 'Hand-Picked Lal Pari' },
      { label: 'Eugenol Oil', value: '17.0% – 21.0%' },
      { label: 'Headless Limit', value: '< 2.0%' },
      { label: '20ft FCL Capacity', value: '~11 MT' },
    ],
    grades: [
      {
        name: 'Hand-Picked Lal Pari Bold (Super Grade)',
        sizeSpecification: 'Uniform reddish-mahogany buds with full 4-prong calyx head',
        typicalUse: 'European mulled beverage blenders, festive retail jars, premium curing',
      },
      {
        name: 'Standard Garbled Clove Grade 1 (CG-1)',
        sizeSpecification: 'Clean bold whole buds, strictly controlled stem tolerance',
        typicalUse: 'Spice milling, curry formulations, meat processing houses',
      },
      {
        name: 'High-Eugenol Extraction Lot',
        sizeSpecification: 'High volatile eugenol oil profile (18% – 21%)',
        typicalUse: 'Natural flavour extraction, pharmaceutical & oral-care distillers',
      },
    ],
    technicalLedger: [
      { label: 'Botanical Name', value: 'Syzygium aromaticum (Family: Myrtaceae)' },
      { label: 'HS Tariff Code', value: '0907.10.10' },
      { label: 'Available Export Grades', value: 'Hand-Picked Lal Pari Bold, Garbled CG-1, High-Eugenol Lot' },
      { label: 'Moisture Limit', value: 'Max 11.0% – 12.0%' },
      { label: 'Eugenol / Volatile Oil', value: '17.0% – 21.0% v/w (eugenol purity 80%–88%)' },
      { label: 'Headless & Foreign Matter', value: 'Headless Buds < 2.0% | Stems < 1.0% | Foreign Matter < 0.3%' },
      { label: 'Packaging Formats', value: '10 kg / 20 kg 5-ply moisture-liner cartons or 25 kg / 50 kg poly-lined jute sacks' },
      { label: '20ft FCL Loadability', value: 'Approx. 10.5 – 11.5 Metric Tons' },
      { label: '40ft FCL Loadability', value: 'Approx. 21.0 – 22.5 Metric Tons' },
      { label: 'Sample Dispatch MOQ', value: '250g – 2 kg evaluation sample via DHL / FedEx Express; 500 kg LCL commercial MOQ' },
    ],
    packagingFormatsSummary: '10kg / 20kg Moisture-Barrier Cartons & Vacuum Packs',
    container20ftShort: '10.5 – 11.5 MT',
    container40ftShort: '21.0 – 22.5 MT',
    sampleDispatchMoq: '250g–2kg Express Sample / 500kg LCL MOQ',
    packagingRows: [
      {
        spice: 'Whole Cloves',
        unitFormat: '5 kg vacuum pouches / 5-ply poly-lined cartons',
        masterWeight: '20 kg carton / 25 kg poly-lined sack',
        load20ft: '10.5 – 11.5 MT',
        load40ft: '21.0 – 22.5 MT',
        shelfLife: '24–30 Months (aroma-sealed storage)',
      },
    ],
  },
};

export const SPICE_LIST: SpiceSpecification[] = [
  SPICES.cardamom,
  SPICES.pepper,
  SPICES.clove,
];
