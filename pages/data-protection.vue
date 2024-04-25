<script lang="ts" setup>
const route = useRoute();
const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

defineRouteRules({
})
</script>

<template>
  <AppPageHeading :title="data?.title" :description="data?.description">
    <section>
      <ProseContentBody>
        <ContentDoc v-slot="{ doc }" tag="data-protection">
        <article>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
      </ProseContentBody>
    </section>
  </AppPageHeading>
</template>

<style scoped></style>
