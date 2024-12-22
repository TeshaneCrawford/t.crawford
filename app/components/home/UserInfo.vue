<script setup lang="ts">
import type { User } from '~~/types/github'

const { data: userData } = await useFetch<User>('/api/github-user')

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = '/tc.jpeg'
}

interface NavLink {
  text: string
  path: string
  ariaLabel: string
}

const links: NavLink[] = [
  {
    text: 'Learn more about me',
    path: '/about',
    ariaLabel: 'Learn more about Teshane Crawford',
  },
  {
    text: 'View my projects',
    path: '/projects',
    ariaLabel: 'View my project portfolio',
  },
  {
    text: 'Get in touch',
    path: '/chat',
    ariaLabel: 'Contact Teshane Crawford',
  },
  {
    text: 'Blog',
    path: '/blog',
    ariaLabel: 'Visit our blog section',
  },
  {
    text: 'Photos',
    path: '/photos',
    ariaLabel: 'Browse our photo gallery',
  },
]

const email = 'crawfordteshane@gmail.com'
const copied = ref(false)

const copyEmail = async () => {
  await navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const { data: home } = await useAsyncData(() => queryCollection('content').path('/home').first())
</script>

<template>
  <div lg:px-0 md:px-8>
    <div class="flex justify-between">
      <div class="flex flex-row items-center pb-12 space-x-3">
        <a
          :href="`https://github.com/${userData?.username}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block transition-transform hover:scale-102 sm:pl-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-8"
          :aria-label="`Visit ${userData?.name}'s GitHub profile (opens in new tab)`"
        >
          <img
            :src="userData?.avatar"
            :alt="`${userData?.name}'s profile picture`"
            :title="`${userData?.name}'s GitHub avatar`"
            class="h-18 w-18 rounded-full shadow ring-1 ring-gray-6"
            loading="lazy"
            decoding="async"
            @error="handleImageError"
          >
        </a>
        <div v-if="userData?.name" class="flex flex-col">
          <span class="font-semibold font-mono">@{{ userData?.username }}</span>
          <span class="text-gray-11">{{ userData?.bio }}</span>
        </div>
      </div>
      <span class="flex items-center gap-1 text-gray-11 op-80 lt-md:hidden">
        <Icon name="i-hugeicons-location-01" /> {{ userData?.location }}
      </span>
    </div>
    <div flex="~ col">
      <div mb text-3xl>
        <a :href="`https://github.com/${userData?.username}`" target="_blank">
          {{ userData?.name }}
        </a>
        is <span animate-pulse>Coding...</span>
      </div>
      <p flex gap-2 op50>
        <a :href="`https://github.com/${userData?.username}`" target="_blank">
          <span font-mono>@{{ userData?.username }}</span>'s recent commits on GitHub
        </a>
      </p>
    </div>
    <div class="prose max-w-4xl!">
      <p class="mb-8 leading-12" :class="$style.home">
        <ContentRenderer v-if="home" :value="home" />
      </p>
      <div class="mb-8 flex flex-col gap-4">
        <div class="flex flex-wrap gap-4">
          <NuxtLink
            v-for="link in links.slice(0, 3)"
            :key="link.path"
            :to="link.path"
            :aria-label="link.ariaLabel"
            class="group flex items-center gap-1 underline underline-offset-4 transition-all duration-300 hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-gray-8"
          >
            {{ link.text }}
            <Icon
              name="i-hugeicons:arrow-up-right-01"
              class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
      <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span>Send me an email at</span>
        <a
          :href="`mailto:${email}`"
          class="underline underline-offset-4 hover:text-gray-11"
        >{{ email }}</a>
        <button
          class="h-6 w-6 inline-flex items-center justify-center p-1 hover:text-gray-11 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-gray-8"
          :aria-label="copied ? 'Email copied!' : 'Copy email address'"
          @click="copyEmail"
        >
          <Icon
            :name="copied ? 'i-hugeicons-tick-01' : 'i-hugeicons-clipboard'"
            class="h-4 w-4"
          />
        </button>
      </p>
      <div class="flex flex-col justify-between sm:flex-row">
        <div class="mt-4 flex flex-1 gap-8">
          <NuxtLink
            v-for="link in links.slice(3)"
            :key="link.path"
            :to="link.path"
            :aria-label="link.ariaLabel"
            class="group flex items-center gap-1 underline underline-offset-4 transition-all duration-300 hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:ring-gray-8"
            rel="nofollow"
          >
            {{ link.text }}
            <Icon
              name="i-hugeicons:arrow-up-right-01"
              class="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
      </div>
      <AppPageSeparator text="My core skillset" />
      <AppSkills />
    </div>
  </div>
</template>

<style scoped>
.hover-link:hover .i-hugeicons\:arrow-up-right-01 {
  transform: translate(0.125rem, -0.125rem);
}
</style>

<style module>
.home {
  ul {
    list-style-type: '▹ ';
  }
}
</style>
