/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1000000: "1000000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class", '[data-theme="dark"]'],
  corePlugins: { preflight: false },
};
