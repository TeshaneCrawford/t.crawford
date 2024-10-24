<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="not-prose relative my-32">
    <div class="relative w-full overflow-x-hidden pl-5 md:pl-0">
      <div
        class="absolute h-px w-full from-transparent to-white bg-gradient-to-r dark:from-transparent md:from-white md:via-transparent dark:to-neutral-950 md:to-white md:dark:from-neutral-950 md:dark:via-transparent md:dark:to-neutral-950"
      />
      <div
        class="h-px w-full border-t border-neutral-300 border-dashed dark:border-neutral-600"
      />
    </div>
    <div
      class="absolute left-0 ml-5 h-auto w-auto flex items-center justify-center border border-neutral-100 rounded-full bg-white px-3 py-1.5 text-[0.6rem] text-neutral-500 tracking-widest uppercase shadow-sm md:left-1/2 md:ml-0 -translate-y-1/2 space-x-1 dark:border-neutral-800 dark:bg-neutral-900 md:-translate-x-1/2"
    >
      <p class="leading-none">
        {{ text }}
      </p>
      <div
        class="h-5 w-5 flex translate-x-1 items-center justify-center border border-neutral-100 rounded-full dark:border-neutral-800"
      >
        <svg
          class="h-3 w-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
        /></svg>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
