<script setup lang="ts">
defineProps<{
  direction: 'previous' | 'next'
  title: string
  path: string
}>()
</script>

<template>
  <div
    class="w-full nav-container md:w-[45%]"
    :class="{
      'items-end text-right': direction === 'next',
      'items-start text-left': direction === 'previous',
    }"
  >
    <span class="mb-2 block nav-label">
      {{ direction === 'next' ? 'Next' : 'Previous' }} Article
    </span>
    <NuxtLink
      :to="`/blog/${path}`"
      class="block font-medium nav-link"
    >
      {{ title }}
    </NuxtLink>
  </div>
</template>
