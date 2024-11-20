<script setup lang="ts">
definePageMeta({
  alias: ['/about'],
  title: 'About'
});

useSeoMetaConfig({
  description: 'Versatile software engineer with a growth mindset, focused on building impactful solutions.'
});

defineOgImageComponent('PageOg', {
  link: '/about',
});
</script>

<template>
  <div class="prose max-w-4xl! lg:px-0 md:px-8">
    <p class="mb-8 leading-12" :class="$style.about">
      <StaticMarkdownRender path="/about" />
    </p>
  </div>
</template>

<style module>
.about {
  ul {
    list-style-type: '▹ ';
  }
}
</style>