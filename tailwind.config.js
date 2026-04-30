/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mbytes: {
          charcoal: '#0D0D0F',
          surface: '#121217',
          surface2: '#16161D',
          cyan: '#22D3EE',
          indigo: '#6366F1',
          magenta: '#F472B6',
          acid: '#A3E635',
        },
      },
      boxShadow: {
        glow: '0 0 80px rgba(34, 211, 238, 0.14)',
        soft: '0 20px 80px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
