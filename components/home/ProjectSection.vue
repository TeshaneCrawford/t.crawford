<script lang="ts" setup>
import type { ProjectCard } from '~/types/project';

defineProps<{
  title?: string;
  cards: ProjectCard[];
}>();
</script>

<template>
      <HomeSection
      :title="title || 'Projects'"
    >
    <HomeProjectCard v-for="card in cards" :key="card.title" :card="card" />
  </HomeSection>
</template>

<style scoped></style>
