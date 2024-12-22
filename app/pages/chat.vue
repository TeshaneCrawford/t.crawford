<script setup lang="ts">
useSeoMetaConfig({
  description: 'Reach out to me via one of the medium listed below.',
})

definePageMeta({
  alias: ['/chat'],
  title: 'Chat',
})

defineOgImageComponent('PageOg', {
  link: '/chat',
})

const { data: chat } = await useAsyncData(() => queryCollection('content').path('/chat').first())
</script>

<template>
  <div class="max-w-4xl! lg:px-0 md:px-8">
    <p class="mb-8 leading-12">
      <ContentRenderer v-if="chat" :value="chat" />
    </p>
    <br>
    <BackButton />
  </div>
</template>

<style scoped></style>
