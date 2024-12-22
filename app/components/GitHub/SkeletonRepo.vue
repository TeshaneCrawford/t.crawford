<template>
  <article
    b="~ black op-10"
    dark-b="white op-10"
    trans rounded-md p-4 text-xs shadow-sm
    class="bg-black/2 dark:bg-white/2"
  >
    <div flex="~ col gap-3" h-full>
      <div flex="~ gap-2" items-center justify-between>
        <div m0 flex="~ gap-2" items-center>
          <div class="skeleton h-5 w-5 rounded" />
          <div class="skeleton h-4 w-32 rounded" />
        </div>
        <div class="skeleton h-4 w-16 rounded-sm" />
      </div>

      <div class="skeleton h-12 w-full rounded" />

      <div flex items-center justify-between gap-4>
        <div flex items-center gap-4>
          <div class="skeleton h-4 w-24 rounded" />
        </div>
        <div flex items-center gap-4>
          <div class="skeleton h-4 w-8 rounded" />
          <div class="skeleton h-4 w-8 rounded" />
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.skeleton {
  @apply bg-neutral-200 dark:bg-neutral-700 animate-pulse;
}
</style>
