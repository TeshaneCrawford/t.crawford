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
  <article>
    <NuxtLink :to="repo.homepage || repo.html_url" target="_blank">
      <h5>
        <Icon name="i-ri-git-repository-line" />
        <span>{{ repo.name }}</span>
        <span
          class="inline-block fw-normal important-rounded-full"
          :class="repo.is_template ? 'dark-badge-xs-yellow badge-xs-blue' : 'dark-badge-xs-teal badge-xs-red'"
        >
          {{ repo.private ? 'Private' : 'Public' }}
          {{ repo.is_template ? 'Template' : '' }}
        </span>
      </h5>
      <p>{{ repo.description }}</p>
      <p>
        <span v-if="repo.language">
          <i
            class="h-3 w-3"
            :style="{ backgroundColor: repo.language ? getLanguageColor(repo.language) : '' }"
          />
          {{ repo.language }}
        </span>
        <NuxtLink
          v-if="repo.stargazers_count"
          target="_blank"
          class="decoration-inherit"
          :to="`https://github.com/${repo.full_name}/stargazers`"
        >
          <span v-if="repo.stargazers_count" class="gap-1">
            <Icon name="i-ri-star-line" />
            {{ repo.stargazers_count }}
          </span>
        </NuxtLink>
        <NuxtLink
          v-if="repo.forks_count"
          target="_blank"
          :to="`https://github.com/${repo.full_name}/network/members`"
          class="fsc gap-1 decoration-inherit"
        >
          <Icon name="i-ri-git-fork-line" />
          {{ repo.forks_count }}
        </NuxtLink>
      </p>
    </NuxtLink>
  </article>
</template>

<style scoped></style>
