<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <ProseHeading :id="id" tag="h2" size="lg">
    <slot />
  </ProseHeading>
</template>
