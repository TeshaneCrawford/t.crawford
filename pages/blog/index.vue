<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

useTitle('Blog')
useHead({
  title: 'Blog',
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

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
);
</script>

<template>
  <div class="ma prose">
    <PageHeader
      title="Blog"
      description="A curated list of my composed blog"
    />
    <ul>
      <li v-for="article in articles" :key="article._id">
        <AppArticleCard :article="article" />
      </li>
    </ul>

    <br>
    <BackButton />
  </div>
</template>

<style scoped></style>