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
      class="absolute m-5 h-12 w-12 select-none pt-4 font-bold font-mono outline-none xl:fixed"
      to="/"
      focusable="false"
    >
      T.Crawford
    </NuxtLink>
    <button
      title="Scroll to top"
      fixed bottom-3 right-3 z-100 h-10 w-10 rounded-full bg-manatee-300 transition duration-300 print:hidden hover-bg-hex-8883 hover:op100
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <Icon name="i-hugeicons-arrow-up-01" />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <NuxtLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <Icon name="i-hugeicons:dashboard-circle-edit" md:hidden />
        </NuxtLink>
        <NuxtLink to="/blog" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <Icon name="i-hugeicons:quill-write-02" class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/photos" title="Photos">
          <span class="lt-md:hidden">Photos</span>
          <Icon  name="i-hugeicons:camera-01" class="md:hidden" />
        </NuxtLink>
        <NuxtLink to="/uses" class="lt-md:hidden" title="Uses">
          Uses
        </NuxtLink>
        <NuxtLink to="/chat" title="Let's Chat">
          <Icon name="i-hugeicons:conversation" style="" />
        </NuxtLink>
        <a href="https://twitter.com/_d_shybrid" target="_blank" title="Twitter" class="lt-md:hidden">
          <Icon name="i-hugeicons:new-twitter" style="" />
        </a>
        <a href="https://github.com/TeshaneCrawford" target="_blank" title="GitHub" class="lt-md:hidden">
          <Icon name="i-hugeicons-github" />
        </a>
        <a href="/rss.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <Icon name="i-hugeicons-rss" style="font-size:1.25rem; margin: -0.5;" />
        </a>
        <a class="text-manatee-500">
          <SwitchThemeMode />
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
</style>
