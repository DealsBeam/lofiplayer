/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lofi-day': "url('/stations/bg.png')",
        'lofi-night': "url('/stations/bg-night.png')",
        'lofi-synthwave': "url('/stations/bg-2.png')",
        'lofi-serenity': "url('/stations/bg-3.png')",
        'lofi-dreamscape': "url('/stations/bg-4.png')",
      }
    }
  },
  plugins: []
}
