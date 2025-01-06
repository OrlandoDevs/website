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
