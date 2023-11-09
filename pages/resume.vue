<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

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
  <div class="prose ma" v-for="(resume, index) in resumes" :key="index" :resume="resume">
    <PageHeader title="Resume" description="A timeline of my qualifications and achievements." />
    <main class="border">
      <header>
        <h1 class="text-2xl text-center">{{ resume.header.title }}</h1>
        <h3 class="text-center">{{ resume.header.subtitle }}</h3>
        <h5 class="text-center">Phone: {{ resume.header.phone }} <span mr-4 /> Email: {{ resume.header.email }}</h5>
        <p text-center>
          <span v-for="link in resume.header.links">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              <i v-html="link.icon" />
              {{ link.name }}
            </a>
            <span mr-4 />
          </span>
        </p>
      </header>
      <section>
        <h3 hover-op-90 class="pl-2">{{ resume.summary.title }}</h3>
        <h6 class="pl-4">{{ resume.summary.content }}</h6>
        <ul pl-6>
          <li list-none v-for="item in resume.summary.bullets" :key="item">
            <p><i i-ri-sparkling-2-fill mr-1 />{{ item }}</p>
          </li>
        </ul>
      </section>
      <section>
        <h3 hover-op-90 class="pl-2">{{ resume.experience.title }}</h3>
      </section>
    </main>
  </div>
</template>

<style scoped></style>
