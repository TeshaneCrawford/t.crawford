<script setup lang="ts">
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
  <PortfolioLayout>
    <NuxtPage />
  </PortfolioLayout>
</template>
