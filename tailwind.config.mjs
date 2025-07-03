/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "custom-image": "url('/images/customBG.svg')",
        "custom-back-ground": "url('/images/pattern-randomized.svg')",
        "custom-back-ground-two": "url('/images/pattern-randomized-two.svg')",
      },
      colors: {
        gray: {
          DEFAULT: '#C9C9CB',
        },
        'light-blue': {
          DEFAULT: '#739DB3',
        },
        'medium-blue': {
          DEFAULT: '#0A3754',
        },
        'dark-blue': {
          DEFAULT: '#0A2C48',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: [
      "dark",
      "synthwave",
      "lofi",
      "pastel",
      "fantasy",
      "dracula",
      "autumn",
      "business",
      "acid",
      "night",
      "winter",
      "dim",
      "nord",
    ],
  },
};
