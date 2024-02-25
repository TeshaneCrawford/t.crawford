<script lang="ts" setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})

// const getReadTime = (content: string) => {
//   const wordsPerMinute = 200
//   const textLength = content.split(' ').length
//   return Math.ceil(textLength / wordsPerMinute)
// }

const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getFormattedDateTime = (date: string) => {
  return `${getFormattedDate(date)}`
}
</script>

<template>
  <NuxtLink :to="article._path" class="">
    <h2 class="text-2xl hover:(underline)">
      {{ article.title }}
    </h2>
    <p ___ text-gray-500>
      {{ article.description }}
    </p>
    <div>
      <time :datetime="article.date">
        {{ getFormattedDateTime(article.published) }}
      </time>
    </div>
  </NuxtLink>
</template>

<style scoped></style>