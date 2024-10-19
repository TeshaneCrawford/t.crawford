// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: true,
    shim: true,
  },
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/fonts',
    'nuxt-time',
    'nuxt-og-image'
  ],
  css: [
    '@/assets/css/main.css',
    '@unocss/reset/tailwind.css',
    '@/assets/css/font.css'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  routeRules: {
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_SITE_URL || 'https://teshanecrawford.com'
    }
  },

  $development: {
    runtimeConfig: {
      public: {
        website: {
          url: 'http://localhost:3000'
        }
      }
    }
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Teshane Crawford',
    },
    pageTransition: false,
    layoutTransition: false,
  },

  site: {
    url: 'https://teshanecrawford.com',
  },

  ogImage: {
    zeroRuntime: true,
    fonts: [
      'DM+Sans:400',
      'DM+Sans:600',
    ],
  },

  experimental: {
    viewTransition: true,
    componentIslands: true,
    payloadExtraction: true,
  }
})