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
      class="fixed bottom-3 right-3 z-[100] h-10 w-10 rounded-full transition duration-300 print:hidden hover-bg-hex-8883 hover:opacity-100"
      :class="scroll > 300 ? 'opacity-30' : 'opacity-0! pointer-events-none'" @click="toTop()">
      <Icon name="i-ri-arrow-up-line" />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right print:opacity-0">
        <NuxtLink to="projects" title="Projects">
          <span class="">Projects</span>
          <Icon name="i-ri-folder-open-line" class="md:hidden" />
        </NuxtLink>
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
