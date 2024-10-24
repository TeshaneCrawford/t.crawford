<script lang="ts" setup>
defineProps<{
  title: string
  date?: string
  categories?: string[]
  content?: string
  authors?: {
    name: string
    picture: string
    twitter: string
  }[]
}>()
</script>

<template>
  <header
    class="relative"
    :class="{ 'pt-16 sm:pt-10': date }"
  >
    <div class="flex flex-col gap-1 prose">
      <h1 class="">
        {{ title }}
      </h1>
    </div>

    <template v-if="date || categories">
      <div class="absolute left-0 top-0 text-sm text-neutral-500 font-light dark:text-neutral-400">
        <dl class="flex flex-wrap items-center gap-x-1 gap-y-2">
          <template v-if="date">
            <dt class="sr-only">
              Published at
            </dt>
            <dd>
              <NuxtTime
                :datetime="date"
                day="numeric"
                month="long"
                year="numeric"
              />
            </dd>
          </template>
          <template v-if="date && (categories || content)">
            <span class="hidden sm:inline">-</span>
          </template>
          <template v-if="content">
            <dt class="sr-only">
              Reading time
            </dt>
            <dd
              :class="[
              'order-last sm:order-none w-full sm:w-auto',
              date && categories ? 'sm:mx-1' : ''
              ]">
              <ProseReadingTime :content="content" />
            </dd>
          </template>
          <template v-if="(date || content) && categories">
            <span class="hidden sm:inline">-</span>
          </template>
          <template v-if="categories">
            <dt class="sr-only">
              Categories
            </dt>
            <dd class="capitalize">
              <ul class="flex items-center gap-1">
                <li
                  v-for="(category, index) in categories"
                  :key="category"
                  inline-block fw-normal important-rounded-full
                  :class="'dark-badge-xs-zinc badge-xs-zinc'"
                >
                  <NuxtLink>
                    {{ category }}
                  </NuxtLink>
                  <span v-if="index !== categories.length - 1">,</span>
                </li>
              </ul>
            </dd>
          </template>
        </dl>
      </div>
    </template>
    <template v-if="authors">
      <dl>
        <dt class="sr-only">
          Authors
        </dt>
        <dd>
          <ul class="mt-6 flex flex-wrap gap-4 md:gap-8">
            <li
              v-for="author in authors"
              :key="author.name"
            >
              <address class="flex items-center gap-2 not-italic">
                <img
                  :src="author.picture"
                  :alt="`Profile picture of ${author.name}`"
                  width="36"
                  height="36"
                  class="h-9 w-9 rounded-full"
                >
                <div class="text-sm">
                  <div class="text-neutral-950 font-light leading-none dark:text-neutral-50">
                    {{ author.name }}
                  </div>
                  <div class="mt-1">
                    <NuxtLink
                      rel="author noopener"
                      :to="`https://x.com/${author.twitter}`"
                      target="_blank"
                      class="text-neutral-500 leading-none transition ease-in dark:text-neutral-400 hover:text-neutral-950 hover:dark:text-neutral-50"
                    >
                      @{{ author.twitter }}
                    </NuxtLink>
                  </div>
                </div>
              </address>
            </li>
          </ul>
        </dd>
      </dl>
    </template>
  </header>
</template>

<style scoped>
header>h1:first-child {
  view-transition-name: heading;
}

header dl dt:first-of-type {
  view-transition-name: published-dt;
}

header dl dd:first-of-type {
  view-transition-name: published-dd;
}
</style>
