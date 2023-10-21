<script setup lang="ts">
import SocialIcons from './components/SocialIcons.vue';

useHead({
  titleTemplate: title => title ? `${title} . Teshane Crawford` : 'Teshane Crawford: Software Engineer',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon.png' }
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
  <body class="font-sans text-gray-700 dark:text-gray-200 antialiased">
    <AppNavbar />
  <main class="px-7 py-10 of-x-hidden">
    <NuxtPage />
  </main>
  <footer class="px-5 sm:px-7 md:px-10 text-center text-sm my-5">
    <div class="mb">
      <SocialIcons />
    </div>
    <p class="mb-2">
      <AppFooter />
    </p>
  </footer>
  </body>
</template>
