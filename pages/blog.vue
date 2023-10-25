<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

useTitle('Blog | Teshane Crawford')
useHead({
  title: 'Blog | Teshane Crawford',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'A list of blogs composed by me.',
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
  <div class="prose ma">
    <PageHeader title="Blog"
      description="A curated list of my composed blog" />

      <br>
    <BackButton />
  </div>
</template>

<style scoped></style>
