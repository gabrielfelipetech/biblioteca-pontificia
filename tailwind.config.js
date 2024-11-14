/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './app.vue',],
  theme: {
    extend: {
      borderWidth: {
        1: '1px', 
      },
      colors: {
        textColor: {
          DEFAULT: 'var(--color-text)',
        },
        backgroundColor: {
          DEFAULT: 'var(--color-bg)',
        },
        gold: {
          light: 'var(--color-gold-light)',
          soft: 'var(--color-gold-soft)',
          medium: 'var(--color-gold-medium)',
          deep: 'var(--color-gold-deep)',
        },
        blue: {
          light: 'var(--color-blue-light)',
          soft: 'var(--color-blue-soft)',
          medium: 'var(--color-blue-medium)',
          deep: 'var(--color-blue-deep)',
        },
        red: {
          light: 'var(--color-red-light)',
          soft: 'var(--color-red-soft)',
          medium: 'var(--color-red-medium)',
          deep: 'var(--color-red-deep)',
        },
      },
    },
  },
  plugins: [],
}

