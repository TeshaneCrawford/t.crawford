export function useScrollSpy(options = {
  root: null,
  threshold: [0, 1],
  rootMargin: '-20% 0px -80% 0px'
}) {
  const activeHeading = ref<string>('')

  onMounted(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
    if (headings.length === 0) return

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeHeading.value = entry.target.id
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    headings.forEach(heading => observer.observe(heading))

    onBeforeUnmount(() => {
      observer.disconnect()
    })
  })

  return {
    activeHeading
  }
}
