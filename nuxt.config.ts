import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'pathe';

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
    '@nuxtjs/sitemap', // Módulo de sitemap
  ],
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'perfil',
        path: '/perfil',
        file: resolve(__dirname, 'src/pages/profile/index.vue'),
      });
    },
  },
  sitemap: {
    hostname: 'https://bibliotecapontificia.com.br',
    gzip: true,
    routes: async () => {
      return ['/sobre', '/contato', '/livros'];
    },
  },
});
