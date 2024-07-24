/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true, // Centers the container
      padding: {
        DEFAULT: "3rem", // Default padding for the container
      },
      screens: {
        lg: "100%", // Full width for large devices
        xl: "100%", // Full width for extra-large devices
        "2xl": "100%", // Full width for 2xl devices
      },
    },
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "original-surfer": ["Original Surfer", "sans-serif"],
        Pathway : ["Pathway Gothic One", "sans-serif"]
      },
      colors: {
        primary: 'rgba(85, 125, 228, 1)', // Set your custom color here
        "text-bg": "#557DE4",
        "btn-yellow" : 'rgba(252, 198, 38, 1)',
        "grand-sell" : 'rgba(255, 214, 91, 1)',
        "progress" : 'rgba(255, 58, 81, 1)',
        "progress-remain" : 'rgba(217, 217, 217, 1)',
        "order-btn-green" :"rgba(35, 215, 107, 0.5)",
        "order-btn-red":"rgba(255, 58, 81, 0.5)",
        "order-btn-yellow":"rgba(252, 198, 38, 0.5)"
      },
      fontWeight: {
        normal: "1rem",
      },
    },
  },
  plugins: [],
};
