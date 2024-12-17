import { ContentRenderer } from '#components'
import type { Collections } from '@nuxt/content'

export default defineComponent({
  props: {
    path: {
      type: String as () => keyof Collections,
      required: true
    },
  },
  async setup(props) {
    if (import.meta.dev) {
      const { data } = await useAsyncData(() =>
        queryCollection('content').path(props.path!).first()
      )
      return () => h(ContentRenderer, { value: data.value! })
    }
    const value = await queryCollection('content').path(props.path!).first()
    return () => h(ContentRenderer, { value })
  },
})