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
    darkSelector: '.dark-mode',
    extend: {
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
      backgroundImage: () => ({
        'hero-image': "url('~/assets/images/hero-image.jpg')",
      }),
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
