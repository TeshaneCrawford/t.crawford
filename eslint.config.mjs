import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  unocss,
  // Your custom configs here
)
