<script lang="ts" setup>
import { computed } from 'vue'

interface Author {
  name: string
  picture: string
  twitter: string
}

const props = defineProps<{
  title: string
  date?: string
  categories?: string[]
  content?: string
  authors?: Author[]
}>()

const hasMeta = computed(() => props.date || props.categories)
const hasMetaSeparator = computed(() => props.date && (props.categories || props.content))
const categoryDisplayClass = computed(() => ({
  'order-last sm:order-none w-full sm:w-auto': true,
  'sm:mx-1': props.date && props.categories
}))
</script>

<template>
  <header class="relative" :class="{ 'pt-16 sm:pt-10': props.date }">
    <div class="prose">
      <h1>{{ props.title }}</h1>
    </div>

    <div v-if="hasMeta" class="absolute left-0 top-0 text-sm text-neutral-500 font-light dark:text-neutral-400">
      <dl class="flex flex-wrap items-center gap-x-1 gap-y-2">
        <template v-if="props.date">
          <dt class="sr-only">Published at</dt>
          <dd>
            <NuxtTime :datetime="props.date" day="numeric" month="long" year="numeric" />
          </dd>
          <span v-if="hasMetaSeparator" class="hidden sm:inline">-</span>
        </template>

        <template v-if="props.content">
          <dt class="sr-only">Reading time</dt>
          <dd :class="categoryDisplayClass">
            <ProseReadingTime :content="props.content" />
          </dd>
        </template>

        <template v-if="props.categories">
          <span v-if="(props.date || props.content)" class="hidden sm:inline">-</span>
          <dt class="sr-only">Categories</dt>
          <dd class="capitalize">
            <ul class="flex items-center gap-1">
              <li
v-for="(category, index) in props.categories"
                  :key="category"
                  class="inline-block badge-xs-zinc dark-badge-xs-zinc rounded-sm fw-normal">
                <NuxtLink :to="`/categories/${category.toLowerCase()}`">
                  {{ category }}
                </NuxtLink>{{ index !== props.categories.length - 1 ? ',' : '' }}
              </li>
            </ul>
          </dd>
        </template>
      </dl>
    </div>

    <dl v-if="props.authors">
      <dt class="sr-only">
        Authors
      </dt>
      <dd>
        <ul class="mt-6 flex flex-wrap gap-4 md:gap-8">
          <li
            v-for="author in props.authors"
            :key="author.name"
          >
            <address class="flex items-center gap-2 not-italic">
              <img
                :src="author.picture"
                :alt="`Profile picture of ${author.name}`"
                width="36"
                height="36"
                class="h-9 w-9 rounded-full"
              >
              <div class="text-sm">
                <div class="text-neutral-950 font-light leading-none dark:text-neutral-50">
                  {{ author.name }}
                </div>
                <div class="mt-1">
                  <NuxtLink
                    rel="author noopener"
                    :to="`https://x.com/${author.twitter}`"
                    target="_blank"
                    class="text-neutral-500 leading-none transition ease-in dark:text-neutral-400 hover:text-neutral-950 hover:dark:text-neutral-50"
                  >
                    @{{ author.twitter }}
                  </NuxtLink>
                </div>
              </div>
            </address>
          </li>
        </ul>
      </dd>
    </dl>
  </header>
</template>

<style scoped>
header>h1:first-child {
  view-transition-name: heading;
}

header dl dt:first-of-type {
  view-transition-name: published-dt;
}

header dl dd:first-of-type {
  view-transition-name: published-dd;
}
</style>
