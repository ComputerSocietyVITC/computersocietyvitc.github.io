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
      },
      colors: {
        blacky: "#1a1a1a",
      },
    },
  },
  plugins: [],
};

export default config;
