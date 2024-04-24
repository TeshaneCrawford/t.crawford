<script lang="ts" setup>
import type { Author } from '~/types/author';

defineProps<{
  path: string
  title: string
  description: string
  publishedAt: string
  authors: Author[]
}>();
</script>

<template>
  <div>
    Component: home/BlogCard
  </div>
</template>

<style scoped></style>
