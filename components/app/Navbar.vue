<script lang="ts" setup>
function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const { y: scroll } = useWindowScroll();
</script>

<template>
  <header class="header z-40">
    <NuxtLink
      class="absolute m-5 h-12 w-12 select-none font-bold font-mono outline-none xl:fixed" to="/"
      focusable="false">
      Teshane Crawford
    </NuxtLink>
    <button
      title="Scroll to top" aria-label="Scroll to top"
      class="fixed bottom-3 right-3 z-[100] h-10 w-10 rounded-full transition duration-300 print:hidden bg-gray-200 dark:bg-gray-700 hover:bg-[#8883] hover:opacity-100"
      :class="scroll > 300 ? 'opacity-30' : 'opacity-0 pointer-events-none'" @click="toTop()">
      <Icon name="i-ri-arrow-up-line" />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right print:opacity-0">
        <NuxtLink to="projects" title="Projects">
          <span class="hidden md:block">Projects</span>
          <UIcon name="i-fluent-folder-open-24-regular" class="md:hidden icon" />
        </NuxtLink>
        <NuxtLink to="/blogs" title="Blog">
          <span class="hidden md:block">Blog</span>
          <UIcon name="i-line-md-text-box-multiple" class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/about" title="About">
          <span class="hidden md:block">About</span>
          <UIcon name="i-fluent-document-one-page-sparkle-24-regular" class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/tools" title="Tools" class="hidden md:block">
          Tools
        </NuxtLink>
        <NuxtLink to="/chat" title="Let's Chat">
          <UIcon name="i-fluent-chat-12-regular" class="icon" />
        </NuxtLink>
        <a href="https://twitter.com/_d_shybrid" target="_blank" title="Twitter" class="hidden md:block">
          <UIcon name="i-ri-twitter-x-line" class="icon" />
        </a>
        <a href="https://github.com/TeshaneCrawford" target="_blank" title="GitHub" class="hidden md:block">
          <UIcon name="i-line-md-github" class="icon" />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="hidden md:block">
          <UIcon name="i-ri-rss-line" style="margin: 0 -0.125rem;" class="icon" />
        </a>
        <a class="text-gray-500">
          <AppSwitchThemeMode class="icon" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav>* {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right>* {
  margin: auto;
}

.spacer {
  flex: 1;
}

.icon {
  size: 1.2em;
  font-size: 1.2rem;
}
</style>
