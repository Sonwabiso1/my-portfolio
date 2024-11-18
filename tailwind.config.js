module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-peach': '#FFC567',
        'coral-pink': '#FB7DA8',
        'royal-purple': '#552CB7',
        'tomato-red': '#FD5A46',
        'emerald-green': '#00995E',
        'ocean-blue': '#058CD7',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};