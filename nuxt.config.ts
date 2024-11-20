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
    '@nuxthq/studio',
    '@nuxthub/core'
  ],
  css: [
    '@/assets/css/main.css',
    '@unocss/reset/tailwind.css',
    '@/assets/css/font.css',
    '@/assets/css/transitions.css'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  hub: {
    cache: true,
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
    // '/photos': {
    //   prerender: true,
    //   isr: true,
    //   cache: {
    //     maxAge: 60 * 60 * 24,
    //     staleMaxAge: 60 * 60,
    //     swr: true
    //   },
    // },
    // '/photos/*': {
    //   prerender: true,
    //   isr: true,
    //   cache: {
    //     maxAge: 60 * 60 * 24 * 7,
    //     swr: true
    //   }
    // },
    '/uses': {
      prerender: true,
      static: true
    },
  },

  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
      modifiers: {
        effect: 'sharpen:100',
        quality: 'auto:best',
        format: 'webp',
        dpr: 'auto'
      }
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    domains: [
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'res.cloudinary.com',
    ],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 72,
          height: 72,
          quality: 'auto:best'
        }
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml', '/projects'],
      failOnError: false,
    },
    experimental: {
      openAPI: true
    }
  },

  runtimeConfig: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudSecret: process.env.NUXT_CLOUD_SECRET_KEY,
    cloudKey: process.env.NUXT_CLOUD_API_KEY,

    private: {
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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'antialiased'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],
      title: 'Teshane Crawford',
    },
    pageTransition: false,
    layoutTransition: false,
    keepalive: true
  },

  site: {
    url: 'https://teshanecrawford.com',
  },

  ogImage: {
    zeroRuntime: true,
    fonts: [
      'DM Sans:400',
      'DM Sans:600',
      'DM Mono:400',
    ],
  },

  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'mermaid', 'yaml', 'bash', 'cs'],
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