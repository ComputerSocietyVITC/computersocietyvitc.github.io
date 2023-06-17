let config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screen: {
        sm: {
          max: "767px",
        },
        md: {
          min: "768px",
          max: "959px",
        },
        lg: {
          min: "960px",
        },
      },
      fontFamily: {
        space: "Space Grotesk, sans-serif",
        ptsansb: "PT-Sans Bold, sans-serif",
        ptsansbi: "PT-Sans BoldItalic, sans-serif",
        ptsansr: "PT-Sans Regular, sans-serif",
        monsterrat: "Monsterrat Regular, sans-serif",
        raleway: "Raleway, sans-serif",
      },
      colors: {
        blacky: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

export default config;
