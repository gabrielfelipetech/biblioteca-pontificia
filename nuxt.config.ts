import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/scss/tailwind.scss', '@/assets/scss/global.scss',],
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
})
