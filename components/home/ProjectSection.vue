<script lang="ts" setup>
import type { ProjectCard } from '~/types/project';

defineProps<{
  subtitle?: string;
  cards: ProjectCard[];
}>();


</script>

<template>
      <HomeSection
      :title="subtitle || 'Projects'"
    >
    <HomeProjectCard v-for="card in cards" :key="card.title" :card="card" />
  </HomeSection>
</template>

<style scoped></style>
