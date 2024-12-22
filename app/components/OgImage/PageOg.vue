<script lang="ts" setup>
withDefaults(defineProps<{
  link?: string
}>(), {
  link: '/home',
})

// inspired by Lukas Guschlbauer's <https://www.der-lukas.net>
</script>

<template>
  <div
    class="size-full bg-#121212 px-20 py-10 text-[#E6E6E6] tracking-tight font-mono"
  >
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
    <div class="size-full justify-end">
      <h1 class="w-500px text-100px/[1] font-600 tracking-tighter">
        Teshane Crawford
      </h1>

      <div class="my-4 block b-(t-1 #939395/50)" />

      <div class="flex flex-nowrap items-center justify-between text-8/[1]">
        <p>Software Engineer</p>
        <p>{{ link }}</p>
      </div>
    </div>

    <div class="absolute right-16 top-16 text-[1.5rem] font-mono italic">
      T. Crawford
    </div>
  </div>
</template>

<style scoped></style>
