import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-2": "#011627",
        "primary-dark-gray": "rgb(0 46 64)",
        "primary-gray": "#607B96",
        "line-color": "#1E2D3D",
        "accent-orange": "#FEA55F",
        "primary-text": "#E5E9F0",
        "secondary-blue": "#4D5BCE",
        "secondary-green": "#3C9D93"
      },
    },
  },
  plugins: [],
};
export default config;
