module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Infinite: ["Infinite", "sans-serif"],
        UbuntuBold: ["UbuntuBold", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        brendanPink: '#d56fa4',
        brendanLightPink: '#f27fba',
        brendanWhite: '#f8efe1',
        brendanBrown: '#bf7b69',
        brendanLightGreen: '#0e4826',
        brendanDarkGreen: '#0a2d2b'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(-150%)' },
          '50%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(-150%)' },
        },
        updown: {
          '0%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(-50%)'},
          '100%': { transform: 'translateY(0%)'},
        },
        twitch: {
          '0%': { transform: 'rotate(0deg)'},
          '5%': { transform: 'rotate(30deg)'},
          '10%, 100%': { transform: 'rotate(0deg)'},
        },
        zoom: {
          '0%': { transform: 'scale(1)'},
          '5%': { transform: 'scale(1.1)'},
          '10%, 100%' : { transform: 'scale(1)'},
        },
      },
      animation: {
        wiggle: 'wiggle 20s infinite',
        updown: 'updown 10s infinite',
        twitch: 'twitch 10s infinite',
        zoom: 'zoom 15s infinite',
      },
    },
  },
  plugins: [],
}
