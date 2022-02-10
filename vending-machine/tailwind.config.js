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
        brendanWhite: '#f8efe1',
        brendanBrown: '#bf7b69',
        brendanLightGreen: '#0e4826',
        brendanDarkGreen: '#0a2d2b'
      },
    },
  },
  plugins: [],
}
