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
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071529",
          royal: "#143159",
          muted: "#1E3A5F",
        },
        gold: {
          DEFAULT: "#C59238",
          hover: "#B3812C",
          light: "#D9AE5F",
          tint: "#F9F3E8",
        },
        slate: {
          ice: "#F4F7FA",
          ink: "#0D1B2A",
          body: "#334155",
        },
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
