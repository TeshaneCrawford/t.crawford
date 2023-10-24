import unocss from '@unocss/eslint-config/flat'

export default [
  unocss,
  // other configs
]

module.exports = {
    root: true,
    extends: '@nuxt/eslint-config',
    rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off'
    }
}