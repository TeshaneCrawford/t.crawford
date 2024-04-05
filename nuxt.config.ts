// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    shim: false
  },
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-og-image',
    'nuxt-icon',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],
  css: [
    '@/assets/css/main.css',
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
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
  content: {
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
  experimental: {
    viewTransition: true,
  }
})
