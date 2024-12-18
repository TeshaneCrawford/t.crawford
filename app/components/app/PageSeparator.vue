<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="not-prose relative my-32">
    <div class="relative w-full overflow-x-hidden pl-5 md:pl-0">
      <div
        class="absolute h-px w-full from-transparent to-gray-1 bg-gradient-to-r md:from-gray-1 md:via-transparent md:to-gray-1"
      />
      <div
        class="h-px w-full border-t border-gray-6 border-dashed"
      />
    </div>
    <div
      class="absolute left-0 ml-5 h-auto w-auto flex items-center justify-center border border-gray-3 rounded-full bg-gray-1 px-3 py-1.5 text-[0.6rem] text-gray-11 tracking-widest uppercase shadow-sm md:left-1/2 md:ml-0 -translate-y-1/2 space-x-1 md:-translate-x-1/2"
    >
      <p class="leading-none">
        {{ text }}
      </p>
      <div
        class="h-5 w-5 flex translate-x-1 items-center justify-center border border-gray-3 rounded-full"
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
