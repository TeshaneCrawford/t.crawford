<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <ProseHeading :id="id" tag="h1" size="xl">
    <slot />
  </ProseHeading>
</template>
