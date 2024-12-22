// Tracks which heading is currently in view for table of contents highlighting
export function useScrollSpy(options = {
  root: null,
  threshold: [0, 1],
  // Adjust intersection margins to trigger slightly before/after actual intersection
  rootMargin: '-20% 0px -80% 0px',
}) {
  const activeHeading = ref<string>('')

  onMounted(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
    if (headings.length === 0) return

    // Update active heading when intersection changes
    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeHeading.value = entry.target.id
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    headings.forEach(heading => observer.observe(heading))

    // Cleanup observer on component unmount
    onBeforeUnmount(() => {
      observer.disconnect()
    })
  })

  return {
    activeHeading,
  }
}
