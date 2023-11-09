<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

useTitle('Resume')
useHead({
  title: 'Resume',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'A timeline of my qualifications and achievements.',
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
    <PageHeader title="Resume" description="A timeline of my qualifications and achievements." />
  </div>
</template>

<style scoped></style>
