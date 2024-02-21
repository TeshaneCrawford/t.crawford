<script lang="ts" setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})

const getReadTime = (content: string) => {
  const wordsPerMinute = 200
  const textLength = content.split(' ').length
  return Math.ceil(textLength / wordsPerMinute)
}

const getFormattedDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getFormattedTime = (date: string) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const getFormattedDateTime = (date: string) => {
  return `${getFormattedDate(date)} at ${getFormattedTime(date)}`
}
</script>

<template>
  <NuxtLink :to="article._path" class="">
    <h2>
      {{ article.title }}
    </h2>
    <p>
      {{ article.description }}
    </p>
    <div>
      <time :datetime="article.date">
        {{ getFormattedDateTime(article.date) }}
      </time>
      <span>
        {{ getReadTime(article.content) }} min read
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
