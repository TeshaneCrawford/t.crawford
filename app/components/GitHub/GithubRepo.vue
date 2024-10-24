<script setup lang="ts">
import type { Repo } from '~~/types/project'

defineProps<{
  repo: Repo
}>()
</script>

<template>
  <article
    b="~ black op-10"
    dark-b="white op-10"
    trans rounded-lg p-4 text-xs shadow-sm
    hover="bg-neutral bg-op-3"
    dark-hover="bg-white bg-op-3"
    class="bg-black/2 dark:bg-white/2"
  >
    <a
      :href="repo.homepage || repo.html_url"
      target="_blank"
      flex="~ col gap-3"
      h-full
      decoration-none
    >
      <!-- Header with repo name and status -->
      <div flex="~ gap-2" items-center justify-between>
        <h5 m0 flex="~ gap-2" items-center text-sm>
          <Icon name="hugeicons-repository"   h-5 w-5  />
          <span class="font-medium">{{ repo.name }}</span>
        </h5>
        <span
          inline-flex
          items-center
          fw-normal
          important-rounded-full
          :class="repo.is_template ? 'dark-badge-xs-yellow badge-xs-blue' : 'dark-badge-xs-teal badge-xs-red'"
        >
          {{ repo.private ? 'Private' : 'Public' }}
          {{ repo.is_template ? 'Template' : '' }}
        </span>
      </div>

      <!-- Description -->
      <p m0 flex-1>
        {{ repo.description }}
      </p>

      <!-- Footer with metadata -->
      <div flex items-center justify-between gap-4 >
        <!-- Language -->
        <div flex items-center gap-4>
          <span
            v-if="repo.language"
            flex
            items-center
            gap-2
          >
            <div
              h-3
              w-3
              rounded-full
              :style="{ backgroundColor: repo.language ? getLanguageColor(repo.language) : '' }"
            />
            {{ repo.language }}
          </span>
        </div>

        <!-- Stats -->
        <div flex items-center gap-4>
          <a
            v-if="repo.stargazers_count"
            target="_blank"
            decoration-none
            :href="`https://github.com/${repo.full_name}/stargazers`"
          >
            <span flex items-center gap-1>
              <Icon name="hugeicons-star" h-4 w-4 />
              {{ repo.stargazers_count }}
            </span>
          </a>
          <a
            v-if="repo.forks_count"
            target="_blank"
            :href="`https://github.com/${repo.full_name}/network/members`"
            flex
            items-center
            gap-1
            decoration-none
          >
            <Icon name="hugeicons-git-fork" h-4 w-4 />
            {{ repo.forks_count }}
          </a>
        </div>
      </div>
    </a>
  </article>
</template>

<style scoped>
.important-rounded-full {
  border-radius: 9999px !important;
}
</style>