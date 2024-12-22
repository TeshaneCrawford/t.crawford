<script lang="ts" setup>
interface SocialLink {
  name: string
  url: string
  icon: string
}

const socials: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/TeshanCrawford', icon: 'i-hugeicons-github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/teshanecrawford/', icon: 'i-hugeicons-linkedin-01' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/teshanecrawford.com', icon: 'i-tabler-brand-bluesky' },
  { name: 'Twitter', url: 'https://twitter.com/TeshanCrawford', icon: 'i-hugeicons-new-twitter' },
  { name: 'Discord', url: 'https://discord.gg/4Q3avDs', icon: 'i-hugeicons-discord' },
  { name: 'Instagram', url: 'https://www.instagram.com/crawfordteshane/', icon: 'i-hugeicons-instagram' },
  { name: 'Threads', url: 'https://www.threads.net/@teshanecrawford', icon: 'i-hugeicons-threads-ellipse' },
]
</script>

<template>
  <nav aria-label="Social media links" class="flex">
    <NuxtLink
      v-for="(social, index) in socials"
      :key="index"
      :to="social.url"
      :title="social.name"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-md px-2 text-gray-9 transition-colors duration-200 hover:text-gray-11 focus:outline-none focus:ring-2 focus:ring-gray-7"
      :aria-label="`Visit ${social.name} profile`"
    >
      <Icon :name="social.icon" class="text-xl" :alt="`${social.name} logo`" />
    </NuxtLink>
  </nav>
</template>

<style scoped>
</style>
