<script lang="ts" setup>
defineProps<{
  title?: string
  date?: string
}>()

const authors = [
  {
    name: 'Teshane Crawford',
    picture: '/favicon.ico',
    twitter: 'https://x.com/_d_shybrid',
  },
]
</script>

<template>
  <header class="space-y-8">
    <div class="space-y-2">
      <h1
        v-if="title"
        class=""
      >
        {{ title }}
      </h1>

      <dl>
        <dt class="sr-only">
          Date of publication
        </dt>
        <dd>
          <time
            v-if="date"
            :datetime="date"
            class="text-sm text-gray-500 dark:text-gray-400"
          >
            {{ new Date(date).toLocaleDateString('en-En', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }) }}
          </time>
        </dd>
      </dl>
    </div>

    <dl>
      <dt class="sr-only">
        Authors
      </dt>
      <dd>
        <ul class="flex gap-4 md:gap-8">
          <li
            v-for="author in authors"
            :key="author.name"
          >
            <address class="flex items-center gap-2 not-italic">
              <img
                :src="author.picture"
                :alt="`Profil picture of ${author.name}`"
                class="h-9 w-9 rounded-full"
                width="36"
                height="36"
              >
              <div class="text-sm">
                <div class="text-gray-500 leading-none dark:text-gray-400">
                  {{ author.name }}
                </div>
                <div class="mt-1">
                  <NuxtLink
                    rel="author noopener"
                    :to="`https://x.com/${author.twitter}`"
                    target="_blank"
                    class="text-gray-500 font-medium leading-none transition ease-in dark:text-gray-400 hover:text-gray-800 hover:dark:text-gray-200"
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
  </header>
</template>

<style scoped></style>
