// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@nuxt/content"
  ],

  runtimeConfig: {
    public: {
      trailingSlash: true,
      siteUrl: 'https://teshanecrawford.live',
      siteName: 'Teshane Crawford',
      siteDescription: 'Teshane Crawford is a software engineer based in New York City.',
      language: 'en',
    }
  },

  content: {
    highlight: {
      theme: {
        default: 'material-theme-lighter',
        dark: 'material-theme-palenight'
      },
    }
  },

  ui: {
    icons: ['ri', 'logos', 'simple-icons']
  }
})