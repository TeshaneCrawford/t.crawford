<script setup lang="ts">
const currentYear = new Date().getFullYear()
const startYear = 2021
const yearDisplay = startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`
</script>

<template>
  <footer class="slide-enter ma p-7 animate-delay-1200!">
    <hr class="mx-32 border-[#ccc] border-dashed dark:border-[#c7c7c7]">
    <div class="mt-6 flex flex-col items-start justify-between pb-12 sm:flex-row sm:items-center">
      <div class="mb-4 sm:mb-0">
        <span class="text-sm op50 lg:ml-32">
          <a
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            rel="noopener noreferrer"
            style="color:inherit"
          >
            CC BY-NC-SA 4.0
          </a>
          {{ yearDisplay }} © Teshane Crawford
        </span>
        <div class="flex-auto" />
      </div>
      <div class="mb-4 -ml-2 lg:mr-28 sm:mb-0">
        <SocialIcons />
      </div>
    </div>
    <div class="text-center op70">
      <mark class="glow-effect badge-sm-green fw-medium important-rounded-none">
        <span class="">Site made with </span>
        <a
          href="https://nuxt.com"
          rel="noopener noreferrer"
          target="_blank"
          class="inline-flex items-center transition-opacity hover:opacity-75"
        >
          Nuxt
          <Icon name="i-vscode-icons-file-type-nuxt" class="ml-1" />
        </a>
      </mark>
    </div>
  </footer>
</template>

<style scoped>
.glow-effect {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 0.5rem 1rem;
}

.glow-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 25%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.6),
    transparent
  );
  transform: skewX(-20deg);
  animation: glow 2s infinite ease-in-out;
}

@keyframes glow {
  0% {
    left: -25%;
  }
  100% {
    left: 125%;
  }
}
</style>
