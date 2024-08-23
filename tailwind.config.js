/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '10px',
        // Add other blur levels as needed
      },
    },
  },
  plugins: [],
}
