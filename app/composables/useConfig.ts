import { defu } from 'defu'

interface DefaultConfig {
  iprose: {
    breadCrumb: boolean
    codeIcon: {
      [key: string]: string
    }
    padded: boolean
  }
}

const defaultConfig: DefaultConfig = {
  iprose: {
    breadCrumb: true,
    padded: true,
    codeIcon: {
      'package.json': 'catppuccin:package-json',
      'tsconfig.json': 'catppuccin:typescript-config',
      '.npmrc': 'catppuccin:npm',
      '.editorconfig': 'catppuccin:editorconfig',
      '.eslintrc': 'catppuccin:eslint',
      '.eslintrc.cjs': 'catppuccin:eslint',
      '.eslintignore': 'catppuccin:eslint',
      'eslint.config.js': 'catppuccin:eslint',
      'eslint.config.mjs': 'catppuccin:eslint',
      'eslint.config.cjs': 'catppuccin:eslint',
      '.gitignore': 'catppuccin:git',
      'yarn.lock': 'catppuccin:yarn',
      '.env': 'catppuccin:env',
      '.env.example': 'catppuccin:env',
      '.vscode/settings.json': 'catppuccin:vscode',
      'nuxt': 'catppuccin:nuxt',
      '.nuxtrc': 'catppuccin:nuxt',
      '.nuxtignore': 'catppuccin:nuxt',
      'nuxt.config.js': 'catppuccin:nuxt',
      'nuxt.config.ts': 'catppuccin:nuxt',
      'nuxt.schema.ts': 'catppuccin:nuxt',
      'tailwind.config.js': 'catppuccin:tailwind',
      'tailwind.config.ts': 'catppuccin:tailwind',
      'vue': 'catppuccin:vue',
      'ts': 'catppuccin:typescript',
      'tsx': 'catppuccin:typescript',
      'mjs': 'catppuccin:javascript',
      'cjs': 'catppuccin:javascript',
      'js': 'catppuccin:javascript',
      'jsx': 'catppuccin:javascript',
      'md': 'catppuccin:markdown',
      'mdc': 'catppuccin:markdown',
      'npm': 'catppuccin:npm',
      'pnpm': 'catppuccin:pnpm',
      'npx': 'catppuccin:npm',
      'yarn': 'catppuccin:yarn',
      'yml': 'catppuccin:yaml',
      'xml': 'catppuccin:xml',
      'vite': 'catppuccin:vite',
      'json': 'catppuccin:json',
      'terminal': 'catppuccin:exe',
      'powershell': 'catppuccin:powershell',
      'bash': 'catppuccin:bash',
      'csharp': 'catppuccin:csharp',
      'cs': 'catppuccin:csharp',
      'nuget': 'catppuccin:nuget',
      'css': 'catppuccin:css',
      'html': 'catppuccin:html',
      'unocss': 'catppuccin:unocss',
      'scss': 'catppuccin:sass',
      'pandacss': 'catppuccin:panda-css',
      'sql': 'catppuccin:database',
      'azure': 'catppuccin:azure-pipelines',
      'docker': 'catppuccin:docker'
    },
  },
}

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.teshanePortfolios || {})

  return computed(
    () => {
      const processedConfig = defu(appConfig.value, defaultConfig)
      const iprose = processedConfig.iprose

      return {
        ...appConfig.value,
        ...processedConfig,
        iprose: {
          ...iprose,
        } as typeof iprose,
      }
    },
  )
}