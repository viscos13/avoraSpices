// Assets registry for Arova Spices luxury visual assets

export interface VisualAsset {
  id: string;
  title: string;
  alt: string;
  path: string;
  caption?: string;
  category: 'hero' | 'macro' | 'origin' | 'quality';
}

export const VISUAL_ASSETS: Record<string, VisualAsset> = {
  heroSpicesDark: {
    id: 'hero-spices-dark',
    title: 'The Flagship Spice Trilogy',
    alt: 'Dramatic dark slate overhead macro shot of emerald green cardamom pods, glossy black peppercorns, and whole cloves with warm golden rim lighting',
    path: '/images/hero-spices-dark.jpg',
    caption: 'Estate-graded green cardamom, Malabar black pepper, and whole cloves on dark obsidian stone.',
    category: 'hero',
  },
  cardamomMacro: {
    id: 'cardamom-macro',
    title: '8mm+ Bold Alleppey Green Cardamom',
    alt: 'Studio macro of bold 8mm+ vibrant green cardamom pods on dark volcanic stone with subtle golden dust particles',
    path: '/images/cardamom-macro.jpg',
    caption: 'Deep emerald husks with high volatile oil seed retention and uniform 8mm+ calibration.',
    category: 'macro',
  },
  pepperMacro: {
    id: 'pepper-macro',
    title: 'Tellicherry Garbled Special Extra Bold (TGSEB)',
    alt: 'High-contrast dramatic close-up of wrinkled glossy Tellicherry black peppercorns cascading on dark charcoal slate',
    path: '/images/pepper-macro.jpg',
    caption: 'High-density 580+ GL Tellicherry black peppercorns with intense piperine potency.',
    category: 'macro',
  },
  cloveMacro: {
    id: 'clove-macro',
    title: 'Hand-Picked Lal Pari Whole Cloves',
    alt: 'Warm moody close-up of whole hand-picked reddish-brown cloves with rich bronze highlights',
    path: '/images/clove-macro.jpg',
    caption: 'Intact four-cleft calyx crowns rich in eugenol essential oil with minimal headless stems.',
    category: 'macro',
  },
  westernGhatsEstate: {
    id: 'western-ghats-estate',
    title: 'Western Ghats Biodiversity Canopy',
    alt: 'Misty, cinematic golden-hour aerial view of lush South Indian spice plantations in the Western Ghats',
    path: '/images/western-ghats-estate.jpg',
    caption: 'High-elevation microclimates between 800m and 1,400m altitude yielding unmatched aromatic concentration.',
    category: 'origin',
  },
  qualityLabGrading: {
    id: 'quality-lab-grading',
    title: 'Export Quality & Moisture Control Lab',
    alt: 'Modern, hygienic spice grading and export quality laboratory showcasing clean inspection and vacuum-sealed bulk export packs',
    path: '/images/quality-lab-grading.jpg',
    caption: 'Stringent laboratory testing for volatile oil %, moisture thresholds, and aflatoxin/pesticide compliance.',
    category: 'quality',
  },
};
