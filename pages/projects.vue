<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
</script>

<template>
  <AppPageHeading :title="doc?.title" :description="doc?.description">
    Page: projects
  </AppPageHeading>
</template>

<style scoped></style>
