<template>
  <div class="mx-auto max-w-[90rem] flex gap-x-8 px-4 lg:px-8 sm:px-6">
    <!-- Desktop TOC Skeleton -->
    <aside class="hidden lg:block lg:w-64 lg:flex-none">
      <div class="space-y-4">
        <div class="h-6 w-32 rounded bg-gray-4" />
        <div class="space-y-3">
          <div v-for="i in 5" :key="i" class="h-4 w-48 rounded bg-gray-4" />
        </div>
      </div>
    </aside>

    <!-- Main Content Skeleton -->
    <div class="mx-auto max-w-none min-w-0 w-full">
      <!-- Breadcrumb Skeleton -->
      <div class="mb-8 flex gap-2">
        <div class="h-5 w-20 rounded bg-gray-4" />
        <div class="h-5 w-20 rounded bg-gray-4" />
        <div class="h-5 w-32 rounded bg-gray-4" />
      </div>

      <!-- Header Skeleton -->
      <div class="mb-8 space-y-4">
        <div class="h-10 w-2/3 rounded bg-gray-4" />
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-full bg-gray-4" />
            <div class="space-y-2">
              <div class="h-4 w-32 rounded bg-gray-4" />
              <div class="h-4 w-24 rounded bg-gray-4" />
            </div>
          </div>
          <div class="flex gap-4">
            <div class="h-4 w-24 rounded bg-gray-4" />
            <div class="h-4 w-24 rounded bg-gray-4" />
          </div>
        </div>
      </div>

      <!-- Content Skeleton -->
      <div class="max-w-3xl space-y-4">
        <div v-for="i in 8" :key="i" class="space-y-3">
          <div class="h-4 w-full rounded bg-gray-4" />
          <div class="h-4 w-5/6 rounded bg-gray-4" />
          <div class="h-4 w-4/6 rounded bg-gray-4" />
        </div>
      </div>
    </div>
  </div>
</template>
