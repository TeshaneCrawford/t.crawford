<script setup lang="ts">
import type { BlogPost } from '~~/types/content'

interface Props {
  prev?: BlogPost | null
  next?: BlogPost | null
}

defineProps<Props>()

const formatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const formatDate = (date?: string) => {
  if (!date) return ''
  return formatter.format(new Date(date))
}

const getPrimaryTag = (tags?: string[]) => {
  return tags?.[0] || 'Article'
}
</script>

<template>
  <nav class="mt-12 flex flex-col gap-8">
    <!-- Article Grid Navigation -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <!-- Previous Article -->
      <div
        v-if="prev"
        class="group relative rounded-sm bg-black/2 p-6 transition-all duration-300 ease-in-out dark:bg-white/3 hover:bg-black/3 dark:hover:bg-white/4"
      >
        <div class="absolute inset-0 border border-neutral-2 rounded-sm transition-colors duration-300 dark:border-neutral-8 group-hover:border-neutral-2 hover:border-dashed dark:group-hover:border-neutral-8" />
        <div class="relative">
          <span class="mb-2 inline-flex items-center text-sm text-neutral-500 dark:text-neutral-4">
            <span class="i-hugeicons:arrow-left-02 mr-2" />
            Previous Article
          </span>
          <NuxtLink :to="prev._path" class="group block">
            <span class="text-primary-600 mb-2 block text-xs tracking-wider uppercase dark:text-neutral-5">
              {{ getPrimaryTag(prev.tags) }}
            </span>
            <h3 class="group-hover:text-primary-600 mb-2 text-lg text-neutral-800 font-semibold transition-colors dark:text-neutral-1">
              {{ prev.title }}
            </h3>
            <p v-if="prev.description" class="line-clamp-2 mb-2 text-sm text-neutral-600 dark:text-neutral-5">
              {{ prev.description }}
            </p>
            <div class="flex items-center gap-3 text-sm text-neutral-500">
              <span v-if="prev.date">{{ formatDate(prev.date) }}</span>
              <span v-if="prev.readingTime" class="flex items-center">
                <span class="i-hugeicons:time-04 mr-1" />
                {{ prev.readingTime }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Next Article -->
      <div
        v-if="next"
        class="group relative rounded-sm bg-black/2 p-6 transition-all duration-300 ease-in-out dark:bg-white/3 hover:bg-black/3 dark:hover:bg-white/4"
      >
        <div class="absolute inset-0 border border-neutral-2 rounded-sm transition-colors duration-300 dark:border-neutral-8 group-hover:border-neutral-2 hover:border-dashed dark:group-hover:border-neutral-8" />
        <div class="relative">
          <span class="mb-2 w-full inline-flex items-center justify-end text-sm text-neutral-500 dark:text-neutral-4">
            Next Article
            <span class="i-hugeicons:arrow-right-02 ml-2" />
          </span>
          <NuxtLink :to="next._path" class="group block">
            <span class="text-primary-600 mb-2 block text-xs tracking-wider uppercase">
              {{ getPrimaryTag(next.tags) }}
            </span>
            <h3 class="group-hover:text-primary-600 mb-2 text-lg text-neutral-800 font-semibold transition-colors dark:text-neutral-1">
              {{ next.title }}
            </h3>
            <p v-if="next.description" class="line-clamp-2 mb-2 text-sm text-neutral-600 dark:text-neutral-5">
              {{ next.description }}
            </p>
            <div class="flex items-center gap-3 text-sm text-neutral-500">
              <span v-if="next.date">{{ formatDate(next.date) }}</span>
              <span v-if="next.readingTime" class="flex items-center">
                <span class="i-hugeicons:time-04 mr-1" />
                {{ next.readingTime }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Back to Blog Link -->
    <div class="flex justify-center">
      <NuxtLink
        to="/blog"
        class="group inline-flex items-center gap-2 border border-neutral-2 rounded-sm bg-black/2 px-4 py-2 text-neutral-700 transition-all duration-300 dark:border-neutral-8 dark:bg-white/3 hover:bg-black/3 dark:text-neutral-3 dark:hover:bg-white/4"
      >
        <span class="i-hugeicons:folder-library text-lg transition-transform group-hover:-translate-y-0.5" />
        View All Articles
      </NuxtLink>
    </div>
  </nav>
</template>
