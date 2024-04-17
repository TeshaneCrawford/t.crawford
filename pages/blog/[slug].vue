<script lang="ts" setup>
import { ISODate } from '~/utils/date';
const route = useRoute()
const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})

useServerHead({
  meta: [
    {
      name: 'Author',
      content: 'Teshane Crawford'
    },
    {
      property: 'og:article:author',
      content: 'Teshane Crawford'
    },
    {
      name: 'publish_date',
      property: 'og:article:publish_date',
      content: ISODate(page.value.datePublished),
    },
    {
      name: 'modified_date',
      property: 'og:article:modified_date',
      content: ISODate(page.value.dateModified),
    },
  ]
})

useSchemaOrg([
  defineArticle(
    {
      image: page.value.image ?? '',
      datePublished: ISODate(page.value.datePublished),
      dateModified: ISODate(page.value.dateModified),
    },
  ),
])

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/blogs')
  .where({ _extension: 'md', navigation : { $ne: false } })
  .without(['body', 'excerpt'])
  .findSurround(route.path))
</script>

<template>
  <div>
    <ProseLayout :title="page.title" :date="page.datePublished" :toc="page.body.toc" :filename="page._file" :methods="page.methods">
      <ContentRenderer :value="page" />
    </ProseLayout>
    <PrevNext :prev="surround[0]" :next="surround[1]" />
  </div>
</template>

<style scoped></style>
