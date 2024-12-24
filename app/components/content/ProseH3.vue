<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <ProseHeading :id="id" tag="h3" size="base">
    <slot />
  </ProseHeading>
</template>
