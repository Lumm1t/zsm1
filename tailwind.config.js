module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined, // https://github.com/tailwindlabs/tailwindcss/issues/3982#issuecomment-815516801
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
        primary: '#06c138',
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
      backgroundSize: {
        'underline-from': '100% 1px;',
        'underline-to': '0% 1px;',
      },
      backgroundPosition: {},
      gridTemplateRows: {
        heroinfo: '1fr 2fr 1fr',
      },
      animation: {
        'side-to-side': '1.2s infinite side-to-side',
      },
      keyframes: {
        'side-to-side': {
          '0%, 100%': { transform: 'translateX(-3px)' },
          '50%': { transform: 'translateX(3px)' },
        },
      },
    },
  },
}
