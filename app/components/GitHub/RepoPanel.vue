<script lang='ts' setup>
import type { Repo } from '~~/types/project';

defineProps<{
    data: Repo[]
    label: string
}>()
</script>

<template>
  <div v-if="data.length"   lg:px-0 md:px-8  >
    <h3 class="mb text-xl">
      {{ label }}
    </h3>
    <div grid="~ cols-1 md:cols-2 gap-4">
      <GitHubGithubRepo v-for="repo in data" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>