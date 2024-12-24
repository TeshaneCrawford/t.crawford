<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <ProseHeading :id="id" tag="h5" size="sm">
    <slot />
  </ProseHeading>
</template>
