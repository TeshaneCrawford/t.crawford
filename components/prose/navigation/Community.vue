<script lang="ts" setup>
defineProps<{
  filename?: string
}>()
</script>

<template>
  <ProseNavigationGroup icon="i-heroicons-user-group-solid">
    <template #title>
      Community
    </template>
    <template #links>
      <slot name="before" />
      <ProseNavigationGroupLink
        to="https://github.com/unjs/website" target="_blank"
        icon="i-simple-icons-github"
      >
        Star on GitHub
      </ProseNavigationGroupLink>
      <ProseNavigationGroupLink v-if="filename" :to="toEditPage(filename)" target="_blank" icon="i-heroicons-pencil-square-20-solid">
        Edit this page
      </ProseNavigationGroupLink>
    </template>
  </ProseNavigationGroup>
</template>

<style scoped></style>
