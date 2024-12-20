import unocss from '@unocss/eslint-config/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  unocss,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
    ignores: ['node_modules', '.nuxt', 'dist', '**/.*'],
  }
])
