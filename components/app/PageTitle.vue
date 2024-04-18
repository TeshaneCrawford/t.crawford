<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl">
    <slot>
      {{ text }}
    </slot>
  </h1>
</template>

<style scoped></style>
