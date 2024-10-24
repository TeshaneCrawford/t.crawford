<script setup lang="ts">
/* eslint-disable vue/require-v-for-key */
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: null,
  },
  tags: {
    type: Array as () => string[],
    default: () => [],
  },
})
</script>

<template>
  <article class="h-full w-full flex flex-col items-start justify-end bg-[#1a202c] px-16 py-24 text-white font-sans">
    <header class="text-7xl">
      {{ title }}
    </header>
    <div class="mt-10 flex flex-col text-5xl text-[#e2e8f0] uppercase">
      <div
        v-if="date"
        class="flex flex-row"
      >
        <div class="mr-6">
          Published
        </div>
        <div class="mx-8 font-bold">
          {{ date }}
        </div>
      </div>
      <div
        v-if="tags?.length"
        class="mt-4 flex flex-row"
      >
        <div class="mr-6">
          Tags
        </div>
        <div class="mx-8 flex flex-row gap-4 font-bold">
          <template v-for="(tag, index) in tags">
            <span v-if="index > 0">•</span>
            <span>{{ tag }}</span>
          </template>
        </div>
      </div>
    </div>
  </article>
</template>