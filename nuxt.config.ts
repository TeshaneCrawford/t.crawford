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
  // googleFonts: {
  //   display: 'swap',
  //   download: true,
  //   families: {
  //     'DM+Sans': [400, 500, 600, 700],
  //     'Cormorant+Garamond': [400],
  //   }
  // },
    content: {
      // documentDriven: true,
      highlight: {
        // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
        theme: {
          default: 'material-theme-lighter',
          dark: 'material-theme-palenight'
        },
        langs: [
          'js',
          'ts',
          'c#',
          'java',
          'vue',
          'jsx',
          'css',
          'scss',
          'sass',
          'html',
          'bash',
          'md',
          'mdc',
          'json'
        ]
      },
      markdown: {
        toc: {
          depth: 2,
        },
      },
    },
})
