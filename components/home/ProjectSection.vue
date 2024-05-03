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
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <HomeProjectCard v-for="card in cards" :key="card.title" :card="card" />
    </div>
    <NuxtLink class="text-gray-800 dark:text-gray-100 font-semibold hover:underline" to="/projects">
      View all projects
    </NuxtLink>
  </HomeSection>
</template>

<style scoped></style>
