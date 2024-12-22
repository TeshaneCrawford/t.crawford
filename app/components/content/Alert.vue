<script lang="ts" setup>
import { ref, computed } from 'vue'
import InfoIcon from '../icons/InfoIcon.vue'
import WarningIcon from '../icons/WarningIcon.vue'
import DangerIcon from '../icons/DangerIcon.vue'

const isVisible = ref(true)

type AlertType = 'info' | 'warning' | 'danger'

const props = withDefaults(defineProps<{
  type: AlertType
}>(), {
  type: 'info',
})

const typeClasses: Record<AlertType, string> = {
  info: 'border-blue-300/40 dark:border-blue-700/40 bg-blue-200/20 dark:bg-blue-700/10 dark:text-blue-50 text-blue-950',
  warning: 'border-yellow-300/40 dark:border-yellow-700/40 bg-yellow-200/20 dark:bg-yellow-700/10 dark:text-yellow-50 text-yellow-950',
  danger: 'border-red-300/40 dark:border-red-700/40 bg-red-200/20 dark:bg-red-700/10 dark:text-red-50 text-red-950',
}

const IconComponent = computed(() => {
  switch (props.type) {
    case 'info':
      return InfoIcon
    case 'warning':
      return WarningIcon
    case 'danger':
      return DangerIcon
    default:
      return null
  }
})
</script>

<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-show="isVisible"
      class="alert my-8 flex items-center gap-3 border rounded-md px-4 py-4 text-sm"
      :class="typeClasses[props.type]"
      role="alert"
      :aria-label="`${props.type} alert`"
    >
      <component :is="IconComponent" v-if="IconComponent" class="mt-0.5 flex-shrink-0" />
      <div class="flex-1">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.alert :deep(*:first-child) {
  margin-top: 0;
}

.alert :deep(*:last-child) {
  margin-bottom: 0;
}
</style>
