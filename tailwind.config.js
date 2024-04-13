/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      prime: '#282828',
      card_bg: '#f2f2f2',
      main_bg: '#f9f9f9',
      white: '#ffffff',
      text_grey: '#d1d1d1',
      text_primary: '#b1afaf',
      black: '#222831',
      highlight: '#ffbc10',
      black_two: '#41788c', 
      transparent: 'transparent',
      border_grey: '#edf0f3'
    },
    gridTemplateColumns: {
      'tapbarmenu': '1fr 1fr 1fr 1fr 1fr',
      'filter_btns': 'auto auto 1fr 1fr',
      'category_grid': 'repeat(3, minmax(0, 1fr))',
      'featured_grid': 'repeat(2, minmax(0, 1fr))',
      'upload_thumbnail_grid': 'repeat(5, minmax(0, 1fr))',
      'product_list_item': '130px, 1fr'
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

