module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage:{
        cloudy:"url(./src/assets/Cloud-background.png)"
      }
    },
    colors:{
      blue:{
        300:'#585676',
        400:'#3C47E9',
        500:'#1E213A',
        700:'#100E1D'
      },
      gray:{
        300:'#E7E7EB',
        400:'#A09FB1',
        500:'#6E707A',
        600:'#88869D',
        700:'#616475'
      },
      yellow: {
        500:'#FFEC65'
      }
    },
    fontFamily:{
      Raleway:['Raleway','Roboto','sans-serif']
    }
  },
  plugins: [],
}
