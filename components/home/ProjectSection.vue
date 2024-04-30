<script lang="ts" setup>
export interface ProjectCard {
  title: string
  description: string
  // image: string
  link: string
  source: string
  tags: string[]
}

defineProps<{
  projecttitle?: string;
  cards: ProjectCard[];
}>();


</script>

<template>
      <HomeSection
      :title="projecttitle || 'Projects'"
    >
    <HomeProjectCard v-for="card in cards" :key="card.title" :card="card" />
  </HomeSection>
</template>

<style scoped></style>
