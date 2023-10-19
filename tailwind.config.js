/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lofi-day': "url('/bg.png')",
        'lofi-night': "url('/bg-night.png')",
      }
    }
  },
  plugins: []
}
