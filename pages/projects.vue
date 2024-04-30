<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
// const { data: repoGroup } = await useFetch('/api/repos')
</script>

<template>
  <AppPageHeading :title="doc?.title" :description="doc?.description">
    <!-- <ProjectGitHubPanel v-for="(repos, key) in repoGroup" :key="key.toString()" :label="key.toString()" :data="repos" /> -->
    <ProjectSection />
  </AppPageHeading>
</template>

<style scoped></style>
