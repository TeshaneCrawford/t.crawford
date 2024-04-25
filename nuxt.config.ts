import { pwa } from './config/pwa'
import { appDescription } from './utils/appmetadata'

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
    "@nuxt/content",
    "@vite-pwa/nuxt",
    "@nuxt/image",
    "@dargmuesli/nuxt-cookie-control"
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
    icons: ['ri', 'logos', 'simple-icons', 'line-md', 'twemoji', 'fluent']
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          rel: "stylesheet",
        },
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  pwa,
})