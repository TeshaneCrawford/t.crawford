<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug;

useSeoMeta({
  ogImage: `https://teshane.live/blog/${slug}.png`,
  twitterImage: `https://teshane.live/blog/${slug}.png`,
  // articleAuthor: 'Teshane Crawford'
})
</script>

<template>
  <main class="screenheight">
    <div class="prose">
      <ContentDoc v-slot="{ doc }" tag="article">
        <article>
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </div>
  </main>
</template>

<style scoped>
.screenheight {
  min-height: 100dvh;
}

.prose h2 a,
.prose h3 a {
  @apply no-underline;
}
</style>