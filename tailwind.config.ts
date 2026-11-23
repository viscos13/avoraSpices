import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stage: {
          white: "#FFFFFF",
          pearl: "#FBF8F3",
          linen: "#F4EFE6",
        },
        emerald: {
          brand: "#0B3B2E",
          dark: "#082920",
          deep: "#051D17",
          light: "#125644",
          soft: "#E8F2EE",
        },
        saffron: {
          DEFAULT: "#C97E12",
          warm: "#E5A024",
          light: "#F7BE58",
          soft: "#FDF5E8",
        },
        ink: {
          DEFAULT: "#141210",
          muted: "#4A4540",
          soft: "#736C65",
        },
        terracotta: {
          DEFAULT: "#8F3518",
          dark: "#6D250E",
          soft: "#FCEEE9",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
