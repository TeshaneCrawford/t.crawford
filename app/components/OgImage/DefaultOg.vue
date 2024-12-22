<script setup lang="ts">
/* eslint-disable vue/require-v-for-key */
defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: null,
  },
  tags: {
    type: Array as () => string[],
    default: () => [],
  },
})
</script>

<template>
  <article class="h-full w-full flex flex-col items-start justify-end bg-#121212 px-16 pb-42 text-[#E6E6E6] font-semibold font-mono">
    <svg
      class="absolute right-0 top-0"
      width="1200"
      height="675"
      viewBox="0 0 1200 675"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style="mix-blend-mode:overlay" opacity="0.7" filter="url(#filter0_f_448_25)">
        <circle
          cx="901.5"
          cy="45.5"
          r="199.5"
          fill="#282828"
        />
        <circle
          cx="600.5"
          cy="216.5"
          r="199.5"
          fill="#1C1C1C"
        />
        <circle
          cx="179.5"
          cy="317.5"
          r="199.5"
          fill="#121212"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_448_25"
          x="-240"
          y="-374"
          width="1561"
          height="1111"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="110" result="effect1_foregroundBlur_448_25" />
        </filter>
      </defs>
    </svg>
    <header class="text-5xl">
      {{ title }}
    </header>
    <div class="mt-10 flex flex-col text-[1.85rem] text-[#CFCFCF]">
      <div
        v-if="date"
        class="mb-4 flex flex-row"
      >
        <div class="mr-6">
          Published
        </div>
        <div class="mx-8 font-semibold">
          {{ date }}
        </div>
      </div>
      <div
        v-if="tags?.length"
        class="mt-4 flex flex-row"
      >
        <div class="mr-6">
          Tags:
        </div>
        <div class="mx-8 flex flex-row gap-4">
          <template v-for="(tag, index) in tags">
            <span v-if="index > 0">•</span>
            <span>{{ tag }}</span>
          </template>
        </div>
      </div>
    </div>
  </article>
</template>
