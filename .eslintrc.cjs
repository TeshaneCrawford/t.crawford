import unocss from '@unocss/eslint-config/flat'

export default [
    unocss,
]

module.exports = {
    root: true,
    extends: '@nuxt/eslint-config',
    rules: {
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off'
    }
}