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
  <article class="border bg-white bg-opacity-1 dark:bg-gray-600 dark:bg-opacity-0 rounded-lg p-4 text-xs shadow-sm transition hover:bg-gray-50/90 hover:bg-opacity-3 dark:hover:bg-black/10 dark:hover:bg-opacity-3">
    <NuxtLink :to="repo.homepage || repo.html_url" target="_blank" class="flex flex-col gap-3 h-full no-underline">
      <h5 class="m-0 font-semibold text-sm flex gap-1">
        <Icon name="i-ri-git-repository-line" />
        <span>{{ repo.name }}</span>
        <!-- <span :class="repo.is_template ? ' badge dark:badge-success badge-primary' : 'badge dark:badge-secondary badge-accent'">
          {{ repo.private ? 'Private' : 'Public' }}
          {{ repo.is_template ? 'Template' : '' }}
        </span> -->
        <UBadge
          :color="repo.is_template ? 'cyan' : 'red'"
          variant="subtle"
        >
          {{ repo.private ? 'Private' : 'Public' }}
          {{ repo.is_template ? 'Template' : '' }}
        </UBadge>
      </h5>
      <p class="m-0 flex-1">{{ repo.description }}</p>
      <p class="m-0 flex gap-4">
        <span v-if="repo.language" class="flex gap-1">
          <div class="h-3 w-3 rounded-full" :style="{ backgroundColor: getLanguageColor(repo.language) }"/>
          {{ repo.language }}
        </span>
        <NuxtLink v-if="repo.stargazers_count" target="_blank" class="decoration-inherit" :to="`https://github.com/${repo.full_name}/stargazers`">
          <span class="flex gap-1">
            <UIcon class="icon" name="i-ri-star-line" />
            {{ repo.stargazers_count }}
          </span>
        </NuxtLink>
        <NuxtLink v-if="repo.forks_count" target="_blank" class="decoration-inherit flex gap-1" :to="`https://github.com/${repo.full_name}/network/members`">
          <UIcon name="i-ri-git-fork-line" />
          {{ repo.forks_count }}
        </NuxtLink>
      </p>
    </NuxtLink>
  </article>
</template>


<style scoped>
.icon {
  font-size: 1rem;
}
</style>
