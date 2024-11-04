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

  const selectedTags = ref<string[]>([])

const filteredEntries = computed(() => {
  if (selectedTags.value.length === 0) {
    return entries
  }
  return entries.filter((entry) =>
    selectedTags.value.every((tag) => entry.tags?.includes(tag))
  )
})

const toggleTag = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index === -1) {
    selectedTags.value.push(tag)
  } else {
    selectedTags.value.splice(index, 1)
  }
}

const allTags = computed(() => {
  const tags: string[] = []
  entries.forEach((entry) => {
    if (entry.tags) {
      tags.push(...entry.tags)
    }
  })
  return [...new Set(tags)]
})

const getViewTransitionName = computed(() => (slug: string) => `article-${slug}`)
</script>

<template>
  <div>
    <div class="mb-6">
    <h3 class="mb-2 text-lg font-bold dark:text-neutral-4">
      Tags
    </h3>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="tag in allTags"
        :key="tag"
        :class="[
          'badge-xs-zinc dark:badge-xs-zinc important-rounded-sm important-px-3 important-py-1 transition-colors',
          selectedTags.includes(tag)
            ? 'bg-neutral-2 dark:bg-neutral-7 text-neutral-700 dark:text-neutral-300'
            : 'bg-neutral-1 dark:bg-neutral-8 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-2 dark:hover:bg-neutral-7'
        ]"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
  </div>
    <section
    class="grid grid-cols-1 gap-6 md:grid-cols-2"
    aria-label="Blog post list"
  >
    <NuxtLink
          v-for="entry in filteredEntries"
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
                  class="badge-xs-zinc dark:badge-xs-zinc important-rounded-sm dark:text-neutral-300"
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
                    decoding="async"
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
  </div>
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
