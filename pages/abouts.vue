<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

useTitle('About')
useHead({
  title: 'About',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'A little about me',
    },
    {
      hid: 'keywords',
      name: 'keywords',
      content: 'tools, tech, github, open source, vue, nuxt, angular, react, nest, node, javascript, typescript, c#, csharp, dotnet, .net, asp.net, asp.net core, kotlin, android',
    },
  ],
})
</script>

<template>
  <!-- <NuxtLayout name="default"> -->
  <div class="ma prose">
    <PageHeader
      title="About"
      description="Get to know me more"
    />

    <br>
    <BackButton />
  </div>
  <!-- </NuxtLayout> -->
</template>

<style scoped></style>
