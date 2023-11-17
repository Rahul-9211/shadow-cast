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
        lightGray : "#C4C4C4",
        sec : "#FBBC5E",
        secDark: "#DB9149"
      },
      minHeight: {
        'auth': 'calc(100vh - 160px)',
        'auth-m': 'calc(100vh - 80px)',
      },
      fontFamily: {       
        'heading': ['Krona One', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif']
      },
      backgroundOpacity : {
        '80': '0.90'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(255,233,201,0.6) 0%, rgba(29,29,29,0.5999649859943977) 61%)'
      }
    },
  },
  plugins: [],
};
