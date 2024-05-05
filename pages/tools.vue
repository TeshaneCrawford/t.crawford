<script lang="ts" setup>
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => queryContent(route.path).findOne());
</script>

<template>
  <AppPageHeading :title="doc?.title" :description="doc?.description">
    <div v-for="tool in doc?.toolsData" :key="tool.name">
      <h3 class="text-3xl font-medium"> {{ tool.title }} </h3>
      <div class="flex flex-col gap-14">
        <div class="grid grid-cols-2 mt-5 gap-3 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xl:grid-cols-6">
          <div
            v-for="data in tool.toolData" :key="data.name"
            class="relative flex flex-col gap-3 items-center justify-center bg-gray-100/15 dark:bg-darkSecondary/15 shadow dark:shadow-md p-8  border border-transparent hover:border-gray-400 dark:hover:border-neutral-600 rounded-md transition-all lg:hover:!scale-110 active:!scale-80 hover:z-10 hover:shadow-lg hover:origin-center hover:text-black dark:hover:text-white backdrop-blur-sm"
          >
            <NuxtLink
            :to="data.link"
            :title="data.label"
            class="flex items-center"
            >
            <icon v-if="data.icon" class="h-10 w-10" :name="data.icon" :color="data.color" />
          </NuxtLink>
            <p class="text-center text-[12px] font-mono font-medium select-none">
               {{ data.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <p>
      <Icon name="i-twemoji-backhand-index-pointing-right-medium-skin-tone" class="mr-1"/> Last updated on <span> {{ doc?.lastUpdate }} </span>
    </p>
  </AppPageHeading>
</template>

<style scoped></style>
