/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      prime: '#282828',
      card_bg: '#f2f2f2',
      white: '#ffffff',
      text_grey: '#d1d1d1',
      text_primary: '#d1d1d1',
      black: '#222831',
      highlight: '#ffbc10',
      transparent: 'transparent'
    },
    gridTemplateColumns: {
      'tapbarmenu': '1fr 1fr 1fr 1fr 1fr',
      'category_grid': 'repeat(3, minmax(0, 1fr))',
      'featured_grid': 'repeat(2, minmax(0, 1fr))'
    },
    gridTemplateRows: {
      'tapbarmenu': '100%',
      'dashboard_services': 'repeat(4, minmax(0, 1fr))',
      'cars_grid': '1fr 1fr',
      'habits': '1fr 1fr 1fr 1fr'
    },
    extend: {},
  },
  plugins: [],
}

