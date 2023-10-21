<script lang="ts" setup>
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <NuxtLink 
    class="w-12 h-12 absolute xl:fixed m-5 select-none outline-none"
    to="/" 
    focusable="false">
      Logo
    </NuxtLink>
    <button
      title="Scroll to top"
      fixed right-3 bottom-3 w-10 h-10 hover:op100 rounded-full
      hover-bg-hex-8883 transition duration-300 z-100 print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <NuxtLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <div i-ri-folders-line md:hidden />
        </NuxtLink>
        <NuxtLink to="/blog" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-ri-newspaper-line class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/about" class="lt-md:hidden" title="About">
          About
        </NuxtLink>
        <NuxtLink to="/resume" title="Resume">
          <span class="lt-md:hidden">Resume</span>
          <div i-ri-file-copy-2-line class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/tools" class="lt-md:hidden" title="Tools">
          Tools
        </NuxtLink>
        <NuxtLink to="/chat" title="Let's Chat">
          <Icon name="i-ri-chat-1-line" />
        </NuxtLink>
        <NuxtLink to="/contact" title="Contact">
          <Icon name="i-ri-mail-line" />
        </NuxtLink>
        <a href="https://twitter.com/_d_shybrid" target="_blank" title="Twitter" class="lt-md:hidden">
          <Icon name="i-ri-twitter-x-line" />
        </a>
        <a href="https://github.com/TeshaneCrawford" target="_blank" title="GitHub" class="lt-md:hidden">
          <Icon name="i-uil-github-alt" />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <Icon name="i-la-rss-square" style="font-size:1.25rem; margin: 0 -0.125rem;" />
        </a>
        <div class="text-gray-500">
          <SwitchThemeMode />
        </div>
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
</style>
