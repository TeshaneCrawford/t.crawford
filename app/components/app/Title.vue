<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-3xl text-neutral-8 font-bold tracking-tight sm:text-[2.5rem] dark:text-neutral-1">
    <slot>{{ text }}</slot>
  </h1>
</template>

<style scoped></style>