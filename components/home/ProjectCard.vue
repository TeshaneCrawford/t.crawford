<script lang="ts" setup>
import type { ProjectCard } from '~/types/project';

defineProps<{
  card: ProjectCard;
}>();
</script>

<template>
  <UCard>
    <template #header>
      <!-- <NuxtImg :src="card.image" alt="project" class="w-full h-48 object-cover" /> -->
      <span>{{ card.tools }}</span>
      <h3 class="text-xl font-bold mt-4">{{ card.title }}</h3>
    </template>
    <template #default>
      <p>{{ card.description }}</p>
    </template>
    <template #footer>
      <NuxtLink :to="card.link" target="_blank" class="btn btn-primary">View Demo</NuxtLink>
      <NuxtLink :to="card.source" target="_blank" class="btn btn-secondary">View Source</NuxtLink>
    </template>
  </UCard>
</template>

<style scoped></style>
