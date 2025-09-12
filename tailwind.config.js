/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue-600
        secondary: "#9333ea", // purple-600
        background: "#f9fafb" // gray-50
      },
    },
  },

  
  plugins: [],

  // tailwind.config.js
theme: {
  extend: {
    spacing: {
      100: '25rem', // now pt-100 = 25rem
    },
  },
}

};
