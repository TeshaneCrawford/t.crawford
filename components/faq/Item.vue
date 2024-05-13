<script lang="ts" setup>
defineProps({
  as: {
    type: String,
    default: 'div',
  },
})

const container = ref()

interface Context {
  peers: Ref<HTMLElement[]> | undefined;
  activeItem: Ref<number>;
  setActive: (index: number) => void;
}

const context = inject<Context>('details-context');

const index = computed(() => {
  return context?.peers?.value ? context.peers.value.indexOf(container.value) : -1
})

const isActive = computed(() => index.value === (context?.activeItem?.value ?? -1))

const toggle = () => {
  if (context) {
    context.setActive(index.value)
  }
}

provide('isActive', isActive)
</script>

<template>
  <component
    :is="as"
    ref="container"
  >
    <slot
      :toggle
      :is-active
    />
  </component>
</template>

<style scoped></style>
