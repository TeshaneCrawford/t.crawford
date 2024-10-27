<script lang='ts' setup>
import { useTitle } from '@vueuse/core'
import type { Repo } from '~~/types/project';


const { data: repoGroups } = useFetch<Record<string, Repo[]>>('/api/github-repos')


useTitle('Projects')
useHead({
    title: 'Projects',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'List of projects that I am proud of.',
        },
        {
            hid: 'keywords',
            name: 'keywords',
            content: 'projects, github, open source, vue, nuxt, angular, react, nest, node, javascript, typescript, c#, csharp, dotnet, .net, asp.net, asp.net core, kotlin, android',
        },
    ],
})

definePageMeta({
  title: 'Projects',
  alias: ['/projects'],
});

useSeoMetaConfig({
  description: 'Check out my latest software projects and contributions'
});

defineOgImageComponent('PageOg', {
  link: '/projects',
});
</script>

<template>
  <div>
    <AppHeading
    title="Portfolio of my Projects"
    description="Check out my latest software projects and contributions. Here are some of the projects I've worked on."
  >
  <GitHubRepoPanel
        v-for="(repos, label) in repoGroups"
        :key="label"
        :label="label"
        :data="repos"
      />
  </AppHeading>
    <br>
    <BackButton />
  </div>
</template>