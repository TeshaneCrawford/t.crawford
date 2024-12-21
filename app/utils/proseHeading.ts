export async function proseHeadingClick(event: MouseEvent, id: string) {
  event.preventDefault()

  // Update URL without triggering scroll
  window.history.pushState({}, '', `#${id}`)

  const element = document.getElementById(id)
  if (!element) return

  // Calculate offset based on viewport
  const offset = 100 // header height + padding
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.scrollY - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}