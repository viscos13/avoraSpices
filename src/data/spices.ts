// Technical B2B Data for Arova Spices' 3 Flagship Single-Origin Spices

export interface SensoryProfile {
  aromaIntensity: number; // 0-100
  essentialOilContent: number; // 0-100
  visualBoldness: number; // 0-100
  pungency: number; // 0-100
  shelfStability: number; // 0-100
}

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
  origin: string;
  heroTagline: string;
  shortDescription: string;
  longDescription: string;
  harvestSeason: string;
  colorHex: string;
  accentGlow: string;
  ambientRgb: string;
  imageKey: string;
  sensoryProfile: SensoryProfile;
  grades: SpiceGrade[];
  keySpecs: {
    label: string;
    value: string;
    tolerance?: string;
  }[];
  packagingOptions: {
    type: string;
    weight: string;
    protection: string;
  }[];
  containerLoadability: {
    container20ft: string;
    container40ft: string;
    airCargoMoq: string;
  };
  volatileOilProfile: string;
  moistureStandard: string;
  foreignMatter: string;
}

export const SPICES: Record<string, SpiceSpecification> = {
  cardamom: {
    id: 'cardamom',
    commonName: 'Green Cardamom',
    botanicalName: 'Elettaria cardamomum',
    family: 'Zingiberaceae',
    hsCode: '0908.31',
    origin: 'Idukki & Western Ghats Foothills, South India',
    heroTagline: "The Queen of Spices: Ultra-Bold 8mm+ Emerald Pods",
    shortDescription: 'Internationally coveted for its intensely floral, sweet-eucalyptol aromatic bouquet and saturated emerald-green coloration.',
    longDescription: 'Sourced from high-altitude mist-covered estates in the Western Ghats (800m–1300m above sea level), our green cardamom pods are selectively hand-harvested at peak pod maturity. Gentle, temperature-controlled solar-hybrid curing preserves the natural emerald chlorophyll envelope and retains volatile oils up to 8.5% v/w.',
    harvestSeason: 'August to February (Peak: October–December)',
    colorHex: '#123524',
    accentGlow: '#277853',
    ambientRgb: '18, 53, 36',
    imageKey: 'cardamomMacro',
    sensoryProfile: {
      aromaIntensity: 96,
      essentialOilContent: 92,
      visualBoldness: 98,
      pungency: 65,
      shelfStability: 90,
    },
    grades: [
      {
        name: 'Extra Bold Super Green (AGEB)',
        sizeSpecification: '8.0mm to 8.5mm+ pod diameter',
        typicalUse: 'Ultra-premium retail packaging, Scandinavian bakery, Middle Eastern Gahwa coffee',
      },
      {
        name: 'Alleppey Green Bold (AGB)',
        sizeSpecification: '7.2mm to 8.0mm pod diameter',
        typicalUse: 'Gourmet confectionary, whole spice blending, premium food manufacturing',
      },
      {
        name: 'Alleppey Green Superior (AGS)',
        sizeSpecification: '6.5mm to 7.2mm pod diameter',
        typicalUse: 'Oleoresin extraction, commercial culinary seasoning, industrial tea blenders',
      },
    ],
    keySpecs: [
      { label: 'HS Code', value: '0908.31.00 (Whole, Neither Crushed nor Ground)' },
      { label: 'Moisture Content', value: 'Max 10.0% – 10.5%', tolerance: 'ISO 6571 compliant' },
      { label: 'Volatile Essential Oil', value: '7.5% – 8.8% v/w', tolerance: 'Gas chromatography verified' },
      { label: 'Extraneous Matter', value: '< 0.5% by weight' },
      { label: 'Immature / Malformed Pods', value: '< 1.5% maximum' },
      { label: 'Natural Pod Colour', value: 'Vibrant Natural Emerald Green (Unbleached)' },
      { label: 'Bulk Density', value: '380 – 430 g/L' },
    ],
    packagingOptions: [
      {
        type: 'Nitrogen-Flushed Aluminum Foil Barrier Bags',
        weight: '5 kg net / 10 kg net',
        protection: 'Vacuum heat-sealed, absolute light & oxygen protection',
      },
      {
        type: 'Heavy-Duty 5-Ply Export Master Cartons',
        weight: '20 kg net (4 x 5kg vacuum pouches)',
        protection: 'Reinforced corrugated board with humidity barrier liner',
      },
      {
        type: 'Private Label Importer Packs',
        weight: '50g, 100g, 250g, 500g pouches',
        protection: 'Custom printed stand-up barrier pouches with zip-lock',
      },
    ],
    containerLoadability: {
      container20ft: 'Approx. 10.5 to 11.5 Metric Tons (550 Master Cartons)',
      container40ft: 'Approx. 22 to 24 Metric Tons (1,150 Master Cartons)',
      airCargoMoq: '100 kg via DHL Express / Emirates SkyCargo / Air India Cargo',
    },
    volatileOilProfile: 'Predominantly 1,8-cineole (30-40%) and alpha-terpinyl acetate (35-45%)',
    moistureStandard: 'Below 10.5% (prevents mold proliferation during ocean freight)',
    foreignMatter: 'Below 0.3% w/w',
  },
  pepper: {
    id: 'pepper',
    commonName: 'Black Pepper',
    botanicalName: 'Piper nigrum',
    family: 'Piperaceae',
    hsCode: '0904.11',
    origin: 'Malabar Coast & Coorg Hill Tracts, South India',
    heroTagline: "The King of Spices: High-Density Tellicherry & Malabar Garbled",
    shortDescription: 'World-renowned for its intense biting heat, rich resinous pine undertones, and heavyweight berries yielding superior piperine concentration.',
    longDescription: 'Grown on rain-nourished vine canopies in Coorg and the Malabar foothills. The berries are harvested when the earliest drupes blush orange-red, then sun-cured with traditional hygienic agitation to yield a deeply wrinkled obsidian pericarp. Rigorous spiral density separators guarantee bold Grams-per-Liter (GL) density.',
    harvestSeason: 'December to April (Peak: January–March)',
    colorHex: '#262320',
    accentGlow: '#453F39',
    ambientRgb: '38, 35, 32',
    imageKey: 'pepperMacro',
    sensoryProfile: {
      aromaIntensity: 94,
      essentialOilContent: 88,
      visualBoldness: 95,
      pungency: 98,
      shelfStability: 98,
    },
    grades: [
      {
        name: 'Tellicherry Garbled Special Extra Bold (TGSEB)',
        sizeSpecification: '4.75mm to 5.0mm+ (Only top 10% of harvest)',
        typicalUse: 'Michelin dining, luxury whole-peppercorn mills, premium retail jars',
      },
      {
        name: 'Tellicherry Garbled Extra Bold (TGEB)',
        sizeSpecification: '4.25mm to 4.75mm diameter',
        typicalUse: 'Gourmet butcher rubs, charcuterie curing, high-end spice blending',
      },
      {
        name: 'Malabar Garbled Grade 1 (MG-1 • 550-580 GL)',
        sizeSpecification: '3.5mm to 4.25mm (High density bulk benchmark)',
        typicalUse: 'Industrial food processors, extraction, global seasoning formulations',
      },
    ],
    keySpecs: [
      { label: 'HS Code', value: '0904.11.10 (Whole Black Peppercorns)' },
      { label: 'Bulk Density (GL)', value: '550 to 585 Grams per Liter (G/L)' },
      { label: 'Piperine Content', value: '5.5% – 7.2% (High natural alkaloid pungency)' },
      { label: 'Moisture Content', value: 'Max 11.5% – 12.0%' },
      { label: 'Volatile Essential Oil', value: '2.5% – 3.8% v/w' },
      { label: 'Extraneous Matter', value: '< 0.5% maximum' },
      { label: 'Light Berries / Pinheads', value: '< 1.5% maximum (optical sorted)' },
    ],
    packagingOptions: [
      {
        type: 'Food-Grade Multi-Wall Kraft Paper Bags',
        weight: '25 kg net',
        protection: 'Polyethylene inner liner, anti-puncture, moisture resistant',
      },
      {
        type: 'High-Density Woven Polypropylene (PP) Sacks',
        weight: '50 kg net',
        protection: 'UV-stabilized with internal HDPE liner for containerized ocean voyages',
      },
      {
        type: 'Traditional Breathable Jute Bags',
        weight: '50 kg net',
        protection: 'Food-grade hydrocarbon-free jute upon client specification',
      },
    ],
    containerLoadability: {
      container20ft: 'Approx. 14.5 to 16.0 Metric Tons (Palletized or Floor Loaded)',
      container40ft: 'Approx. 26.0 to 27.5 Metric Tons',
      airCargoMoq: '250 kg via Air Freight Express',
    },
    volatileOilProfile: 'Rich in beta-caryophyllene, pinene, limonene, and sabinene',
    moistureStandard: 'Below 11.5% to ensure zero mould risk across trans-ocean transit',
    foreignMatter: 'Below 0.25% w/w',
  },
  clove: {
    id: 'clove',
    commonName: 'Whole Cloves',
    botanicalName: 'Syzygium aromaticum',
    family: 'Myrtaceae',
    hsCode: '0907.10',
    origin: 'Kanyakumari & Western Ghats Slope Plantations',
    heroTagline: "The Premier Aromatic: Hand-Picked Lal Pari Bold Cloves",
    shortDescription: 'Exquisite reddish-brown whole flower buds with unbroken crowns, distinguished by extraordinary natural eugenol oil content.',
    longDescription: 'Harvested by hand just prior to the delicate flower buds opening into blossom. Each batch is meticulously sun-cured on raised bamboo tiers, then hand-graded ("Lal Pari" ruby-brown selection) to eliminate stems, mother cloves, and headless pieces. Our cloves exude a warm, sweet, intensely medicinal-spicy vapor.',
    harvestSeason: 'January to May (Peak: February–April)',
    colorHex: '#3D1E12',
    accentGlow: '#68331E',
    ambientRgb: '61, 30, 18',
    imageKey: 'cloveMacro',
    sensoryProfile: {
      aromaIntensity: 98,
      essentialOilContent: 95,
      visualBoldness: 92,
      pungency: 90,
      shelfStability: 96,
    },
    grades: [
      {
        name: 'Hand-Picked Lal Pari Bold (Grade 1 Super)',
        sizeSpecification: 'Whole clove with intact four-prong calyx and head',
        typicalUse: 'European mulled beverage blenders, whole baking spices, high-end butcher curing',
      },
      {
        name: 'Standard Garbled Clove Grade 1 (CG1)',
        sizeSpecification: 'Rich reddish-brown, minimal headless buds',
        typicalUse: 'Industrial food preservation, ground curry formulations, extracts',
      },
      {
        name: 'Distillation Quality (High Eugenol)',
        sizeSpecification: 'High volatile oil profile (18-21%)',
        typicalUse: 'Pharmaceutical, dental formulations, perfume, and natural flavour houses',
      },
    ],
    keySpecs: [
      { label: 'HS Code', value: '0907.10.10 (Whole Cloves, Not Crushed or Ground)' },
      { label: 'Eugenol / Volatile Oil', value: '17.0% – 21.0% v/w (Extraordinary natural yield)' },
      { label: 'Moisture Content', value: 'Max 11.0% – 12.0%' },
      { label: 'Headless Cloves', value: '< 2.0% maximum' },
      { label: 'Clove Stems / Mother Cloves', value: '< 1.0% maximum' },
      { label: 'Extraneous Matter', value: '< 0.3% by weight' },
      { label: 'Appearance', value: 'Uniform Reddish-Brown with Well-Formed Crowns' },
    ],
    packagingOptions: [
      {
        type: '5-Ply Corrugated Moisture-Barrier Master Cartons',
        weight: '10 kg net / 20 kg net',
        protection: 'Food-grade polyethylene sealed liner bag inside',
      },
      {
        type: 'Double-Layered Jute Sacks with Polyliner',
        weight: '25 kg / 50 kg net',
        protection: 'Breathable outer layer with hermetic moisture seal inside',
      },
      {
        type: 'Vacuum Aroma Preservation Pouches',
        weight: '5 kg vacuum bricks (4 per master carton)',
        protection: 'Preserves delicate volatile eugenol vapours over 24+ months',
      },
    ],
    containerLoadability: {
      container20ft: 'Approx. 10.5 to 11.5 Metric Tons',
      container40ft: 'Approx. 21.0 to 22.5 Metric Tons',
      airCargoMoq: '100 kg via DHL Express / International Air Cargo',
    },
    volatileOilProfile: 'High eugenol purity (80-88%), eugenyl acetate (8-15%), and caryophyllene',
    moistureStandard: 'Below 11.0% to prevent enzymatic discoloration during trans-Atlantic transit',
    foreignMatter: 'Below 0.2% w/w',
  },
};
