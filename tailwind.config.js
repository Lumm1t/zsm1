module.exports = {
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1650px',
      },
    },
    extend: {
      screens: {
        '2lg': '1150px',
      },
      boxShadow: {
        main: '0 6px 2px -2px rgb(0, 0, 0, 0.2)',
      },
      inset: {
        heroside: '45%',
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
    extend: {
      opacity: ['dark'],
      boxShadow: ['dark'],
      backgroundColor: ['group-focus'],
    },
  },
}
