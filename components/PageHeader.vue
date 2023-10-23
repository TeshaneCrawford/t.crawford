<script lang='ts' setup>
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <h1
    md-text-3xl
    mb4
    mt-0
  >
    {{ title }}
  </h1>
  <p font-sans text-xs md-text-sm italic>
    {{ description }}
  </p>
</template>