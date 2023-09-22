/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/1Artboard 11.png')",
        "hero-asset": "url('/src/assets/images/Hero section elements.png')",
        analytics: "url('/src/assets/images/Home_page-transformed.png')",
        "dashed-poly": "url('/src/assets/images/1Dashed polygone13.5x10.png')",
        "everything-need":
          "url('/src/assets/images/1curved rectangle13.5x10.png')",
        "everything-need-asset":
          "url('/src/assets/images/1Asset 313.5x10.png')",
        footer: "url('/src/assets/images/1Footer1.png')",
      },
    },
  },
  plugins: [],
};
