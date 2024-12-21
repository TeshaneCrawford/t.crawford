<script setup lang="ts">
const { data: blog } = await useAsyncData(() => {
  return queryCollection('blog')
    .select('title', 'description', 'authors', 'path', 'date', 'tags', 'rawbody')
    .order('date', 'DESC')
    .all()
})

// Validate date to prevent rendering invalid timestamps
const isValidDate = (date: string | undefined) => {
  if (!date) return false
  const parsedDate = new Date(date)
  return !isNaN(parsedDate.getTime())
}

// Progressive animation configuration for card entrance
const cardTransition = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 400, delay: 200 }
}

</script>

<template>
  <div>
    <h1 class="sr-only">List of blog posts</h1>
    <section
      class="grid grid-cols-1 gap-6 md:grid-cols-2"
      aria-label="Blog post list"
    >
      <NuxtLink
        v-for="(blogs, index) in blog"
        :key="blogs.path"
        v-motion
        :initial="cardTransition.initial"
        :enter="{ ...cardTransition.enter, transition: { ...cardTransition.transition, delay: 150 * index }}"
        :to="blogs.path"
        class="group"
        :aria-label="`Read ${blogs.title || 'Untitled post'}`"
      >
        <article
          class="h-full overflow-hidden border border-gray-7 rounded-md bg-gray-2 transition-all duration-300 hover:border-dashed hover:shadow-sm hover:-translate-y-1"
          role="article"
        >
          <div class="p-6">
            <div
              class="mb-3 flex gap-2"
              aria-label="Post categories"
            >
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
                v-if="blogs.date && isValidDate(blogs.date)"
                class="text-sm text-gray-11 leading-normal"
              >
                <dt class="sr-only">Published</dt>
                <dd>
                  <NuxtTime
                    :datetime="blogs.date"
                    day="numeric"
                    month="long"
                    year="numeric"
                  />
                </dd>
              </dl>
            </div>
          </div>
        </article>
      </NuxtLink>
    </section>
  </div>
</template>
