<script lang="ts" setup>
const route = useRoute()

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
      class="absolute m-5 h-10 w-16 select-none outline-none transition-transform duration-300 xl:fixed"
      :class="route.path === '/' ? 'op100! after:w-full' : 'after:w-0'"
      to="/"
      focusable="false"
    >
      <AnimatedLogo />
    </NuxtLink>
    <button
      title="Scroll to top"
      fixed
      bottom-3
      right-3
      z-100
      h-10
      w-10
      rounded-full
      transition
      duration-300
      print:hidden
      hover-bg-hex-8883
      hover:op100
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <Icon name="i-hugeicons-arrow-up-01" />
    </button>
    <nav class="nav pr-4!">
      <div class="spacer" />
      <div class="right" print:op0>
        <NuxtLink
          to="/projects"
          title="Projects"
          class="nav-text relative"
          :class="route.path.startsWith('/projects') ? 'nav-text-active' : ''"
        >
          <span class="lt-md:hidden">Projects</span>
          <Icon name="i-hugeicons-dashboard-circle-edit" md:hidden />
        </NuxtLink>
        <NuxtLink
          to="/blog"
          title="Blog"
          class="nav-text relative"
          :class="route.path.startsWith('/blog') ? 'nav-text-active' : ''"
        >
          <span class="lt-md:hidden">Blog</span>
          <Icon name="i-hugeicons-quill-write-02" class="md:hidden" />
        </NuxtLink>
        <NuxtLink
          to="/photos"
          title="Photos"
          class="nav-text relative"
          :class="route.path.startsWith('/photos') ? 'nav-text-active' : ''"
        >
          <span class="lt-md:hidden">Photos</span>
          <Icon name="i-hugeicons-camera-01" class="md:hidden" />
        </NuxtLink>
        <NuxtLink
          to="/uses"
          class="nav-text relative lt-md:hidden"
          title="Uses"
          :class="route.path.startsWith('/uses') ? 'nav-text-active' : ''"
        >
          Uses
        </NuxtLink>
        <NuxtLink
          to="/chat"
          title="Let's Chat"
          class="nav-text relative"
          :class="route.path.startsWith('/chat') ? 'nav-text-active' : ''"
        >
          <Icon name="i-hugeicons-conversation" />
        </NuxtLink>
        <a
          href="https://twitter.com/_d_shybrid"
          target="_blank"
          title="Twitter"
          class="lt-md:hidden"
        >
          <Icon name="i-hugeicons:new-twitter" style="" />
        </a>
        <a
          href="https://github.com/TeshaneCrawford"
          target="_blank"
          title="GitHub"
          class="lt-md:hidden"
        >
          <Icon name="i-hugeicons-github" />
        </a>
        <a
          href="/rss.xml"
          target="_blank"
          title="RSS"
          class="lt-md:hidden"
        >
          <Icon name="i-hugeicons-rss" style="font-size:1.25rem; margin: -0.5;" />
        </a>
        <a class="">
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
  transition: all 0.2s ease;
  color: inherit;
  position: relative;
  z-index: 1;
  padding-bottom: 2px; /* Add padding for the border */
}

.nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -4px;
  right: -4px;
  height: 6px;
  background-color: var(--blue-9);
  opacity: 0;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease, opacity 0.2s ease;
  z-index: -1;
}

.nav a:hover::before {
  opacity: 0.15;
  transform: scaleX(1);
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: var(--blue-9);
  transition: width 0.3s ease;
  opacity: 0.8;
}

.nav a:hover::after {
  width: 100%;
}

/* Remove the opacity hover since we're using pseudo-elements */
.nav a:hover {
  opacity: 1;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right>* {
  margin: auto;
}

/* logo styles */
.logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
