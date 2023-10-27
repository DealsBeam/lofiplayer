/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lofi-day': "url('/stations/default-bg.png')",
        'lofi-night': "url('/stations/default-night-bg.png')",
        'lofi-winter-day': "url('/stations/default-winter-bg.png')",
        'lofi-winter-night': "url('/stations/default-winter-night-bg.png')",
        'lofi-synthwave': "url('/stations/synthwave-bg.png')",
        'lofi-serenity': "url('/stations/serenity-bg.png')",
        'lofi-dreamscape': "url('/stations/dreamscape-bg.png')",
        'lofi-ethernal': "url('/stations/ethernal-bg.png')",
        'lofi-nocturne': "url('/stations/nocturne-bg.png')",
        'lofi-radiant': "url('/stations/radiant-bg.png')",
        'lofi-bliss': "url('/stations/bliss-bg.png')"
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    }
  },
  plugins: []
}
