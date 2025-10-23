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
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Biblioteca Pontificia',
      titleTemplate: '%s | Biblioteca Pontificia',
      meta: [
        {
          name: 'description',
          content:
            'Biblioteca Pontifícia. Devocionário, missal, cânticos, documentos papais e muito mais.',
        },
        { name: 'robots', content: 'index,follow' },
        { name: 'theme-color', content: '#0b1228' },
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
        { rel: 'canonical', href: 'https://bibliotecapontificia.com.br' },
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
          rel: 'icon',
          type: 'image/png',
          sizes: '48x48',
          href: '/favicon-48x48.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: 'https://bibliotecapontificia.com.br',
            name: 'Biblioteca Pontificia',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://bibliotecapontificia.com.br/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Biblioteca Pontificia',
              logo: 'https://bibliotecapontificia.com.br/android-chrome-512x512.png',
            },
          }),
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {},
    },
  },
  nitro: {
    routeRules: {
      '/': {
        headers: { 'cache-control': 'public, max-age=0, must-revalidate' },
      },
      '/favicon.ico': {
        headers: { 'cache-control': 'public, max-age=0, must-revalidate' },
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
    '@nuxtjs/sitemap',
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
    routes: async () => [
      '/devocionario/via-sacra',
      '/ritual/batismo',
      '/ritual/matrimonio',
    ],
  },
});
