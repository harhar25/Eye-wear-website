import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#0b0d10",
        ink: "#15181d",
        graphite: "#242932",
        porcelain: "#f7f4ee",
        pearl: "#fffdf8",
        mist: "#e9edf0",
        teal: "#0e7c86",
        blue: "#2563eb",
        wine: "#7b2d4f",
        copper: "#b77b4d"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(14, 124, 134, 0.22)",
        card: "0 18px 60px rgba(11, 13, 16, 0.12)"
      },
      backgroundImage: {
        "radial-teal": "radial-gradient(circle at 30% 20%, rgba(14, 124, 134, 0.22), transparent 36%)",
        "linear-premium": "linear-gradient(135deg, #0b0d10 0%, #15181d 48%, #0e7c86 100%)"
      }
    }
  },
  plugins: []
};

export default config;
