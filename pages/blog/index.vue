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
  <!-- <NuxtLayout name="default"> -->
  <div class="ma prose">
    <PageHeader title="Blog" description="A curated list of my composed blog" />
    <div>
      <div>
        <ContentList
          v-slot="{list}"
          path="/articles"
        >
          <div v-for="article in list" :key="article._path">
            <div>
              <h2>
                <NuxtLink :to="article._path">
                  {{ article.title }}
                </NuxtLink>
              </h2>
              <p>{{ article.description }}</p>
            </div>
            <div class="text-right">
              <p>{{ article.date }}</p>
            </div>
            <div
              class="my-4 border-b-2 border-gray-200"
            />
          </div>
        </ContentList>
      </div>
    </div>

    <br>
    <BackButton />
  </div>
  <!-- </NuxtLayout> -->
</template>

<style scoped></style>