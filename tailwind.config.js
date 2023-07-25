/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "zeemano-950": "#021113",
        "zeemano-900": "#0A3438",
        "zeemano-800": "#0A474C",
        "zeemano-700": "#065E56",
        "zeemano-600": "#02777E",
        "zeemano-500": "#00C1AE",
        "zeemano-400": "#09CECA",
        "zeemano-300": "#2BFDF6",
        "zeemano-200": "#6BFFF8",
        "zeemano-100": "#94FFF8",
        "zeemano-50": "#B3FFF7",
        "zeemano-auxiliary-green": "#006274",
        "zeemano-auxiliary-blue": "#223978",
        "zeemano-auxiliary-orange": "#E8891D",
        "zeemano-auxiliary-yellow": "#FEBF39",
        "zeemano-auxiliary-light-yellow": "#FFE4AD",
      },
      ringOffsetWidth: {
        1: "1px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
