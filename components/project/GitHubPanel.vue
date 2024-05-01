<script setup lang="ts">
import type { Repo } from '~/types/project';

defineProps<{
    data: Repo[]
    label: string
}>()
</script>

<template>
  <div v-if="data.length">
    <h4>{{ label }}</h4>
    <div>
      <ProjectGitHubRepo v-for="repo in data" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>

<style scoped></style>
