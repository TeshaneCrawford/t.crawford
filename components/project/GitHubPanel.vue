<script setup lang="ts">
import type { Repo } from '~/types/project';

defineProps<{
    data: Repo[]
    label: string
}>()
</script>

<template>
  <div v-if="data.length">
    <h4 class="py-4">{{ label }}</h4>
    <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4">
      <ProjectGitHubRepo v-for="repo in data" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<style scoped></style>
