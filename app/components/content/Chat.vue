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
  title: "Let's Chat",
  description: "I'm always open to new opportunities and connections. Reach out anytime to discuss a project or just chat.",
  heading: "Find me on these platforms",
  links: [
    {
      name: "LinkendIn",
      url: "https://www.linkedin.com/in/teshanecrawford/",
      icon: "i-hugeicons:linkedin-02"
    },
    {
      name: "GitHub",
      url: "https://github.com/TeshaneCrawford",
      icon: "i-hugeicons:github-01"
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/teshanecrawford.com",
      icon: "i-tabler-brand-bluesky"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/TeshanCrawford",
      icon: "i-hugeicons:new-twitter"
    },
    {
      name: "Telegram",
      url: "https://t.me/TeshaneCrawford",
      icon: "i-hugeicons:telegram"
    },
    // {
    //   name: "Threads",
    //   url: "https://www.threads.net/@teshanecrawford",
    //   icon: "i-hugeicons:threads"
    // },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/TeshaneCrawford",
      icon: "i-hugeicons:reddit"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/crawfordteshane/",
      icon: "i-hugeicons:instagram"
    },
    // {
    //   name: "Facebook",
    //   url: "https://www.facebook.com/teshane.crawford",
    //   icon: "i-hugeicons:facebook-02"
    // },
    {
      name: "Discord",
      url: "https://discord.com/users/teshanecrawford#0001",
      icon: "i-hugeicons:discord"
    },
    {
      name: "Email",
      url: "mailto:crawfordteshane@gmail.com",
      icon: "i-hugeicons:mail-01"
    }
  ]
}

useHead({
  // title: contactData.title,
  meta: [
    {
      name: 'description',
      content: contactData.description
    },
    {
      property: 'og:title',
      content: contactData.title
    },
    {
      property: 'og:description',
      content: contactData.description
    },
    {
      name: 'twitter:title',
      content: contactData.title
    },
    {
      name: 'twitter:description',
      content: contactData.description
    }
  ]
})
</script>

<template>
  <div class="">
    <AppHeading
    :title="contactData.title"
    :description="contactData.description"
  >

    <div class="">
      <AppPageSeparator :text="contactData.heading" />
    </div>

    <div
      aria-labelledby="social-platforms"
      class="space-y-5"
    >
      <NuxtLink
        v-for="link in contactData.links"
        :key="link.name"
        :to="link.url"
        :aria-label="`Visit ${link.name} profile`"
        target="_blank"
        rel="noopener noreferrer"
        external
        class="group flex items-end gap-4 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
      >
        <span class="text-neutral-900 font-500 dark:text-neutral-100">
          {{ link.name }}
        </span>

        <div
          class="flex-1 border-b border-neutral-200 border-dashed transition-colors duration-200 dark:border-neutral-700 group-hover:border-neutral-400 dark:group-hover:border-neutral-500"
          aria-hidden="true"
        />

        <div
          class="border border-neutral-200 rounded bg-white/60 p-2 transition-colors duration-200 dark:border-neutral-700 dark:bg-white/10 group-hover:bg-neutral-50 dark:group-hover:bg-white/5"
          aria-hidden="true"
        >
          <Icon
            :name="link.icon"
            class="h-6 w-6 flex text-neutral-700 transition-colors duration-200 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100"
          />
        </div>
      </NuxtLink>
    </div>
  </AppHeading>
  </div>
</template>

<style scoped>
</style>
