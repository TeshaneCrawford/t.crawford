<script setup lang="ts">
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => title ? `${title} - Teshane Crawford` : 'Teshane Crawford: Software Engineer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
    { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
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
  <body class="font-sans antialiased">
    <NuxtLayout>
      <NuxtPage />
      <BackgroundCanvas />
    </NuxtLayout>
    <!-- <BackgroundCanvas /> -->
  </body>
  <!-- <BackgroundCanvas /> -->
</template>
<!--
<body class="font-sans antialiased">
  <DynamicBackground>
  <NuxtLayout>
    <div>Current time: {{ formattedTime }}</div>
    <NuxtPage />
  </NuxtLayout>
</DynamicBackground>
</body> -->