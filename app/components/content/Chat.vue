<script setup lang="ts">
interface SocialLink {
  name: string
  url: string
  icon: string
}

interface ContactPageData {
  title: string
  description: string
  heading: string
  links: SocialLink[]
}

const contactData: ContactPageData = {
  title: 'Let\'s Chat',
  description: 'I\'m always open to new opportunities and connections. Reach out anytime to discuss a project or just chat.',
  heading: 'Find me on these platforms',
  links: [
    {
      name: 'LinkendIn',
      url: 'https://www.linkedin.com/in/teshanecrawford/',
      icon: 'i-hugeicons:linkedin-02',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TeshaneCrawford',
      icon: 'i-hugeicons:github-01',
    },
    {
      name: 'Bluesky',
      url: 'https://bsky.app/profile/teshanecrawford.com',
      icon: 'i-tabler-brand-bluesky',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/TeshanCrawford',
      icon: 'i-hugeicons:new-twitter',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/TeshaneCrawford',
      icon: 'i-hugeicons:telegram',
    },
    // {
    //   name: "Threads",
    //   url: "https://www.threads.net/@teshanecrawford",
    //   icon: "i-hugeicons:threads"
    // },
    {
      name: 'Reddit',
      url: 'https://www.reddit.com/user/TeshaneCrawford',
      icon: 'i-hugeicons:reddit',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/crawfordteshane/',
      icon: 'i-hugeicons:instagram',
    },
    // {
    //   name: "Facebook",
    //   url: "https://www.facebook.com/teshane.crawford",
    //   icon: "i-hugeicons:facebook-02"
    // },
    {
      name: 'Discord',
      url: 'https://discord.com/users/teshanecrawford#0001',
      icon: 'i-hugeicons:discord',
    },
    {
      name: 'Email',
      url: 'mailto:crawfordteshane@gmail.com',
      icon: 'i-hugeicons:mail-01',
    },
  ],
}

useHead({
  // title: contactData.title,
  meta: [
    {
      name: 'description',
      content: contactData.description,
    },
    {
      property: 'og:title',
      content: contactData.title,
    },
    {
      property: 'og:description',
      content: contactData.description,
    },
    {
      name: 'twitter:title',
      content: contactData.title,
    },
    {
      name: 'twitter:description',
      content: contactData.description,
    },
  ],
})
</script>

<template>
  <main class="mx-auto max-w-4xl">
    <AppHeading :title="contactData.title" :description="contactData.description">
      <div role="navigation" aria-label="Social media links">
        <AppPageSeparator :text="contactData.heading" />
      </div>

      <nav aria-label="Social platforms" class="mt-8">
        <ul class="list-none p-0 space-y-5">
          <li v-for="link in contactData.links" :key="link.name">
            <NuxtLink
              :to="link.url"
              :aria-label="`Visit ${link.name} profile (opens in new tab)`"
              target="_blank"
              rel="noopener noreferrer"
              external
              class="group flex items-end gap-4 rounded p-2 outline-none ring-offset-2 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gray-5"
            >
              <span
                class="text-base text-gray-11 font-medium transition-colors duration-200 group-hover:text-gray-12"
              >
                {{ link.name }}
              </span>

              <div
                class="flex-1 border-b border-gray-6 border-dashed transition-colors duration-200 group-hover:border-gray-8"
                aria-hidden="true"
              />

              <div
                class="border border-gray-6 rounded bg-transparent p-2 transition-colors duration-200 group-hover:border-gray-8 group-hover:bg-gray-2"
                aria-hidden="true"
              >
                <Icon
                  :name="link.icon"
                  class="h-6 w-6 flex text-gray-11 transition-colors duration-200 group-hover:text-gray-12"
                  role="icon"
                  :aria-label="`${link.name} icon`"
                />
              </div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </AppHeading>
  </main>
</template>

<style scoped></style>
