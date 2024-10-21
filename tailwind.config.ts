import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "600px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
    },

    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },

    colors: {
      transparent: "transparent",
      "orange-dark": " #E94E45",
      "orange-normal": "#f76e5f",
      "orange-light": "#f7aa7e",
      yellow: "#e2c12c",
      "yellow-light": "#fbe5a2",
      "gray-dark": "#282828",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      lineHeight: {
        none: "1",
      },
    },
  },
  plugins: [],
};
export default config;
