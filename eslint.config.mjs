// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    files: ['**/*.{js,ts,vue}'],

    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },

    rules: {
      'no-console': 'warn',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
    },
  },
]);
