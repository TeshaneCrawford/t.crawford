<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-gray-12 text-3xl font-bold tracking-tight sm:text-[2.5rem]">
    <slot>{{ text }}</slot>
  </h1>
</template>

<style scoped></style>