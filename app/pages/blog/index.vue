<script setup lang="ts">
useSeoMetaConfig({
  description: 'Curated list of blogs that I\ve written.',
})

definePageMeta({
  alias: ['/blog', '/post', '/blogs'],
  title: 'Blog'
});

defineOgImageComponent('PageOg', {
  link: '/blog',
});

const nuxtApp = useNuxtApp()
onMounted(() => {
  nextTick(() =>
    document.querySelectorAll('main a').forEach(a => {
      nuxtApp.hooks.callHook('link:prefetch', a.getAttribute('href')!)
    }),
  )
})
</script>

<template>
  <div class="flex-grow max-w-4xl!">
    <AppHeading
      title="< dev notes />"
      description="Technical writings on software development, architecture, and best practices"
    >
    <main
      class="text-lg"
    >
    <h1 class="sr-only">
          List of blog posts
        </h1>
      <BlogIndexMain />
    </main>
    </AppHeading>
  </div>
</template>

<style scoped></style>
