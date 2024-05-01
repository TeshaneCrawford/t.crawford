<script lang="ts" setup>
interface ProjectCard {
  title: string
  description: string
  // image: string
  link: string
  source: string
  tags: string[]
}

defineProps<{
  card: ProjectCard;
}>();
</script>

<template>
  <div>
    <div>
      <!-- <NuxtImg :src="card.image" alt="project" class="w-full h-48 object-cover" /> -->
      <!-- <span>{{ card.tags }}</span> -->
      <h3 class="text-xl font-bold mt-4">{{ card.title }}</h3>
    </div>
    <div>
      <p>{{ card.description }}</p>
    </div>
    <div>
      <ProjectTagList :tags="card.tags" />
      <NuxtLink :to="card.link" target="_blank" class="btn btn-primary">
        <Icon name="i-ri-link" class="mr-2" />
        <span>Demo</span>
      </NuxtLink>
      <NuxtLink :to="card.source" target="_blank" class="btn btn-secondary">
        <Icon name="i-ri-github-fill" class="mr-2" />
        <span>Source</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
