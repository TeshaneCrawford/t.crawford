<script lang="ts" setup>
useSeoMeta({
  description: 'Teshane Crawford\'s personal website, where you can learn more about him, his work experience and projects.'
})

useSeoMeta({
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]'
})
</script>

<template>
  <!-- <NuxtLayout name="default"> -->
  <div class="">
    <HomeUserInfo />
  </div>
  <!-- </NuxtLayout> -->
</template>

<style scoped></style>