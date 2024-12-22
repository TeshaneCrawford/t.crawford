<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const baseUrl = runtimeConfig.public.siteUrl || 'https://teshanecrawford.com'

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => title ? `${title} - Teshane Crawford` : 'Teshane Crawford - Software Engineer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
    { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'canonical', href: `${baseUrl}${route.path}` },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

// Enhanced SEO meta tags
useSeoMeta({
  ogSiteName: 'Teshane Crawford',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '@TeshaneCrawford',
  twitterCreator: '@TeshaneCrawford',
  author: 'Teshane Crawford',
  publisher: 'Teshane Crawford',
})

// Add JSON-LD structured data
useServerHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Teshane Crawford',
        'jobTitle': 'Software Engineer',
        'url': baseUrl,
        'sameAs': [
          'https://twitter.com/TeshaneCrawford',
        ],
      }),
    },
  ],
})
</script>

<template>
  <body class="font-sans antialiased">
    <NuxtLayout>
      <NuxtPage />
      <BackgroundCanvas />
    </NuxtLayout>
  </body>
</template>
