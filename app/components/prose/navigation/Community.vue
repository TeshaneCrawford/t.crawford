<script lang="ts" setup>
defineProps<{
  filename?: string
}>()
</script>

<template>
  <ProseNavigationGroup icon="i-ri--group-fill">
    <template #title>
      Community
    </template>
    <template #links>
      <slot name="before" />
      <ProseNavigationGroupLink
        to="https://github.com/TeshaneCrawford"
        target="_blank"
        icon="i-hugeicons-github"
      >
        Star on GitHub
      </ProseNavigationGroupLink>
      <ProseNavigationGroupLink
        v-if="filename"
        :to="(filename)"
        target="_blank"
        icon="i-hugeicons-pencil"
      >
        Edit this page
      </ProseNavigationGroupLink>
    </template>
  </ProseNavigationGroup>
</template>

<style scoped></style>
