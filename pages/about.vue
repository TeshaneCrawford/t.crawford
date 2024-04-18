<script lang="ts" setup>
// const route = useRoute();
const { data } = await useAsyncData('page-data', () => queryContent('/about').findOne());
</script>

<template>
  <AppPageHeading :title="data?.title" :description="data?.description">
    <section>
      <ProseContentBody>
        <ContentDoc v-slot="{ doc }" tag="about">
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
      </ProseContentBody>
    </section>
  </AppPageHeading>
</template>

<style scoped></style>
