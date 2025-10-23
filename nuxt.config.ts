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
      titleTemplate: '%s | Biblioteca Pontificia',
      meta: [
        {
          name: 'description',
          content:
            'Biblioteca Pontifícia. Devocionário, missal, cânticos, documentos papais e muito mais.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://bibliotecapontificia.com.br' },
        { property: 'og:title', content: 'Biblioteca Pontificia' },
        {
          property: 'og:description',
          content:
            'Biblioteca Pontifícia. Devocionário, missal, cânticos, documentos papais e muito mais.',
        },
        { property: 'og:image', content: '/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  nitro: {
    routeRules: {
      '/texts/**': {
        headers: {
          'cache-control':
            'public, max-age=86400, stale-while-revalidate=86400',
        },
      },
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
