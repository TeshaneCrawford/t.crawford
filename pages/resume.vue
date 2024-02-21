<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

const { data: page } = await useAsyncData('index', () => queryContent('/utils/_resume.json').findOne())

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
    <div v-for="(res, index) in resumes" :key="index" :resume="res">
      <PageHeader title="Resume" description="A timeline of my qualifications and achievements." />
      <main font-serif class="border p2">
        <header>
          <h1 class="text-center text-2xl">
            {{ resume.header.title }}
          </h1>
          <h3 class="text-center">
            {{ resume.header.subtitle }}
          </h3>
          <h5 class="text-center">
            Phone: {{ resume.header.phone }} <span mr-4 /> Email: {{ resume.header.email }}
          </h5>
          <p text-center>
            <span v-for="link in resume.header.links" :key="link">
              <NuxtLink :to="link.url" target="_blank">
                <icon v-if="link.icons" :name="link.icons" mr-1 h-1.1em w-1.1em pb-1 />
                {{ link.name }}
              </NuxtLink>
              <span mr-4 />
            </span>
          </p>
        </header>
        <section>
          <h3 hover-op-90 class="pl-2">
            {{ resume.summary.title }}
          </h3>
          <h6 class="pl-2 font-500">
            {{ resume.summary.content }}
          </h6>
          <ul pl-6>
            <li v-for="item in resume.summary.bullets" :key="item" list-none>
              <p><i i-octicon-check-16 mr-1 />{{ item }}</p>
            </li>
          </ul>
        </section>
        <section>
          <h3 hover-op-90 class="pl-2">
            {{ resume.experience.title }}
          </h3>
          <div v-for="job in resume.experience.jobs" :key="job.id">
            <h5 class="pl-2">
              {{ job.title }}
            </h5>
            <h6 class="pl-2 font-500">
              {{ job.company }}
            </h6>
            <h6 class="pl-2 font-500">
              {{ job.location }}
            </h6>
            <h6 class="pl-2 font-500">
              {{ job.date }}
            </h6>
            <div>
              <p class="pl-2">
                {{ job.description.title }}: {{ job.description.content }}
              </p>
            </div>
            <ul pl-6>
              <li v-for="item in job.description.bullets" :key="item" list-none>
                <p><i i-mdi-circle-small mr-1 />{{ item }}</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h3 hover-op-90 class="pl-2">
            {{ resume.skills.title }}
          </h3>
          <h6 class="pl-2">
            {{ resume.skills.languages.content }}
          </h6>
          <ul pl-6>
            <li v-for="item in resume.skills.languages.bullets" :key="item" list-none>
              <p><i i-octicon-code-16 mr-2 />{{ item }}</p>
            </li>
          </ul>
          <h6 class="pl-2">
            {{ resume.skills.frameworks.content }}
          </h6>
          <ul pl-6>
            <li v-for="item in resume.skills.frameworks.bullets" :key="item" list-none>
              <p><i i-octicon-command-palette-16 mr-2 />{{ item }}</p>
            </li>
          </ul>
          <h6 class="pl-2">
            {{ resume.skills.databases.content }}
          </h6>
          <ul pl-6>
            <li v-for="item in resume.skills.databases.bullets" :key="item" list-none>
              <p><i i-octicon-database-16 mr-2 />{{ item }}</p>
            </li>
          </ul>
          <h6 class="pl-2">
            {{ resume.skills.cloud.content }}
          </h6>
          <ul pl-6>
            <li v-for="item in resume.skills.cloud.bullets" :key="item" list-none>
              <p><i i-octicon-cloud-16 mr-2 />{{ item }}</p>
            </li>
          </ul>
          <h6 class="pl-2">
            {{ resume.skills.tools.content }}
          </h6>
          <ul pl-6>
            <li v-for="item in resume.skills.tools.bullets" :key="item" list-none>
              <p><i i-octicon-terminal-16 mr-2 />{{ item }}</p>
            </li>
          </ul>
        </section>
        <section>
          <h3 hover-op-90 class="pl-2">
            {{ resume.education.title }}
          </h3>
          <div>
            <h6 class="pl-2 font-500">
              {{ resume.education.schools.name }}
            </h6>
            <h6 class="pl-2 font-500">
              {{ resume.education.schools.location }}
            </h6>
            <h6 class="pl-2 font-500">
              {{ resume.education.schools.degree }}
            </h6>
            <h6 class="pl-2 font-500">
              {{ resume.education.schools.date }}
            </h6>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
