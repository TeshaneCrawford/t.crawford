<script lang="ts" setup>
import { useElementSize } from '@vueuse/core';

defineProps({
  as: {
    type: String,
    default: 'div',
  },
})

const container = ref()

const content = ref()

onMounted(() => {
  content.value = container.value?.children[0]
})

const { height: targetHeight } = useElementSize(content, undefined, {
  box: 'border-box',
})

interface IsActive {
  isActive: Ref<boolean>
}

const { isActive } = inject('isActive') as IsActive

const height = computed(() => (isActive.value ? targetHeight.value : 0))
</script>

<template>
  <component
    :is="as"
    ref="container"
    :style="{ height: `${height}px` }"
  >
    <slot />
  </component>
</template>

<style scoped></style>
