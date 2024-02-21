import { SiteLanguage, SiteUrl } from './scripts'
// import { createResolver } from '@nuxt/kit'
// const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    shim: false
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    // 'nuxt-schema-org'
  ],
  // schemaOrg: {
  //   canonicalHost: SiteUrl,
  //   defaultLanguage: SiteLanguage,
  // },
  // alias: {
  //   'styled-system': resolve('./styled-system')
  // },
  css: [
    '@/assets/css/main.css',
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  // postcss: {
  //   plugins: {
  //     '@pandacss/dev/postcss': {},
  //   }
  // },
  routeRules: {
    '/about': { redirect: '/about' }
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
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700],
      'Cormorant+Garamond': [400],
    }
  },
    content: {
      highlight: {
        // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
        theme: {
          default: 'min-light',
          light: 'min-dark'
        }
      },
      markdown: {
        toc: {
          depth: 2,
        },
      },
    },
})
