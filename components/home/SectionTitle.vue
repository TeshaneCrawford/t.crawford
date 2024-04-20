<script lang="ts" setup>
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl">
    <slot>
      {{ text }}
    </slot>
  </h1>
</template>

<style scoped></style>
