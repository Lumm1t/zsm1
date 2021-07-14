module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false,
  theme: {
    boxShadow: {
      main: '0 6px 2px -2px rgb(0, 0, 0, 0.2)',
    },
    darkSelector: '.dark-mode',
    extend: {
      screens: {
        '2lg': '1150px',
      },
      colors: {
        primary: '#00d563',
        light: {
          text: '#000000',
          bg: '#e7eaeb',
          layer: '#ffffff',
          'hero-side': '#3f4564',
          footer: '#eceff3',
        },
        dark: {
          text: '#ffffff',
          bg: '#0a0a0a',
          layer: '#191919',
          'hero-side': '#f5f5dc',
          footer: '#141414',
        },
      },
      margin: {
        heroinfo: '21vw',
      },
      backgroundImage: () => ({
        'hero-image': "url('~/assets/images/hero-image.jpg')",
      }),
      gridTemplateRows: {
        heroinfo: '1fr 2fr 1fr',
      },
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'focus',
      'responsive',
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive',
    ],
    textColor: [
      'dark',
      'dark-hover',
      'dark-focus',
      'dark-active',
      'hover',
      'focus',
      'responsive',
    ],
    boxShadow: ['dark'],
    extend: {
      opacity: ['dark'],
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
