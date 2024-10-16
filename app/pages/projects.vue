<script lang='ts' setup>
import { useTitle } from '@vueuse/core'

const { data: repoGroup } = useFetch('/api/repos')

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
  <!-- <NuxtLayout name="default"> -->
  <div>
    <PageHeader title="Projects" description="List of projects that I am proud of." />
    <GitHubRepoPanel v-for="(repos, key) in repoGroup" :key="key.toString()" :label="key.toString()" :data="repos" />
    <br>
    <BackButton />
  </div>
  <!-- </NuxtLayout> -->
</template>