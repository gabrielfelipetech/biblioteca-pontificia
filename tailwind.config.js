/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './app.vue'],
  theme: {
    extend: {
      screens: {
        tablet: { max: '840px' }, // Para dispositivos menores que 840px
        'mobile-b': { max: '470px' }, // Para dispositivos menores que 470px
        'mobile-m': { max: '375px' }, // Para dispositivos menores que 375px
        'mobile-s': { max: '325px' }, // Para dispositivos menores que 325px
      },
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
        'bp-blue-50-light': 'var(--color-bp-blue-50-light)',
        'bp-blue-100-light': 'var(--color-bp-blue-100-light)',
        'bp-blue-200-light': 'var(--color-bp-blue-200-light)',
        'bp-blue-300-light': 'var(--color-bp-blue-300-light)',
        'bp-blue-400-light': 'var(--color-bp-blue-400-light)',
        'bp-blue-500-light': 'var(--color-bp-blue-500-light)',
        'bp-blue-600-light': 'var(--color-bp-blue-600-light)',
        'bp-blue-700-light': 'var(--color-bp-blue-700-light)',
        'bp-blue-800-light': 'var(--color-bp-blue-800-light)',
        'bp-blue-900-light': 'var(--color-bp-blue-900-light)',

        'bp-red-50-light': 'var(--color-bp-red-50-light)',
        'bp-red-100-light': 'var(--color-bp-red-100-light)',
        'bp-red-200-light': 'var(--color-bp-red-200-light)',
        'bp-red-300-light': 'var(--color-bp-red-300-light)',
        'bp-red-400-light': 'var(--color-bp-red-400-light)',
        'bp-red-500-light': 'var(--color-bp-red-500-light)',
        'bp-red-600-light': 'var(--color-bp-red-600-light)',
        'bp-red-700-light': 'var(--color-bp-red-700-light)',
        'bp-red-800-light': 'var(--color-bp-red-800-light)',
        'bp-red-900-light': 'var(--color-bp-red-900-light)',

        'bp-yellow-50-light': 'var(--color-bp-yellow-50-light)',
        'bp-yellow-100-light': 'var(--color-bp-yellow-100-light)',
        'bp-yellow-200-light': 'var(--color-bp-yellow-200-light)',
        'bp-yellow-300-light': 'var(--color-bp-yellow-300-light)',
        'bp-yellow-400-light': 'var(--color-bp-yellow-400-light)',
        'bp-yellow-500-light': 'var(--color-bp-yellow-500-light)',
        'bp-yellow-600-light': 'var(--color-bp-yellow-600-light)',
        'bp-yellow-700-light': 'var(--color-bp-yellow-700-light)',
        'bp-yellow-800-light': 'var(--color-bp-yellow-800-light)',
        'bp-yellow-900-light': 'var(--color-bp-yellow-900-light)',

        'bp-purple-50-light': 'var(--color-bp-purple-50-light)',
        'bp-purple-100-light': 'var(--color-bp-purple-100-light)',
        'bp-purple-200-light': 'var(--color-bp-purple-200-light)',
        'bp-purple-300-light': 'var(--color-bp-purple-300-light)',
        'bp-purple-400-light': 'var(--color-bp-purple-400-light)',
        'bp-purple-500-light': 'var(--color-bp-purple-500-light)',
        'bp-purple-600-light': 'var(--color-bp-purple-600-light)',
        'bp-purple-700-light': 'var(--color-bp-purple-700-light)',
        'bp-purple-800-light': 'var(--color-bp-purple-800-light)',
        'bp-purple-900-light': 'var(--color-bp-purple-900-light)',

        'bp-green-50-light': 'var(--color-bp-green-50-light)',
        'bp-green-100-light': 'var(--color-bp-green-100-light)',
        'bp-green-200-light': 'var(--color-bp-green-200-light)',
        'bp-green-300-light': 'var(--color-bp-green-300-light)',
        'bp-green-400-light': 'var(--color-bp-green-400-light)',
        'bp-green-500-light': 'var(--color-bp-green-500-light)',
        'bp-green-600-light': 'var(--color-bp-green-600-light)',
        'bp-green-700-light': 'var(--color-bp-green-700-light)',
        'bp-green-800-light': 'var(--color-bp-green-800-light)',
        'bp-green-900-light': 'var(--color-bp-green-900-light)',

        'bp-neutral-0-light': 'var(--color-bp-neutral-0-light)',
        'bp-neutral-50-light': 'var(--color-bp-neutral-50-light)',
        'bp-neutral-100-light': 'var(--color-bp-neutral-100-light)',
        'bp-neutral-200-light': 'var(--color-bp-neutral-200-light)',
        'bp-neutral-300-light': 'var(--color-bp-neutral-300-light)',
        'bp-neutral-400-light': 'var(--color-bp-neutral-400-light)',
        'bp-neutral-500-light': 'var(--color-bp-neutral-500-light)',
        'bp-neutral-600-light': 'var(--color-bp-neutral-600-light)',
        'bp-neutral-700-light': 'var(--color-bp-neutral-700-light)',
        'bp-neutral-800-light': 'var(--color-bp-neutral-800-light)',
        'bp-neutral-900-light': 'var(--color-bp-neutral-900-light)',
        'bp-neutral-1000-light': 'var(--color-bp-neutral-1000-light)',

        // Cores do modo escuro
        'bp-blue-50-dark': 'var(--color-bp-blue-50-dark)',
        'bp-blue-100-dark': 'var(--color-bp-blue-100-dark)',
        'bp-blue-200-dark': 'var(--color-bp-blue-200-dark)',
        'bp-blue-300-dark': 'var(--color-bp-blue-300-dark)',
        'bp-blue-400-dark': 'var(--color-bp-blue-400-dark)',
        'bp-blue-500-dark': 'var(--color-bp-blue-500-dark)',
        'bp-blue-600-dark': 'var(--color-bp-blue-600-dark)',
        'bp-blue-700-dark': 'var(--color-bp-blue-700-dark)',
        'bp-blue-800-dark': 'var(--color-bp-blue-800-dark)',
        'bp-blue-900-dark': 'var(--color-bp-blue-900-dark)',

        'bp-red-50-dark': 'var(--color-bp-red-50-dark)',
        'bp-red-100-dark': 'var(--color-bp-red-100-dark)',
        'bp-red-200-dark': 'var(--color-bp-red-200-dark)',
        'bp-red-300-dark': 'var(--color-bp-red-300-dark)',
        'bp-red-400-dark': 'var(--color-bp-red-400-dark)',
        'bp-red-500-dark': 'var(--color-bp-red-500-dark)',
        'bp-red-600-dark': 'var(--color-bp-red-600-dark)',
        'bp-red-700-dark': 'var(--color-bp-red-700-dark)',
        'bp-red-800-dark': 'var(--color-bp-red-800-dark)',
        'bp-red-900-dark': 'var(--color-bp-red-900-dark)',

        'bp-yellow-50-dark': 'var(--color-bp-yellow-50-dark)',
        'bp-yellow-100-dark': 'var(--color-bp-yellow-100-dark)',
        'bp-yellow-200-dark': 'var(--color-bp-yellow-200-dark)',
        'bp-yellow-300-dark': 'var(--color-bp-yellow-300-dark)',
        'bp-yellow-400-dark': 'var(--color-bp-yellow-400-dark)',
        'bp-yellow-500-dark': 'var(--color-bp-yellow-500-dark)',
        'bp-yellow-600-dark': 'var(--color-bp-yellow-600-dark)',
        'bp-yellow-700-dark': 'var(--color-bp-yellow-700-dark)',
        'bp-yellow-800-dark': 'var(--color-bp-yellow-800-dark)',
        'bp-yellow-900-dark': 'var(--color-bp-yellow-900-dark)',

        'bp-purple-50-dark': 'var(--color-bp-purple-50-dark)',
        'bp-purple-100-dark': 'var(--color-bp-purple-100-dark)',
        'bp-purple-200-dark': 'var(--color-bp-purple-200-dark)',
        'bp-purple-300-dark': 'var(--color-bp-purple-300-dark)',
        'bp-purple-400-dark': 'var(--color-bp-purple-400-dark)',
        'bp-purple-500-dark': 'var(--color-bp-purple-500-dark)',
        'bp-purple-600-dark': 'var(--color-bp-purple-600-dark)',
        'bp-purple-700-dark': 'var(--color-bp-purple-700-dark)',
        'bp-purple-800-dark': 'var(--color-bp-purple-800-dark)',
        'bp-purple-900-dark': 'var(--color-bp-purple-900-dark)',

        'bp-green-50-dark': 'var(--color-bp-green-50-dark)',
        'bp-green-100-dark': 'var(--color-bp-green-100-dark)',
        'bp-green-200-dark': 'var(--color-bp-green-200-dark)',
        'bp-green-300-dark': 'var(--color-bp-green-300-dark)',
        'bp-green-400-dark': 'var(--color-bp-green-400-dark)',
        'bp-green-500-dark': 'var(--color-bp-green-500-dark)',
        'bp-green-600-dark': 'var(--color-bp-green-600-dark)',
        'bp-green-700-dark': 'var(--color-bp-green-700-dark)',
        'bp-green-800-dark': 'var(--color-bp-green-800-dark)',
        'bp-green-900-dark': 'var(--color-bp-green-900-dark)',

        'bp-neutral-0-dark': 'var(--color-bp-neutral-0-dark)',
        'bp-neutral-50-dark': 'var(--color-bp-neutral-50-dark)',
        'bp-neutral-100-dark': 'var(--color-bp-neutral-100-dark)',
        'bp-neutral-200-dark': 'var(--color-bp-neutral-200-dark)',
        'bp-neutral-300-dark': 'var(--color-bp-neutral-300-dark)',
        'bp-neutral-400-dark': 'var(--color-bp-neutral-400-dark)',
        'bp-neutral-500-dark': 'var(--color-bp-neutral-500-dark)',
        'bp-neutral-600-dark': 'var(--color-bp-neutral-600-dark)',
        'bp-neutral-700-dark': 'var(--color-bp-neutral-700-dark)',
        'bp-neutral-800-dark': 'var(--color-bp-neutral-800-dark)',
        'bp-neutral-900-dark': 'var(--color-bp-neutral-900-dark)',
        'bp-neutral-1000-dark': 'var(--color-bp-neutral-1000-dark)',
      },
    },
  },
  plugins: [],
};
