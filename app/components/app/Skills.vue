<script setup lang="ts">
const skills = [
  {
    title: 'C#',
    icon: 'i-catppuccin:csharp',
  },
  {
    title: 'JavaScript',
    icon: 'i-catppuccin:javascript',
  },
  {
    title: 'TypeScript',
    icon: 'i-catppuccin:typescript',
  },
  {
    title: 'Vue.js',
    icon: 'i-catppuccin:vue',
  },
  {
    title: 'Nuxt',
    icon: 'i-catppuccin:nuxt',
  },
  {
    title: 'React',
    icon: 'i-catppuccin:typescript-react',
  },
  {
    title: 'Angular',
    icon: 'i-catppuccin:angular',
  },
  {
    title: 'Azure',
    icon: 'i-catppuccin:azure-pipelines',
  },
  {
    title: 'SQL',
    icon: 'i-catppuccin:database',
  },
  {
    title: 'CSS',
    icon: 'i-catppuccin:css',
  },
  {
    title: 'Git',
    icon: 'i-catppuccin:git',
  },
  {
    title: 'Docker',
    icon: 'i-catppuccin:docker',
  },
]
</script>

<template>
  <section class="not-prose flex flex-col gap-y-2">
    <div class="inline-flex flex-wrap gap-2">
      <div
        v-for="skill in skills"
        :key="skill.icon"
        class="inline-flex items-center gap-x-1.5 border border-gray-6 badge-lg-gray py-1.5 text-xs"
      >
        <span class="flex justify-center gap-2">
          <icon
            :name="skill.icon"
            class="h-4 w-4"
          />
          <p class="font-dank">{{ skill.title }}</p>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
