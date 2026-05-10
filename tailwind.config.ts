import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1B3A8A",
          "blue-deep": "#143076",
          "blue-card": "#1F4FA8",
          orange: "#F26B2A",
          green: "#16C172",
          "green-dark": "#13A862",
          ink: "#0E1B3D",
          muted: "#5B6B8A",
          surface: "#F5F7FB",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
