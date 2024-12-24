<script setup lang="ts">
// Define the shape of blog posts retrieved from the content system
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
  id: string
}

// Fetch and sort blog posts in descending order by date
const { data: blog, pending, error } = await useAsyncData<BlogPost[]>('blog', () => {
  return queryCollection('blog')
    .select('title', 'description', 'authors', 'id', 'path', 'date', 'tags', 'rawbody')
    .order('date', 'DESC')
    .all()
})

// Configure staggered entrance animation for blog post cards
const cardTransition = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 400, delay: 200 },
}
</script>

<template>
  <div>
    <h1 class="sr-only">
      List of blog posts
    </h1>

    <!-- Loading, error, and empty states handling -->
    <div v-if="pending" class="flex items-center justify-center py-12">
      <div class="loading-spinner">
        Loading...
      </div>
    </div>

    <div v-else-if="error" class="py-12 text-center text-red-11">
      Failed to load blog posts: {{ error.message }}
    </div>

    <!-- Blog post grid with staggered animation on card entrance -->
    <section
      v-else-if="blog"
      class="grid grid-cols-1 gap-6 md:grid-cols-2"
      aria-label="Blog post list"
    >
      <NuxtLink
        v-for="(blogs, index) in blog"
        :key="blogs.id"
        v-motion
        :initial="cardTransition.initial"
        :enter="{ ...cardTransition.enter, transition: { ...cardTransition.transition, delay: 150 * index } }"
        :to="`${blogs.path}`"
        class="group"
        :aria-label="`Read ${blogs.title || 'Untitled post'}`"
      >
        <!-- Blog post card with hover effects and accessibility features -->
        <article
          class="h-full overflow-hidden border border-gray-7 rounded-md bg-gray-1 bg-transparent transition-all duration-300 hover:border-dashed hover:shadow-sm hover:-translate-y-1"
          role="article"
        >
          <div class="p-6">
            <!-- Blog post metadata: tags, title, description -->
            <div class="mb-3 flex gap-2" aria-label="Post categories">
              <span
                v-for="tag in blogs.tags"
                :key="tag"
                class="badge-xs-gray text-gray-11 important-rounded-sm"
                role="tag"
              >
                {{ tag }}
              </span>
            </div>
            <h2 class="mb-2 text-lg text-gray-11 transition-colors group-hover:text-gray-12">
              {{ blogs.title || 'Untitled post' }}
            </h2>
            <p class="line-clamp-2 mb-4 text-sm text-gray-11">
              {{ blogs.description }}
            </p>

            <!-- Author info and publication date -->
            <div class="flex items-center justify-between text-sm text-gray-11">
              <div class="flex items-center gap-2">
                <img
                  v-if="blogs.authors?.[0]?.picture"
                  :src="blogs.authors[0].picture"
                  :alt="`Profile picture of ${blogs.authors[0].name}`"
                  class="h-6 w-6 rounded-full"
                  loading="lazy"
                  decoding="async"
                >
                <span>{{ blogs.authors?.[0]?.name || 'Anonymous' }}</span>
              </div>
              <dl
                v-if="blogs.date"
                class="text-sm text-gray-11 leading-normal"
              >
                <dt class="sr-only">Published</dt>
                <dd>
                  <time
                    :datetime="toISODateString(blogs.date)"
                    :aria-label="'Published on ' + toLocaleDateString(blogs.date)"
                  >
                    {{ toLocaleDateString(blogs.date) }}
                  </time>
                </dd>
              </dl>
            </div>
          </div>
        </article>
      </NuxtLink>
    </section>

    <div v-else class="py-12 text-center text-gray-11">
      No blog posts found.
    </div>
  </div>
</template>
