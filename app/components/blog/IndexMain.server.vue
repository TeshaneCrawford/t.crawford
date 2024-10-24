<script setup lang="ts">
import { computed } from 'vue'

interface BlogEntry {
  title?: string
  date: string
  _path: string
  description?: string
  tags?: string[]
  authors?: Array<{
    name: string
    picture?: string
  }>
  path?: string
  slug?: string
}

const entries = await queryContent('/blog')
  .only(['title', 'date', '_path', 'description', 'tags', 'authors'])
  .find()
  .then(result => {
    return (result as BlogEntry[])
      .map(e => ({
        ...e,
        path: e._path,
        slug: e._path.split('/').pop() || '',
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })

const getViewTransitionName = computed(() => (slug: string) => `article-${slug}`)
</script>

<template>
  <section
    class="grid grid-cols-1 gap-6 md:grid-cols-2"
    aria-label="Blog post list"
  >
    <NuxtLink
          v-for="entry in entries"
          :key="entry._path"
          :to="entry.path"
          class="group"
          :style="{ viewTransitionName: getViewTransitionName(entry.slug) }"
          :aria-label="`Read ${entry.title || 'Untitled post'}`"
        >
          <article
            class="h-full overflow-hidden border border-neutral-2 rounded-md bg-black/2 transition-shadow duration-300 dark:border-neutral-8 hover:border-dashed dark:bg-white/3"
            role="article"
          >
            <div class="p-6">
              <div
              class="mb-3 flex gap-2"
              aria-label="Post categories"
              >
                <span
                  v-for="tag in entry.tags"
                  :key="tag"
                  class="badge-xs-zinc dark:badge-xs-zinc rounded-full dark:text-neutral-300"
                  role="tag"
                >
                  {{ tag }}
                </span>
              </div>
              <h2 class="mb-2 text-lg transition-colors dark:text-neutral-4 dark:group-hover:text-neutral-3">
                {{ entry.title || 'Untitled post' }}
              </h2>
              <p class="line-clamp-2 mb-4 text-sm text-neutral-600">
                {{ entry.description }}
              </p>
              <div class="flex items-center justify-between text-sm text-neutral-500">
                <div class="flex items-center gap-2">
                  <img
                    v-if="entry.authors?.[0]?.picture"
                    :src="entry.authors[0].picture"
                    :alt="`Profile picture of ${entry.authors[0].name}`"
                    class="h-6 w-6 rounded-full"
                    loading="lazy"
                  >
                  <span>{{ entry.authors?.[0]?.name || 'Anonymous' }}</span>
                </div>
                <dl
            v-if="entry.date"
            class="text-muted text-sm leading-normal"
          >
            <dt class="sr-only">
              Published
            </dt>
            <dd class="">
              <NuxtTime
                :datetime="entry.date"
                day="numeric"
                month="long"
                year="numeric"
              />
            </dd>
          </dl>
              </div>
            </div>
          </article>
        </NuxtLink>
  </section>
</template>

<style>
/* Ensures animations respect user preferences */
@media (prefers-reduced-motion: reduce) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none !important;
  }
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

::view-transition-old(root) {
  animation: fade-out 0.5s ease-in-out;
}

::view-transition-new(root) {
  animation: fade-in 0.5s ease-in-out;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
