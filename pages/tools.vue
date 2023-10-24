<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

useTitle('Tools | Teshane Crawford')
useHead({
  title: 'Tools | Teshane Crawford',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'List of tech and tools I use to solve problems on a daily.',
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
    <PageHeader title="Tools"
      description="In case you're wondering what tech I use, here's a current list of the most common. This list is always changing as I grow." />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    </div>
  </div>
</template>

<style scoped></style>
