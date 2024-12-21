<script setup lang="ts">

const route = useRoute()
const { data: article } = await useAsyncData(() => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

const { activeHeading } = useScrollSpy()

definePageMeta({
  layout: 'blog'
})
</script>

<template>
  <main class="py-10">
    <div class="mx-auto max-w-[90rem] flex gap-x-8 px-4 lg:px-8 sm:px-6">
      <!-- TOC Sidebar -->
      <aside class="hidden lg:block lg:w-64 lg:flex-none">
        <ProseToc
          v-if="article?.body?.toc?.links"
          :links="article.body.toc.links"
          :active-id="activeHeading"
        />
      </aside>

      <!-- Main Content -->
      <article class="mx-auto max-w-none min-w-0 w-full">
        <template v-if="article">
          <header class="mb-8">
            <h1 class="text-4xl font-bold">{{ article.title }}</h1>
          </header>
          <div class="prose-lg max-w-3xl prose">
            <ContentRenderer :value="article" />
          </div>
        </template>

        <ProseNav />
      </article>
    </div>
  </main>
</template>

<style scoped></style>