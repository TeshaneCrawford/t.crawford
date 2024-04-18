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
  title: page.value?.title,
  ogTitle: page.value ? page.value.title : '',
  description: page.value?.description,
  ogDescription: page.value?.description,
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
        content: page.value ? ISODate(page.value.datePublished) : null,
      },
      {
        name: 'modified_date',
        property: 'og:article:modified_date',
        content: page.value ? ISODate(page.value.dateModified) : null,
    },
  ]
})

useSchemaOrg([
  defineArticle(
    {
      image: page.value?.image ?? '',
      datePublished: page.value ? ISODate(page.value.datePublished) : null,
      dateModified: page.value?.dateModified ? ISODate(page.value.dateModified) : null,
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
    <ProseLayout :title="page?.title" :date="page?.datePublished" :toc="page?.toc" :filename="page?._file || ''" :methods="page?.methods">
      <ContentRenderer :value="page?.value" />
    </ProseLayout>
    <PrevNext :prev="surround && surround[0] ? { _path: surround[0]._path, title: surround[0].title } : null" :next="surround && surround[1] ? { _path: surround[1]._path, title: surround[1].title } : null" />
  </div>
</template>

<style scoped></style>
