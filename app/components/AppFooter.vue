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
      <mark class="badge-lg-green dark:badge-lg-green fw-medium important-rounded-none">
        <span class="">Site made with </span>
        <a
          href="https://nuxt.com"
          rel="noopener noreferrer"
          target="_blank"
          class="transition-opacity hover:opacity-75"
        >
          Nuxt
        </a>
      </mark>
    </div>
  </footer>
</template>

<style scoped></style>
