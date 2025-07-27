// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/fonts'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },
  nitro: {
    preset: 'static',
    externals: {
      external: ['better-sqlite3']
    }
  },

  compatibilityDate: '2024-11-27',

  runtimeConfig: {
    public: {
      tenant: process.env.TENANT || 'knoxville'
    }
  }
})
