<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <ProseHeading :id="id" tag="h6" size="sm">
    <slot />
  </ProseHeading>
</template>
