<script lang="ts" setup>
const colorMode = useColorMode();


function toggleDark(event: MouseEvent) {

  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async() => {
    colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')
    await nextTick()
  })
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]
      document.documentElement.animate(
        {
          clipPath: colorMode.preference === 'dark'
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: colorMode.preference === 'dark'
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
}
</script>

<template>
  <button
    aria-label="Color Mode"
    :title="`Enable ${colorMode.value === 'dark' ? 'Light' : 'Dark'} Mode`"
    class="link group inline-block pr-2 hover:text-gray-700 dark:hover:text-gray-300"
    @click.prevent="toggleDark"
  >
      <ColorScheme>
        <template v-if="colorMode.value === 'dark'">
          <UIcon name="i-ri-moon-clear-fill" class="icon--on icon" />
        </template>
        <template v-else>
          <UIcon name="i-ri-sun-fill" class="icon--on icon" />
        </template>
      </ColorScheme>
  </button>
</template>

<style scoped></style>
