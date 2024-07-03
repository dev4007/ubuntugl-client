/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        'original-surfer': ['Original Surfer', 'sans-serif'],
      },
      colors: {
        'text-bg': '#557DE4',
      },
      fontWeight: {
        'normal': '1rem',
      },
    },
  },
  plugins: [],
};
