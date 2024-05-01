<script lang="ts" setup>
const { data: doc, error } = await useAsyncData('index', () => queryContent('/').findOne());

if (error.value) {
  throw createError({
    statusCode: 404,
    message: error.value.message || 'Page not found',
    fatal: true,
  })
}

const title = 'Teshane Crawford'

useSeoMeta({
  titleTemplate: '%siteName| %pageTitle',
  title: 'Software Engineer',
  ogTitle: title,
  description: doc.value?.description,
})

// defineOgImageComponent('OgImagePage', {
//   title: 'Teshane Crawford',
//   illustration: ''
// })
</script>

<template>
  <main v-if="doc" class="">
    <HomeHeroSection
      class="sm:mt-28"
      :title="doc.title"
      :description="doc.description"
    />
    <AppPageHeading class="mt-4">
      <ProseContentBody>
        <ContentDoc tag="home">
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
      </ProseContentBody>
    </AppPageHeading>
    <HomeProjectSection
    :subtitle="doc.subtitle"
    :cards="doc.projects.cards"
    />
  </main>
</template>

<style scoped></style>
