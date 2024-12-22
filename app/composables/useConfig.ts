// @unocss-include

import { defu } from 'defu'

interface DefaultConfig {
  iprose: {
    breadCrumb: boolean
    padded: boolean
  }
}

const langIcons = {
  // package managers
  pnpm: 'catppuccin:pnpm',
  npm: 'catppuccin:npm',
  yarn: 'catppuccin:yarn',
  bun: 'catppuccin:bun',
  deno: 'catppuccin:deno',
  // frameworks
  vue: 'catppuccin:vue',
  svelte: 'catppuccin:svelte',
  angular: 'catppuccin:angular',
  react: 'catppuccin:typescript-react',
  next: 'catppuccin:next',
  nuxt: 'catppuccin:nuxt',
  solid: 'catppuccin:solid',
  astro: 'catppuccin:astro',
  // bundlers
  rollup: 'catppuccin:rollup',
  webpack: 'catppuccin:webpack',
  vite: 'catppuccin:vite',
  esbuild: 'catppuccin:esbuild',
  bash: 'catppuccin:bash',
  // languages
  csharp: 'catppuccin:csharp',
  cs: 'catppuccin:csharp',
  powershell: 'catppuccin:powershell',
  ps1: 'catppuccin:powershell',
  pwsh: 'catppuccin:powershell',
  shell: 'catppuccin:powershell',
  terminal: 'catppuccin:exe',
  cmd: 'catppuccin:exe',
  batch: 'catppuccin:batch',
  python: 'catppuccin:python',
  py: 'catppuccin:python',
  ruby: 'catppuccin:ruby',
  rb: 'catppuccin:ruby',
  java: 'catppuccin:java',
  php: 'catppuccin:php',
  go: 'catppuccin:go',
  rust: 'catppuccin:rust',
  rs: 'catppuccin:rust',
  docker: 'catppuccin:docker',
  dockerfile: 'catppuccin:docker',
  mermaid: 'catppuccin:mermaid',
}

const fileIcons = {
  'package.json': 'catppuccin:package-json',
  'tsconfig.json': 'catppuccin:typescript-config',
  '.npmrc': 'catppuccin:npm',
  '.editorconfig': 'catppuccin:editorconfig',
  '.eslintrc': 'catppuccin:eslint',
  '.eslintignore': 'catppuccin:eslint',
  'eslint.config': 'catppuccin:eslint',
  '.gitignore': 'catppuccin:git',
  '.gitattributes': 'catppuccin:git',
  '.env': 'catppuccin:env',
  '.env.example': 'catppuccin:env',
  '.vscode': 'catppuccin:vscode',
  'tailwind.config': 'catppuccin-tailwind',
  'uno.config': 'catppuccin-unocss',
  'vite.config': 'catppuccin:vite',
  'webpack.config': 'catppuccin:webpack',
  'esbuild.config': 'catppuccin:esbuild',
  'rollup.config': 'catppuccin:rollup',
  'jest.config': 'catppuccin:jest',
  'babel.config': 'catppuccin:babel',
  'Dockerfile': 'catppuccin:docker',
  'docker-compose.yml': 'catppuccin:docker',
  'docker-compose.yaml': 'catppuccin:docker',
  'requirements.txt': 'catppuccin:python',
  'Gemfile': 'catppuccin:ruby',
  'Cargo.toml': 'catppuccin:rust',
  'go.mod': 'catppuccin:go',
  'composer.json': 'catppuccin:php',
  'nuxt.config': 'catppuccin:nuxt',
}

const extIcons = {
  '.ts': 'catppuccin-typescript',
  '.tsx': 'catppuccin-typescript',
  '.mjs': 'catppuccin:javascript',
  '.cjs': 'catppuccin:javascript',
  '.json': 'catppuccin:json',
  '.js': 'catppuccin:javascript',
  '.jsx': 'catppuccin:javascript',
  '.md': 'catppuccin:markdown',
  '.py': 'catppuccin:python',
  '.ico': 'catppuccin:favicon',
  '.html': 'catppuccin-html',
  '.css': 'catppuccin-css',
  '.yml': 'catppuccin:yaml',
  '.yaml': 'catppuccin:yaml',
  '.ps1': 'catppuccin:powershell',
  '.psm1': 'catppuccin:powershell',
  '.psd1': 'catppuccin:powershell',
  '.cs': 'catppuccin:csharp',
  '.csx': 'catppuccin:csharp',
  '.bash': 'catppuccin:bash',
  '.bat': 'catppuccin:batch',
  '.cmd': 'catppuccin:exe',
  '.rb': 'catppuccin:ruby',
  '.java': 'catppuccin:java',
  '.php': 'catppuccin:php',
  '.go': 'catppuccin:go',
  '.rs': 'catppuccin:rust',
}

const iconMap = new Map<string, string>()

const defaultConfig: DefaultConfig = {
  iprose: {
    breadCrumb: true,
    padded: true,
  },
}

export function getLangIcon(lang?: string, filename?: string) {
  let icon
  if (filename) {
    const parts = filename.split('.')
    const ext = parts.pop()

    if (iconMap.has(filename) || iconMap.has(`.${ext}`)) {
      return iconMap.get(filename) ?? iconMap.get(`.${ext}`)
    }

    for (const key in fileIcons) {
      for (let i = 0; i < parts.length; i++) {
        const name = parts.slice(i).join('.')
        if (name.includes(key)) {
          icon = fileIcons[key as keyof typeof fileIcons]
          iconMap.set(filename, icon)
          return icon
        }
      }
    }

    if (!icon) {
      icon = extIcons[`.${ext}` as keyof typeof extIcons] ?? icon
      if (icon) {
        iconMap.set(`.${ext}`, icon)
        return icon
      }
    }
  }

  if (lang) {
    icon = langIcons[lang as keyof typeof langIcons] ?? icon
  }

  return icon ?? 'i-vscode-icons:default-file'
}

export function useConfig() {
  const appConfig = computed(() => useAppConfig()?.teshanePortfolios || {})

  return computed(() => {
    const processedConfig = defu(appConfig.value, defaultConfig)
    const iprose = processedConfig.iprose

    return {
      ...appConfig.value,
      ...processedConfig,
      iprose: {
        ...iprose,
      } as typeof iprose,
    }
  })
}
