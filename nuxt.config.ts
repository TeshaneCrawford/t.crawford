import { cookieConfig } from './config/cookie'
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
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@vite-pwa/nuxt",
    "@nuxt/image",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/i18n",
    // "@nuxtjs/turnstile"
  ],

  css: ['~/assets/scss/main.scss'],

  site: {
    url: process.env.NUXT_SITE_URL || 'https://teshanecrawford.live',
    identity: {
      type: 'Person',
    },
    twitter: '@_d_shybrid',
  },

  runtimeConfig: {
    // turnstile: {
		// 	secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
		// },
    public: {
      trailingSlash: true,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
      siteName: 'Teshane Crawford',
      siteDescription: 'Teshane Crawford is a software engineer based in New York City.',
      language: 'en',
    },
    private: {
      resendApiKey: process.env.NUXT_PRIVATE_RESEND_API_KEY,
    }
  },

	// @nuxtjs/turnstile
	// turnstile: {
	// 	siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
	// },

  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    baseUrl: '/',
    locales: ['en', 'fr'],
    vueI18n: '~/i18n.config.ts',
  },

  content: {
    highlight: {
      theme: {
        default: 'material-theme-lighter',
        dark: 'material-theme-palenight'
      },
      langs: [
        'js',
        'ts',
        'c#',
        'csharp',
        'cs',
        'python',
        'py',
        'java',
        'vue',
        'kotlin',
        'jsx',
        'tsx',
        'css',
        'scss',
        'sass',
        'html',
        'html-derivative',
        'xml',
        'bash',
        'md',
        'mdc',
        'json'
      ]
    },
    locales: ['en', 'fr'],
    defaultLocale: 'en',
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
      templateParams: {
        separator: '|',
      },
    },
  },

  pwa,

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      // routes: ['/'],
    }
  },

  sitemap: {
    autoLastmod: true,
    exclude: ['/data-protection', '/imprint', '/privacy-policy', '/terms-and-conditions'],
  },

  cookieControl: cookieConfig,

  experimental: {
    typedPages: true,
    inlineRouteRules: true,
  },
})