<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
</script>

<template>
  <AppPageHeading :title="doc?.title" :description="doc?.description">
    <h2 class="text-4xl font-medium">
      {{ doc && doc.heading }}
    </h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in doc?.links"
        :key="link.name"
        :to="link.url"
        class="flex items-end gap-4 dark:hover:text-gray-300"
        >

        <span class="">
          {{ link.name }}
        </span>

        <div class="flex-1 border-b border-gray-300 border-dashed transition-colors hover:border-gray-700" />

        <div class="border dark:border-gray-700 rounded p-2">
          <Icon class="h-6 w-6 flex-none fill-gray-500" :name="link.icon" />
        </div>
      </NuxtLink>
    </div>
  </AppPageHeading>
</template>

<style scoped></style>
