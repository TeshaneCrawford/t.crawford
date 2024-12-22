<script lang='ts' setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <h1
    mb4
    mt-0
    md-text-3xl
  >
    {{ title }}
  </h1>
  <p
    text-xs
    font-mono
    italic
    md-text-sm
  >
    {{ description }}
  </p>
</template>
