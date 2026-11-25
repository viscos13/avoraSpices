// Commercial photography registry for Arova Spices B2B Portal

export interface VisualAsset {
  id: string;
  title: string;
  alt: string;
  path: string;
  caption: string;
  category: 'hero' | 'product' | 'quality' | 'logistics' | 'origin';
}

export const VISUAL_ASSETS: Record<string, VisualAsset> = {
  heroTradeSpices: {
    id: 'hero-trade-spices',
    title: 'Export-Grade Flagship Spices',
    alt: 'Sorted Indian green cardamom pods, bold Tellicherry black peppercorns, and whole cloves resting in dark slate and stainless steel commercial grading trays',
    path: '/images/hero-trade-spices.jpg',
    caption: 'Origin Corridor: Idukki • Coorg • Wayanad • Chikmagalur',
    category: 'hero',
  },
  productCardamom: {
    id: 'product-cardamom',
    title: '8mm+ Extra Bold Green Cardamom (AGEB)',
    alt: 'Commercial macro of uniform, natural olive-emerald 8mm+ green cardamom pods',
    path: '/images/product-cardamom.jpg',
    caption: 'Natural unbleached 8.0mm+ Alleppey Green Extra Bold pods, moisture-checked below 10.5%.',
    category: 'product',
  },
  productPepper: {
    id: 'product-pepper',
    title: 'Tellicherry Black Pepper (TGSEB / MG-1)',
    alt: 'Commercial macro of bold, heavyweight Malabar black peppercorns with natural textured pericarp',
    path: '/images/product-pepper.jpg',
    caption: 'High-density 550–585 G/L Tellicherry & Malabar garbled black peppercorns.',
    category: 'product',
  },
  productCloves: {
    id: 'product-cloves',
    title: 'Hand-Picked Whole Cloves (Lal Pari)',
    alt: 'Commercial macro of intact reddish-mahogany whole cloves with unbroken four-prong crowns',
    path: '/images/product-cloves.jpg',
    caption: 'Hand-graded Lal Pari whole cloves yielding 17%–21% natural eugenol essential oil.',
    category: 'product',
  },
  qualityInspection: {
    id: 'quality-inspection',
    title: 'Analytical Moisture & Sieve Grading Lab',
    alt: 'Modern sterile spice quality assurance laboratory with digital moisture analyzer, stainless steel grading sieves, and QA inspector',
    path: '/images/quality-inspection.jpg',
    caption: 'Batch-by-batch physical sieve calibration, moisture testing, and volatile oil assay before shipment.',
    category: 'quality',
  },
  exportPackaging: {
    id: 'export-packaging',
    title: 'Export Barrier Packing & Palletized Warehousing',
    alt: 'Clean commercial export warehouse with vacuum-sealed aluminum foil spice packs, 5-ply export cartons, and palletized bulk PP and jute sacks',
    path: '/images/export-packaging.jpg',
    caption: 'Nitrogen-flushed foil barrier pouches, 5-ply master cartons, and palletized bulk sacks prepared for container loading.',
    category: 'logistics',
  },
  westernGhatsOrigin: {
    id: 'western-ghats-origin',
    title: 'Western Ghats Spice Cultivation Belt',
    alt: 'Crisp sunlit panorama of South Indian Western Ghats cardamom and black pepper estates',
    path: '/images/western-ghats-origin.jpg',
    caption: 'Direct farm-gate procurement corridor across Idukki, Coorg, Wayanad, and Chikmagalur estates.',
    category: 'origin',
  },
};
