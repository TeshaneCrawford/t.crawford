// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
    '@nuxthub/core',
  ],

  $development: {
    runtimeConfig: {
      public: {
        website: {
          url: 'http://localhost:3000',
        },
      },
    },
  },
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#000000', media: '(prefers-color-scheme: dark)' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'antialiased',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      title: 'Teshane Crawford',
    },
    pageTransition: false,
    layoutTransition: false,
    keepalive: true,
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/prose.css',
    '@unocss/reset/tailwind.css',
    '@/assets/css/font.css',
    '@/assets/css/transitions.css',
  ],

  site: {
    url: 'https://teshanecrawford.com',
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },

  content: {
    database: {
      type: 'd1',
      binding: 'DB',
    },
    studio: {
      enabled: true,
    },
    build: {
      pathMeta: {
        forceLeadingSlash: true,
      },
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        highlight: {
          theme: {
            default: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          langs: [
            'bash',
            'css',
            'diff',
            'html',
            'javascript',
            'js',
            'json',
            'markdown',
            'md',
            'powershell',
            'scss',
            'shell',
            'ts',
            'tsx',
            'typescript',
            'vue',
            'xml',
            'yaml',
            'cs',
          ],
        },
      },
    },
  },

  runtimeConfig: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudSecret: process.env.NUXT_CLOUD_SECRET_KEY,
    cloudKey: process.env.NUXT_CLOUD_API_KEY,

    private: {
    },

    public: {
      siteUrl: process.env.NUXT_SITE_URL || 'https://teshanecrawford.com',
      NUXT_WEATHER_API_KEY: process.env.NUXT_WEATHER_API_KEY || '',
      siteName: process.env.NUXT_SITE_NAME || 'Teshane Crawford',
    },
  },

  routeRules: {
    '/blog': {
      isr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24, // 24 hours
        staleMaxAge: 60 * 60, // 1 hour
        swr: true,
      },
    },
    '/blog/**': {
      isr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        staleMaxAge: 60 * 60 * 24, // 24 hours
        swr: true,
      },
    },
    '/projects': {
      isr: true,
      prerender: true,
      cache: {
        maxAge: 60 * 60,
        swr: true,
      },
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    },
    '/photos': {
      prerender: true,
      isr: true,
      cache: {
        maxAge: 60 * 60 * 24,
        staleMaxAge: 60 * 60,
        swr: true,
      },
    },
    '/photos/*': {
      prerender: true,
      isr: true,
      cache: {
        maxAge: 60 * 60 * 24 * 7,
        swr: true,
      },
    },
    '/uses': {
      prerender: true,
      static: true,
    },
    '/about': {
      prerender: true,
      static: true,
    },
  }, future: {
    compatibilityVersion: 4,
  },

  experimental: {
    viewTransition: true,
    componentIslands: true,
    payloadExtraction: true,
  },
  compatibilityDate: '2024-04-03',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/rss.xml', '/projects', '/photos', '/uses', '/about', '/blog', '/blog/**'],
      failOnError: false,
    },
    cloudflare: {
      pages: {
        routes: {
          exclude: [
            '/blog/**',
            '/photos/**',
          ],
        },
      },
    },
    storage: {
      'content-cache': {
        driver: 'memory',
        ttl: 60 * 60 * 24, // 24 hours
      },
    },
    routeRules: {
      '/blog/**': {
        prerender: true,
        isr: true,
        cache: {
          maxAge: 60 * 60 * 24 * 7, // 7 days
          staleMaxAge: 60 * 60 * 24, // 24 hours
          swr: true,
        },
      },
    },
  },

  hub: {
    cache: true,
    database: true,
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

  typescript: {
    typeCheck: true,
    strict: true,
    shim: true,
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
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
        dpr: 'auto',
      },
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
          quality: 'auto:best',
        },
      },
    },
  },

  ogImage: {
    zeroRuntime: true,
    fonts: [
      'DM Sans:400',
      'DM Sans:600',
      'DM Mono:400',
    ],
  },
})
