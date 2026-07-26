/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      colors: {
        ink: {
          950: "#0a0f1c",
          900: "#0f1729",
          800: "#1b2540",
          700: "#293452",
          600: "#3b4869",
        },
        paper: "#f6f7fb",
        brand: {
          50: "#e8fbf1",
          100: "#c6f4dd",
          200: "#8fe8bd",
          300: "#4fd694",
          400: "#1fbd75",
          500: "#079a5c",
          600: "#007b49",
          700: "#00603a",
        },
        gold: {
          400: "#ffd43b",
          500: "#f5b70a",
          600: "#d99200",
        },
        // verdict palette
        vrai: "#0f9d58",
        faux: "#e2333f",
        trompeur: "#f5a623",
        contexte: "#8b5cf6",
        indeterminable: "#64748b",
        encours: "#2b7fff",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,41,0.04), 0 8px 24px -12px rgba(15,23,41,0.18)",
        float: "0 12px 40px -12px rgba(15,23,41,0.28)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
