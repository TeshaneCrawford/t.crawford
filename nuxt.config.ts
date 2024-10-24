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
    'nuxt-og-image',
    'nuxt-carousel',
    '@vueuse/motion/nuxt',
    '@nuxthq/studio'
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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          // additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    plugins: [
      // svgLoader({
      //   defaultImport: 'url',
      // }),
    ],
  },

  routeRules: {
    '/blog': {
      isr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24,
        swr: true
      }
    },
    '/blog/**': {
      isr: 60 * 60 * 24,
      prerender: true,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      }
    },
    '/projects': {
      isr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60,
        swr: true
      },
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    },
    '/photos': {
      isr: true,
      cache: {
        maxAge: 60 * 60 * 24,
        staleMaxAge: 60 * 60,
        swr: true
      },
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        'Accept-CH': 'DPR, Viewport-Width, Width',
        'Permissions-Policy': 'ch-dpr=(self), ch-viewport-width=(self), ch-width=(self)'
      }
    },
    '/photos/*': {
      isr: true,
      cache: {
        maxAge: 60 * 60 * 24 * 7,
        swr: true
      }
    },
    '/uses': {
      prerender: true,
      static: true
    },
  },

  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml'],
    },
  },

  runtimeConfig: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudSecret: process.env.NUXT_CLOUD_SECRET_KEY,
    cloudKey: process.env.NUXT_CLOUD_API_KEY,
    // NUXT_WEATHER_API_KEY: process.env.NUXT_WEATHER_API_KEY,
    private: {
      // NUXT_WEATHER_API_KEY: process.env.NUXT_WEATHER_API_KEY
    },
    public: {
      siteUrl: process.env.NUXT_SITE_URL || 'https://teshanecrawford.com',
      NUXT_WEATHER_API_KEY: process.env.NUXT_WEATHER_API_KEY || ''
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

  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'cs'],
    },
  },

  // build: {
  //   transpile: ['shiki'],
  // },

  experimental: {
    viewTransition: true,
    componentIslands: true,
    payloadExtraction: true,
  }
})