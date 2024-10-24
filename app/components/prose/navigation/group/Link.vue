<script lang="ts" setup>
const props = defineProps<{
  label?: string
  to?: string
  icon?: string
  noExternal?: boolean
}>()

const iconClass = 'w-5 h-5'

const external = computed(() => {
  if (!props.to || props.noExternal)
    return false

  return props.to.startsWith('http')
})
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block py-1 transition ease-in hover:text-gray-950 hover:dark:text-gray-50"
    rel="noopener"
  >
    <div
      class="text-xs text-gray-500 font-medium dark:text-gray-400"
      :class="{ 'ml-7': icon }"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </div>

    <div class="flex gap-x-1">
      <div class="flex items-center gap-x-2">
        <slot
          name="icon"
          :class="iconClass"
        >
          <span
            v-if="icon"
            :class="[icon, iconClass]"
          />
        </slot>

        <slot />
      </div>

      <div
        v-if="external"
        class="i-ri-arrow-right-up-line h-3 w-3"
      />
    </div>
  </NuxtLink>
</template>

<style scoped></style>
