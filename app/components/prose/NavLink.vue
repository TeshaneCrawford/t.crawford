<script setup lang="ts">
defineProps<{
  direction: 'previous' | 'next'
  title: string
  path: string
}>()
</script>

<template>
  <div
    class="nav-container w-full md:w-[45%]"
    :class="{
      'items-end text-right': direction === 'next',
      'items-start text-left': direction === 'previous'
    }"
  >
    <span class="nav-label mb-2 block">
      {{ direction === 'next' ? 'Next' : 'Previous' }} Article
    </span>
    <NuxtLink
      :to="`/blog/${path}`"
      class="nav-link block font-medium"
    >
      {{ title }}
    </NuxtLink>
  </div>
</template>
