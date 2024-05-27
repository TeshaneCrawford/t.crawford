<script lang="ts" setup>
import type { Repo } from '~/types/project';

defineProps<{
  repo: Repo
}>()

// const getLanguageColor = (language: string): string => {
//   // Add your implementation here
//   return '';
// }
</script>

<template>
  <article class="bg-black bg-opacity-0 dark:bg-white dark:bg-opacity-0 rounded-lg p-4 text-xs shadow-sm transition hover:bg-gray hover:bg-opacity-3 dark:hover:bg-white dark:hover:bg-opacity-3">
    <NuxtLink :to="repo.homepage || repo.html_url" target="_blank" class="flex flex-col gap-3 h-full no-underline">
      <h5 class="m-0 font-semibold text-sm flex gap-1">
        <Icon name="i-ri-git-repository-line" />
        <span>{{ repo.name }}</span>
        <span :class="repo.is_template ? 'dark-text-yellow-500 text-blue-500' : 'dark-text-teal-500 text-red-500'">
          {{ repo.private ? 'Private' : 'Public' }}
          {{ repo.is_template ? 'Template' : '' }}
        </span>
      </h5>
      <p class="m-0 flex-1">{{ repo.description }}</p>
      <p class="m-0 flex gap-4">
        <span v-if="repo.language" class="flex gap-1">
          <div class="h-3 w-3 inline-flex rounded-full" :style="{ backgroundColor: getLanguageColor(repo.language) }"/>
          {{ repo.language }}
        </span>
        <NuxtLink v-if="repo.stargazers_count" target="_blank" class="decoration-inherit" :to="`https://github.com/${repo.full_name}/stargazers`">
          <span class="flex gap-1">
            <Icon name="i-ri-star-line" />
            {{ repo.stargazers_count }}
          </span>
        </NuxtLink>
        <NuxtLink v-if="repo.forks_count" target="_blank" class="decoration-inherit flex gap-1" :to="`https://github.com/${repo.full_name}/network/members`">
          <Icon name="i-ri-git-fork-line" />
          {{ repo.forks_count }}
        </NuxtLink>
      </p>
    </NuxtLink>
  </article>
</template>


<style scoped></style>
