<script setup lang="ts">
useSeoMetaConfig({
  description: 'Curated list of blogs that I\ve written.',
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

interface BlogPost {
  title: string
  description: string
  authors: Array<{
    name: string
    picture: string
    twitter: string
  }>
  path: string
  date: string
  tags: string[]
  rawbody: string
}

// Fetch and sort blog posts in descending order by date
const { data: blog } = await useAsyncData<BlogPost[]>('blog', () => {
  return queryCollection('blog')
    .select('title', 'description', 'authors', 'path', 'date', 'tags', 'rawbody')
    .order('date', 'DESC')
    .all()
})

prerenderRoutes(blog.value?.map((post: BlogPost) => post.path) ?? [])
</script>

<template>
  <div
    v-motion
    :initial="pageTransition.initial"
    :enter="pageTransition.enter"
    :transition="pageTransition.transition"
    class="flex-grow max-w-4xl!"
  >
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
    <br>
    <BackButton />
  </div>
</template>

<style scoped></style>
