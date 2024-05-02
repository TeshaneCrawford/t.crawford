<script lang="ts" setup>
defineProps<{
  code: string
  language?: string
  filename?: string
  meta?: string
}>()

// const languageMap = {
//   'package.json': 'vscode-icons:file-type-node',
//   'tsconfig.json': 'vscode-icons:file-type-tsconfig',
//   '.npmrc': 'vscode-icons:file-type-npm',
//   '.editorconfig': 'vscode-icons:file-type-editorconfig',
//   '.eslintrc': 'vscode-icons:file-type-eslint',
//   '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
//   '.eslintignore': 'vscode-icons:file-type-eslint',
//   'eslint.config.js': 'vscode-icons:file-type-eslint',
//   'eslint.config.mjs': 'vscode-icons:file-type-eslint',
//   'eslint.config.cjs': 'vscode-icons:file-type-eslint',
//   '.gitignore': 'vscode-icons:file-type-git',
//   'yarn.lock': 'vscode-icons:file-type-yarn',
//   '.env': 'vscode-icons:file-type-dotenv',
//   '.env.example': 'vscode-icons:file-type-dotenv',
//   '.vscode/settings.json': 'vscode-icons:file-type-vscode',
//   'nuxt': 'vscode-icons:file-type-nuxt',
//   '.nuxtrc': 'vscode-icons:file-type-nuxt',
//   '.nuxtignore': 'vscode-icons:file-type-nuxt',
//   'nuxt.config.js': 'vscode-icons:file-type-nuxt',
//   'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
//   'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
//   'tailwind.config.js': 'vscode-icons:file-type-tailwind',
//   'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
//   vue: 'vscode-icons:file-type-vue',
//   ts: 'vscode-icons:file-type-typescript',
//   tsx: 'vscode-icons:file-type-typescript',
//   mjs: 'vscode-icons:file-type-js',
//   cjs: 'vscode-icons:file-type-js',
//   js: 'vscode-icons:file-type-js',
//   jsx: 'vscode-icons:file-type-js',
//   md: 'vscode-icons:file-type-markdown',
//   py: 'vscode-icons:file-type-python',
//   ico: 'vscode-icons:file-type-favicon',
//   npm: 'vscode-icons:file-type-npm',
//   pnpm: 'vscode-icons:file-type-pnpm',
//   npx: 'vscode-icons:file-type-npm',
//   yarn: 'vscode-icons:file-type-yarn',
//   bun: 'vscode-icons:file-type-bun',
//   yml: 'vscode-icons:file-type-yaml',
//   terminal: 'i-heroicons-command-line',
//   c : 'vscode-icons:file-type-csharp',
// }

const getLanguageIcon = (language: string) => {
  // const ext = language.split('.').pop()
  // return languageMap[ext as keyof typeof languageMap] || 'vscode-icons:file';
  const languageMap: { [key: string]: string } = {
    'package.json': 'vscode-icons:file-type-node',
    'tsconfig.json': 'vscode-icons:file-type-tsconfig',
    '.npmrc': 'vscode-icons:file-type-npm',
    '.editorconfig': 'vscode-icons:file-type-editorconfig',
    '.eslintrc': 'vscode-icons:file-type-eslint',
    '.eslintrc.cjs': 'vscode-icons:file-type-eslint',
    '.eslintignore': 'vscode-icons:file-type-eslint',
    'eslint.config.js': 'vscode-icons:file-type-eslint',
    'eslint.config.mjs': 'vscode-icons:file-type-eslint',
    'eslint.config.cjs': 'vscode-icons:file-type-eslint',
    '.gitignore': 'vscode-icons:file-type-git',
    'yarn.lock': 'vscode-icons:file-type-yarn',
    '.env': 'vscode-icons:file-type-dotenv',
    '.env.example': 'vscode-icons:file-type-dotenv',
    '.vscode/settings.json': 'vscode-icons:file-type-vscode',
    'nuxt': 'vscode-icons:file-type-nuxt',
    '.nuxtrc': 'vscode-icons:file-type-nuxt',
    '.nuxtignore': 'vscode-icons:file-type-nuxt',
    'nuxt.config.js': 'vscode-icons:file-type-nuxt',
    'nuxt.config.ts': 'vscode-icons:file-type-nuxt',
    'nuxt.schema.ts': 'vscode-icons:file-type-nuxt',
    'tailwind.config.js': 'vscode-icons:file-type-tailwind',
    'tailwind.config.ts': 'vscode-icons:file-type-tailwind',
    vue: 'vscode-icons:file-type-vue',
    ts: 'vscode-icons:file-type-typescript',
    tsx: 'vscode-icons:file-type-typescript',
    mjs: 'vscode-icons:file-type-js',
    cjs: 'vscode-icons:file-type-js',
    js: 'vscode-icons:file-type-js',
    jsx: 'vscode-icons:file-type-js',
    md: 'vscode-icons:file-type-markdown',
    py: 'vscode-icons:file-type-python',
    ico: 'vscode-icons:file-type-favicon',
    npm: 'vscode-icons:file-type-npm',
    pnpm: 'vscode-icons:file-type-pnpm',
    npx: 'vscode-icons:file-type-npm',
    yarn: 'vscode-icons:file-type-yarn',
    bun: 'vscode-icons:file-type-bun',
    yml: 'vscode-icons:file-type-yaml',
    terminal: 'i-heroicons-command-line',
    c : 'vscode-icons:file-type-csharp',
  };

  return languageMap[language];
}
</script>

<template>
  <div class="mt-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300/40 dark:border-gray-700/40">
    <div class="overflow-hidden group relative pt-4">
      <Icon
        :name="getLanguageIcon(language || '')"
        class="absolute top-2 left-3 text-xs w-5 h-5"
      />
      <span v-if="filename" class="absolute top-2 left-10 text-sm font-mono">
        {{ filename }}
      </span>
      <ProseCodeCopy :code="code" />
      <slot />
    </div>
  </div>
</template>

<style scoped>
:deep(pre code .line) {
  display: block;
  min-height: 2rem;
}

:deep(pre) {
  @apply bg-gray-100 dark:bg-gray-950;
  @media (prefers-color-scheme: dark) {
    @apply bg-gray-900;
  }
  @apply rounded-t-none;
}
</style>

