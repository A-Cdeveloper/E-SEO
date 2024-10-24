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
      lg: "800px",
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
      "orange-dark": " #D6372D",
      "orange-normal": "#f76e5f",
      "orange-light": "#f7aa7e",
      rosa: "#df9a8d",
      dirty: "#ede9d0",
      turquoise: "#56babc",
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
