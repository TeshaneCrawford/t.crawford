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
    <div
      v-if="pending"
      class="flex items-center justify-center py-12"
      role="status"
      aria-label="Loading blog posts"
    >
      <div class="loading-spinner">
        Loading...
      </div>
    </div>

    <div
      v-else-if="error"
      class="py-12 text-center text-red-11"
      role="alert"
      aria-label="Error loading blog posts"
    >
      Failed to load blog posts: {{ error.message }}
    </div>

    <!-- Blog post grid -->
    <ul
      v-else-if="blog"
      class="grid grid-cols-1 list-none gap-6 p-0 md:grid-cols-2"
      aria-label="Blog posts"
    >
      <li
        v-for="(blogs, index) in blog"
        :key="blogs.id"
      >
        <NuxtLink
          v-motion
          :initial="cardTransition.initial"
          :enter="{ ...cardTransition.enter, transition: { ...cardTransition.transition, delay: 150 * index } }"
          :to="`${blogs.path}`"
          class="group block h-full"
          :aria-labelledby="`post-title-${blogs.id}`"
        >
          <article
            class="h-full overflow-hidden border border-gray-7 rounded-md bg-gray-1 bg-transparent transition-all duration-300 hover:border-dashed hover:shadow-sm hover:-translate-y-1"
          >
            <div class="p-6">
              <!-- Post metadata -->
              <div class="mb-3 flex gap-2">
                <ul class="m-0 flex list-none gap-2 p-0" aria-label="Tags">
                  <li v-for="tag in blogs.tags" :key="tag">
                    <span class="badge-xs-gray text-gray-11 important-rounded-sm">
                      {{ tag }}
                    </span>
                  </li>
                </ul>
              </div>

              <h3
                :id="`post-title-${blogs.id}`"
                class="mb-2 text-lg text-gray-11 transition-colors group-hover:text-gray-12"
              >
                {{ blogs.title || 'Untitled post' }}
              </h3>

              <!-- ...rest of the existing article content... -->
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
      </li>
    </ul>

    <div
      v-else
      class="py-12 text-center text-gray-11"
      role="status"
      aria-label="No blog posts found"
    >
      No blog posts found.
    </div>
  </div>
</template>
