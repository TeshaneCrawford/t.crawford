<script lang="ts" setup>
useSeoMetaConfig({
  description: 'Personal statistics of Teshane Crawford.',
})

definePageMeta({
  alias: ['/stats'],
  title: 'Stats',
})

defineOgImageComponent('PageOg', {
  link: '/stats',
})

const { data: stats } = await useAsyncData(() => queryCollection('content').path('/stats').first())
</script>

<template>
  <main class="mx-auto max-w-4xl">
    <AppHeading
      title="Featured Stats"
      description="Featured personal statistics of Teshane Crawford."
    >
      <div class="space-y-8">
        <p>
          <ContentRenderer v-if="stats" :value="stats" />
        </p>
        <br>
        <BackButton />
      </div>
    </AppHeading>
  </main>
</template>

<style scoped>

</style>
