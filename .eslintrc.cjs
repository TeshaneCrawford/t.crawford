module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', '@unocss'],
  rules: {
      // General rules
      // quotes: ['error', 'single', { avoidEscape: true }],

      // Vuejs rules
      'vue/max-attributes-per-line': 'off',
      'vue/multi-word-component-names': 'off',
      // 'vue/object-curly-spacing': ['error', 'always'],
      // 'vue/key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
      // 'vue/arrow-spacing': ['error', { before: true, after: true }],
      // 'vue/comma-dangle': ['error', 'always-multiline'],
      // 'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
  }
}