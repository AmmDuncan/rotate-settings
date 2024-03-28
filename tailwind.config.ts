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
        primary: "rgba(94, 109, 250, 1)",
        bg: "rgba(251, 251, 252, 1)",
        blue: {
          600: "rgba(94, 109, 250, 1)",
        },
        gray: {
          900: "rgba(41, 43, 52, 1)",
          600: "rgba(93, 95, 109, 1)",
          500: "rgba(124, 129, 135, 1)",
          400: "rgba(129, 133, 156, 1)",
          100: "rgba(202, 206, 225, 1)",
          50: "rgba(246, 247, 251, 1)",
        },
        warning: {
          dark: "rgba(209, 126, 9, 1)",
          light: "rgba(255, 240, 219, 0.6)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
