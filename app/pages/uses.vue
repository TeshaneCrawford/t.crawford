<script setup lang="ts">
definePageMeta({
  alias: ['/uses'],
  title: 'Uses',
})

useSeoMetaConfig({
  description: 'Tools and softwares I use on a daily basis.',
})

defineOgImageComponent('PageOg', {
  link: '/uses',
})

const { data: uses } = await useAsyncData(() => queryCollection('content').path('/uses').first())
</script>

<template>
  <div class="prose max-w-4xl! lg:px-0 md:px-8">
    <p class="mb-8 leading-12" :class="$style.uses">
      <ContentRenderer v-if="uses" :value="uses" />
    </p>
    <br>
    <BackButton />
  </div>
</template>

<style module>
.uses {
  ul {
    /* @apply mt-4 pl-4; */

    list-style-type: '※ ';

    ul {
      list-style-type: '⁖ ';
    }
  }
}
</style>
