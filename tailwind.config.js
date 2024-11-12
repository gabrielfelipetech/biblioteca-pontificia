/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './app.vue',],
  theme: {
    extend: {
      colors: {
        textColor: {
          DEFAULT: 'var(--color-text)',
        },
        backgroundColor: {
          DEFAULT: 'var(--color-bg)',
        },
      },
    },
  },
  plugins: [],
}

