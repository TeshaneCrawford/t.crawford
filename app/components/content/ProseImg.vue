<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <figure class="my-8">
    <img
      :src="src"
      :alt="alt"
      class="w-full border border-neutral-200 rounded-lg object-cover shadow-sm dark:border-neutral-800"
    >
    <figcaption v-if="alt" class="mt-2 text-center text-sm text-neutral-600 italic dark:text-neutral-400">
      {{ alt }}
    </figcaption>
  </figure>
</template>

<style scoped></style>
