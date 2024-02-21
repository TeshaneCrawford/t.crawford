<script lang='ts' setup>
import { useTitle } from '@vueuse/core'

const { data: repoGroup } = await useFetch('/api/repos')

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
</script>

<template>
  <div ma prose>
    <PageHeader title="Projects" description="List of projects that I am proud of." />
    <GitHubRepoPanel v-for="(repos, key) in repoGroup" :key="key" :label="key" :data="repos" />
    <br>
    <BackButton />
  </div>
</template>