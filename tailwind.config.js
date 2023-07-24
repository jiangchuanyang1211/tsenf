/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '960px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blacgGreen: '#161617',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      // 默认配置container为居中
      center: true,
      // 配置默认的padding
      padding: '1rem',
      // 配置默认的响应式断点
      screens: {
        sm: '600px',
        md: '724px',
        lg: '959px',
        xl: '1200px',
        '2xl': '1496px',
      },
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}

