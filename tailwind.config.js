/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors :{
        "darkGrey" : "#131921",
        "midLightGrey" : "#232F3E",
        "lightGrey" : "#37475A",
        "brightOrange" : "#FFD814",
        "darkOrange" : "#EA8505",
        "lightOrange" : "#FEBD69"
      }
    },
  },
  plugins: [],
}
