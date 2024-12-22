<script lang='ts' setup>
import { useTitle } from '@vueuse/core'
import type { Repo } from '~~/types/project'

const activeTab = ref('github')
const tabs = [
  { label: 'GitHub Projects', id: 'github' },
  { label: 'Showcase Projects', id: 'showcase' },
]

const { data: repoGroups, status } = useFetch<Record<string, Repo[]>>('/api/github-repos')
const isLoading = computed(() => status.value === 'pending')

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
})

useSeoMetaConfig({
  description: 'Check out my latest software projects and contributions',
})

defineOgImageComponent('PageOg', {
  link: '/projects',
})
</script>

<template>
  <div>
    <AppHeading
      title="Portfolio of my Projects"
      description="Check out my latest software projects and contributions. Here are some of the projects I've worked on."
    />

    <AppTabs
      v-model="activeTab"
      :tabs="tabs"
    >
      <template #default="{ activeTab: currentTab }">
        <div v-if="currentTab === 'github'">
          <GitHubRepoPanel
            v-for="(repos, label) in (repoGroups || {})"
            :key="label"
            :label="label"
            :data="repos"
            :loading="isLoading"
          />
        </div>
        <div v-else-if="currentTab === 'showcase'" class="space-y-4">
          <!-- Add showcase projects content here -->
          <p>showcase projects coming soon...</p>
        </div>
      </template>
    </AppTabs>

    <br>
    <BackButton />
  </div>
</template>
