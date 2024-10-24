<script setup lang="ts">
// viewtransition
const viewTransitionName = computed(() => `article-${slug}`)

const route = useRoute('blog-article')
const slug = route.params.article
if (!slug) navigateTo('/blog')

const path = computed(() =>
  route.path.replace(/(index)?\.json$/, '').replace(/\/$/, ''),
)

const { data: page } = await useAsyncData(
  path.value,
  () =>
    ((import.meta.server || import.meta.dev) as true)
    && queryContent(path.value)
      .only(['title', 'date', 'tags', 'body', 'authors', 'description', 'content'])
      .findOne(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    fatal: true,
  })
}

route.meta.title = page.value.title

const formatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getContentFromBody = (body: any): string => {
  if (!body?.children) return '';

  return body.children
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((node: any) => {
      if (node.type === 'text') return node.value || '';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (node.children) return node.children.map((child: any) => child.value || '').join(' ');
      return '';
    })
    .join(' ');
};

// Calculate content for reading time
const content = computed(() => getContentFromBody(page.value?.body));


defineOgImageComponent('DefaultOg', {
  date: formatter.format(new Date(page.value.date)),
  title: page.value.title,
  tags: page.value.tags,
})

if (import.meta.server) {
  useRoute().meta.description = page.value.description
}

// definePageMeta({
//   title: () => page.value?.title || 'Article'
// })

definePageMeta({
  layout: 'blog'
})

useSeoMetaConfig({
  description: page.value?.description
});
</script>

<template>
  <main   md:px-8 xl:px-0 >
    <section v-if="page">
      <Prose :toc="page.body?.toc">
        <template #header>
          <ProseHeaderArticle
            v-if="page.title"
            :title="page.title"
            :date="page.date"
            :categories="page.tags"
            :authors="page.authors"
            :content="content"
          >
            <template #title>
              <h1 :style="{ viewTransitionName }">{{ page.title }}</h1>
            </template>
          </ProseHeaderArticle>
        </template>

        <StaticMarkdownRender :path="path" />
      </Prose>
    </section>
  </main>
</template>

<style scoped>
header>h1:first-child {
  view-transition-name: heading;
}

header dl dt:first-of-type {
  view-transition-name: published-dt;
}

header dl dd:first-of-type {
  view-transition-name: published-dd;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

::view-transition-old(root) {
  animation: fade-out 0.5s ease-in-out;
}

::view-transition-new(root) {
  animation: fade-in 0.5s ease-in-out;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>