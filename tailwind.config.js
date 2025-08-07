// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        parallax: "parallax 15s linear infinite",
      },
      keyframes: {
        parallax: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
    },
  },
  plugins: [],
}
