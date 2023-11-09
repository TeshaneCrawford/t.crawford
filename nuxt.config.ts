import { SiteLanguage, SiteUrl } from './scripts'
// import { createResolver } from '@nuxt/kit'
// const { resolve } = createResolver(import.meta.url)

// const docsSource: any = {
//   name: 'nuxt-docs',
//   driver: 'github',
//   repo: 'nuxt/nuxt',
//   branch: 'main',
//   dir: 'docs',
//   prefix: '/1.docs',
//   token: process.env.NUXT_GITHUB_TOKEN || ''
// }
// if (process.env.NUXT_DOCS_PATH) {
//   docsSource.driver = 'fs'
//   docsSource.base = process.env.NUXT_DOCS_PATH
// }

// const examplesSource: any = {
//   name: 'nuxt-examples',
//   driver: 'github',
//   repo: 'nuxt/examples',
//   branch: 'main',
//   dir: '.docs',
//   prefix: '/docs/4.examples',
//   token: process.env.NUXT_GITHUB_TOKEN || ''
// }
// if (process.env.NUXT_EXAMPLES_PATH) {
//   examplesSource.driver = 'fs'
//   examplesSource.base = process.env.NUXT_EXAMPLES_PATH
// }

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
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
    'nuxt-schema-org'
  ],
  schemaOrg: {
    canonicalHost: SiteUrl,
    defaultLanguage: SiteLanguage,
  },
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
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  content: {
    navigation: {
      fields: ['titleTemplate']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'material-darker',
    },
    markdown: {
      toc: {
        depth: 2,
      },
    },
  },
})
