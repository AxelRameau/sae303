/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'var(--ff-Poppins)',
      },
      colors:{
        'pink':'var(--pink)',
        'blue':'var(--blue)',
        'darkblue':'var(--darkblue)',
        'darkpink':'var(--darkpink)',
        'violet':'var(--violet)',
        'beige':'var(--beige)'
      },
      backgroundImage:{
        'img':'var(--fond-img)'
      },
      backgroundColor:{
        'noir40':'var(--black-opa40)',
        'pink':'var(--pink)',
        'blue':'var(--blue)',
        'bluefooter':'var(--bluefooter)',
        'darkblue':'var(--darkblue)',
        'darkpink':'var(--darkpink)',
        'violet':'var(--violet)',
        'beige' : 'var(--fond)',
      },
      width: {
        '200': '90rem',
        'camion': '80rem',
        '100': '40rem',
        '150':'55rem',
        
        
      },
      height: {
        '200': '55rem',
        'camion': '80rem,'
      }
    },
  },
  plugins: [],
}