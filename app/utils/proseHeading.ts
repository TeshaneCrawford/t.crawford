// Handles smooth scrolling to heading elements with proper header offset compensation
export async function proseHeadingClick(event: MouseEvent, id: string) {
  event.preventDefault()

  // Update URL hash without default scroll behavior
  window.history.pushState({}, '', `#${id}`)

  const element = document.getElementById(id)
  if (!element) return

  // Compensate for fixed header height to prevent hiding content
  const offset = 100 // header height + padding
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.scrollY - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}
