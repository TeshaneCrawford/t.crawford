<script lang="ts" setup>
const colorMode = useColorMode()

function toggleDark(event: MouseEvent) {
  const isAppearanceTransition = document.startViewTransition()
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light')
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const transition = document.startViewTransition(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
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
            ? '::view-transition-old(theme-root)'
            : '::view-transition-new(theme-root)',
        },
      )
    })
}
</script>

<template>
  <button
    aria-label="Color Mode"
    :title="`Enable ${colorMode.value === 'dark' ? 'Light' : 'Dark'} Mode`"
    class="group link inline-block pr-2 hover:text-gray-11"
    @click.prevent="toggleDark"
  >
    <div class="icon">
      <ColorScheme>
        <template v-if="colorMode.value === 'dark'">
          <Icon
            name="i-hugeicons-moon-01"
            class="icon icon--on"
          />
        </template>
        <template v-else>
          <Icon
            name="i-hugeicons-sun-02"
            class="icon--on icon"
          />
        </template>
      </ColorScheme>
    </div>
  </button>
</template>

<style scoped></style>
