import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'pathe';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  css: ['@/assets/scss/tailwind.scss', '@/assets/scss/global.scss'],
  srcDir: 'src/',
  app: {
    head: {
      title: 'Biblioteca Pontificia',
    },
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'perfil', // Nome da rota
        path: '/perfil', // Caminho desejado na URL
        file: resolve(__dirname, 'src/pages/profile/index.vue'), // Caminho para o componente existente
      });
    },
  },
});
