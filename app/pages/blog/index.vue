<script setup lang="ts">
useSeoMetaConfig({
  title: 'Blog Posts - Dev Notes',
  description: 'Browse through articles about software development, architecture, and best practices. Written by T. Crawford.',
})

definePageMeta({
  alias: ['/blog', '/article', '/blogs'],
  title: 'Blog',
})

defineOgImageComponent('PageOg', {
  link: '/blog',
})

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 500 },
}
</script>

<template>
  <div
    v-motion
    :initial="pageTransition.initial"
    :enter="pageTransition.enter"
    :transition="pageTransition.transition"
    class="flex-grow max-w-4xl!"
  >
    <header role="banner">
      <AppHeading
        title="< dev notes />"
        description="Technical writings on software development, architecture, and best practices"
      />
    </header>

    <main id="main-content" role="main" class="mt-8">
      <div class="mb-12">
        <h1 class="sr-only">
          Dev Notes Blog
        </h1>
        <section aria-labelledby="search-heading">
          <h2 id="search-heading" class="sr-only">
            Search blog posts
          </h2>
          <ProseContentSearch />
        </section>
      </div>

      <section aria-labelledby="blog-posts-heading">
        <h2 id="blog-posts-heading" class="mb-8 text-3xl text-gray-12 font-semibold">
          Blog Posts
        </h2>
        <BlogIndexMain />
      </section>
    </main>

    <nav aria-label="Back navigation" class="mt-8">
      <BackButton />
    </nav>
  </div>
</template>

<style scoped></style>
