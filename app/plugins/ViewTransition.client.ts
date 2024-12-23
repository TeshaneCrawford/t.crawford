export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    if (!document.startViewTransition) return

    const route = useRoute()
    if (route.name === 'blog-article') {
      document.startViewTransition(() => {
        // This callback is called when the DOM is updated
      })
    }
  })
})
