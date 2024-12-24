<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<template>
  <ProseHeading :id="id" tag="h4" size="base">
    <slot />
  </ProseHeading>
</template>
