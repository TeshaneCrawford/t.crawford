<script setup lang="ts">
defineProps<{
  text?: string
}>()
</script>

<template>
  <h1 class="text-3xl text-gray-12 font-bold tracking-tight sm:text-[2.5rem]">
    <slot>{{ text }}</slot>
  </h1>
</template>

<style scoped></style>
