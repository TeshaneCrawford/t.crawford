<script setup lang="ts">
import type { Repo } from '~/types/project';

defineProps<{
    data: Repo[]
    label: string
}>()
</script>

<template>
  <div v-if="data.length">
    <h4 class="py-4 font-semibold">{{ label }}</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectGitHubRepo v-for="repo in data" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<style scoped></style>
