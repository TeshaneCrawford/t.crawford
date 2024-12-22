import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  unocss,
  // Your custom configs here
).overrideRules({
  'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
})
