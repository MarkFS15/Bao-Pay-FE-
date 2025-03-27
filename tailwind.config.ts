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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4F46E5", // Custom primary color
        secondary: "#D1D5DB", // Custom secondary color
        accent: "#10B981", // Accent color for highlights
      },
      spacing: {
        "128": "32rem", // Custom spacing values
        "144": "36rem",
      },
      screens: {
        xs: "475px", // Extra small screens (mobile-first design)
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        "4xl": "2rem", // Custom border radius for rounded elements
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin for better form styling
    require("@tailwindcss/typography"), // Plugin for typography improvements
  ],
};

export default config;
