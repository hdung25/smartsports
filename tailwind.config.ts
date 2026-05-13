import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0064b0",
          "blue-deep": "#004d8a",
          "blue-card": "#0052a3",
          orange: "#fc4c00",
          yellow: "#ffcc00",
          green: "#9ad600",
          "green-dark": "#7ab800",
          ink: "#0E1B3D",
          muted: "#5B6B8A",
          surface: "#F5F7FB",
        },
      },
      fontFamily: {
        title: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
