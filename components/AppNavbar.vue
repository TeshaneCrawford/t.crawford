<script lang="ts" setup>
import {css} from '../styled-system/css'
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header">
    <NuxtLink class="logo-sec" to="/" focusable="false">
      Logo
    </NuxtLink>
    <button
      title="Scroll to top"
      class="scroll-button"
      :class="scroll"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <NuxtLink to="/projects" title="Projects">
          <span :class="css({ hideBelow: 'md' })">Projects</span>
          <span :class="css({ hideFrom: 'md' })"><Icon name="i-ri-folders-line" /></span>
        </NuxtLink>
        <NuxtLink to="/blog" title="Blog">
          <span :class="css({ hideBelow: 'md' })">Blog</span>
          <Icon name="i-ri-newspaper-line" class="hides" />
        </NuxtLink>
        <NuxtLink to="/about" :class="css({ hideBelow: 'md' })" title="About">
          About
        </NuxtLink>
        <NuxtLink to="/resume" title="Resume">
          <span :class="css({ hideBelow: 'md' })">Resume</span>
          <Icon name="i-ri-file-copy-2-line" class="hides" />
        </NuxtLink>
        <NuxtLink to="/tools" :class="css({ hideBelow: 'md' })" title="Tools">
          Tools
        </NuxtLink>
        <NuxtLink to="/chat" title="Let's Chat">
          <Icon name="i-ri-chat-1-line" />
        </NuxtLink>
        <NuxtLink to="/contact" title="Contact">
          <Icon name="i-ri-mail-line" />
        </NuxtLink>
        <a href="https://twitter.com/_d_shybrid" target="_blank" title="Twitter" :class="css({ hideBelow: 'md' })">
          <Icon name="ri-twitter-line" />
        </a>
        <a href="https://github.com/TeshaneCrawford" target="_blank" title="GitHub" :class="css({ hideBelow: 'md' })">
          <Icon name="i-uil-github-alt" />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" :class="css({ hideBelow: 'md' })">
          <Icon name="i-la-rss-square" style="font-size:1.25rem; margin: 0 -0.125rem;" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.scroll-button {
  position: fixed;
  right: 0.75rem;
  bottom: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  z-index: 100;
}

.scroll-button:hover {
  opacity: 1;
  --un-bg-opacity: 0.2;
  background-color: rgba(136, 136, 136, var(--un-bg-opacity));
}

@media print {
  .scroll-button {
    display: none;
  }
}

.scroll {
  opacity: 0;
  pointer-events: none;
}

.scroll:hover {
  opacity: 0.3;
  pointer-events: auto;
}

.logo-sec {
  width: 3rem;
  height: 3rem;
  position: absolute;
  margin: 1.25rem;
  -webkit-user-select: none;
  user-select: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  z-index: 40;
}

@media (min-width: 1280px) {
  .logo-sec {
    position: fixed;
  }
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

/* @media (max-width: 767.9px) {
  .hide {
    display: none;
  }
} */

@media (min-width: 768px) {
  .hides {
    display: none;
  }
}
</style>
