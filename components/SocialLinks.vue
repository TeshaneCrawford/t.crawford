<script setup lang="ts">
interface SocialLinksProps {
  links: {
    name: string;
    url: string;
    icon: string;
  }[];
}


const links = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/teshanecrawford/',
    icon: 'i-ri-linkedin-box-line',
  },
  {
    name: "GitHub",
    url: "https://github.com/TeshaneCrawford",
    icon: "i-ri-github-fill",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/8859340/teshane-crawford",
    icon: "i-ri-stack-overflow-line",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/_d_shybrid",
    icon: "i-ri-twitter-x-line",
  },
  {
    name: "Telegram",
    url: "https://t.me/TeshaneCrawford",
    icon: "i-ri-telegram-line",
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@teshanecrawford",
    icon: "i-ri-threads-line",
  }
]
</script>

<template>
  <div>
    <h2>Find Me On</h2>
    <div class="space-y-5">
      <NuxtLink v-for="link in links" :key="link.icon" :to="link.url" target="_blank" external class="flex items-end gap-4 dark:hover:text-gray-300">
        <span>{{ link.name }}</span>
        <div
          class="flex-1 border-b border-gray-300 border-dashed transition-colors hover:border-gray-700"
        />
        <div border dark:border-base border-rounded p-2>
          <icon class="h-6 w-6" :name="link.icon" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>