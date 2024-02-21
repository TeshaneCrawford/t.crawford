<script setup lang="ts">

useHead({
  titleTemplate: title => title ? `${title} . Teshane Crawford` : 'Teshane Crawford: Software Engineer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" }

  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogSiteName: 'Teshane Crawford',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterSite: '_D_Shybrid'
})
</script>

<template>
  <body class="font-sans text-gray-700 antialiased dark:text-gray-200">
    <NuxtPage />
  </body>
</template>
