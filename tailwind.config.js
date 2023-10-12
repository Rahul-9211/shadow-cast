/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend:
    {
      colors: {
        main: "#1D1D1D",
        dark : "#000000",
        error: "#FF5063",
        lightGray : "#C4C4C4"
      },
      minHeight: {
        'auth': 'calc(100vh - 160px)',
        'auth-m': 'calc(100vh - 80px)',
      },
      fontFamily: {       
        'inter' : ['Inter', 'sans-serif'],
        'heading': ['Krona One', 'sans-serif'],
        body: ['Montserrat', 'sans-serif']
      },
      backgroundOpacity : {
        '80': '0.90'
      }
    },
  },
  plugins: [],
};
