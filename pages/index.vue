<script lang="ts" setup>
const { data: page } = await useAsyncData('home', () => queryContent('/').findOne())

const title = 'Teshane Crawford'

useSeoMeta({
  title: null,
  ogTitle: title,
})
</script>

<template>
  <div>
    Page: index
  </div>
</template>

<style scoped></style>
