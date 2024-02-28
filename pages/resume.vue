<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

// const { data: page } = await useAsyncData('index', () => queryContent('/utils/_resume.json').findOne())

import { resumes } from '@/utils/_resume.json'

defineProps({
  resume: {
    type: Object,
    required: true,
  },
});

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
  <div class="ma prose">
    <div>
      <PageHeader title="Resume" description="A timeline of my qualifications and achievements." />
      <main font-serif class="border p2">
        <ContentList v-slot="{ list }" path="/resume">
          <ContentQuery
            v-for="item in list"
            :key="item._path"
            v-slot="{ data }"
            :path="item._path"
            find="one"
          >
            <ContentRenderer>
              <ContentRendererMarkdown :value="data" />
            </ContentRenderer>
          </ContentQuery>
        </ContentList>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
