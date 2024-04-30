<script setup lang="ts">
const github = {
  handle: 'TeshaneCrawford',
  stars: 165,
  contribution: 2153,
  pr: 393,
  issue: 69,
}

interface Projects {
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  language: string
}

const { data: projects } = useFetch<Array<Projects>>(`https://api.github.com/users/${github.handle}/repos`)

const formattedProjects = computed(() => {
  const data = projects.value?.sort((a, b) => b.stargazers_count - a.stargazers_count)
  return data?.filter((el, ind) => ind < 50)
})
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      GitHub
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <template v-for="project in formattedProjects" :key="project.name">
        <ProjectGitHubRepo
          :name="project.full_name"
          :description="project.description"
          :star="project.stargazers_count"
          :link="project.html_url"
          :language="project.language"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>
