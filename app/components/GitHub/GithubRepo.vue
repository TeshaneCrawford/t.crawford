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
    trans rounded-md p-4 text-xs shadow-sm
    hover="bg-gray bg-op-3"
    dark-hover="bg-white bg-op-3"
    class="matrix-pattern bg-black/1 dark:bg-white/2"
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
          <Icon name="i-hugeicons-repository" h-5 w-5 />
          <span class="font-medium">{{ repo.name }}</span>
        </h5>
        <span
          inline-flex
          items-center
          fw-normal
          important-rounded-sm
          :class="repo.is_template ? 'dark-badge-xs-yellow badge-xs-blue' : 'dark-badge-xs-teal badge-xs-crimson'"
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
              <Icon name="i-hugeicons-star" h-4 w-4 />
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
            <Icon name="i-hugeicons-git-fork" h-4 w-4 />
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

.matrix-pattern {
  position: relative;
  overflow: hidden;
  --dot-color: rgba(0, 0, 0, 0.1);
}

:root.dark .matrix-pattern {
  --dot-color: rgba(255, 255, 255, 0.1);
}

.matrix-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image:
    radial-gradient(var(--dot-color) 1.5px, transparent 1.5px);
  background-size: 16px 16px;
  opacity: 0.5;
}
</style>
