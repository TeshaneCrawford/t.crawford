<script setup lang="ts">
const { data: blog } = await useAsyncData(() => {
  return queryCollection('blog')
    .select('title', 'description', 'authors', 'path', 'date', 'tags')
    .order('date', 'DESC')
    .all()
})


const cardTransition = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 400, delay: 200 }
}

</script>

<template>
  <div>
  <h1 class="sr-only">
    List of blog posts
  </h1>
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
            class="h-full overflow-hidden border border-neutral-2 rounded-md bg-black/2 transition-all duration-300 dark:border-neutral-8 hover:border-dashed dark:bg-white/3 hover:shadow-lg hover:-translate-y-1"
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
                  class="badge-xs-zinc dark:badge-xs-zinc important-rounded-sm dark:text-neutral-300"
                  role="tag"
                >
                  {{ tag }}
                </span>
              </div>
              <h2 class="mb-2 text-lg transition-colors dark:text-neutral-4 dark:group-hover:text-neutral-3">
                {{ blogs.title || 'Untitled post' }}
              </h2>
              <p class="line-clamp-2 mb-4 text-sm text-neutral-600">
                {{ blogs.description }}
              </p>
              <div class="flex items-center justify-between text-sm text-neutral-500">
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
            class="text-muted text-sm leading-normal"
          >
            <dt class="sr-only">
              Published
            </dt>
            <dd class="">
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
