import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// Radix UI Colors Integration Setup
import * as colors from '@radix-ui/colors'

type RadixColorScale = { [key: string]: string }
type RadixColors = { [key: string]: RadixColorScale }

// Helper to convert camelCase to kebab-case
const toKebabCase = (str: string) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

// Generate color variables for both light and dark modes
const generateThemeVariables = () => {
  const lightTheme: Record<string, string> = {}
  const darkTheme: Record<string, string> = {}
  const radixColors = colors as RadixColors

  for (const [key, value] of Object.entries(radixColors)) {
    // Skip dark themes as we'll process them with their light counterparts
    if (key.endsWith('Dark')) continue

    const baseKey = toKebabCase(key)
    const darkKey = `${key}Dark`

    // Process light theme values
    Object.entries(value).forEach(([step, color]) => {
      const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
      lightTheme[colorKey] = color
    })

    // Process dark theme values if they exist
    if (darkKey in radixColors) {
      const darkScale = radixColors[darkKey] as RadixColorScale
      Object.entries(darkScale).forEach(([step, color]) => {
        const colorKey = `--${baseKey}-${step.replace(/[^0-9]/g, '')}`
        darkTheme[colorKey] = color
      })
    }
  }

  return { lightTheme, darkTheme }
}

const { lightTheme, darkTheme } = generateThemeVariables()

export default defineConfig({
  content: {
    filesystem: ['content/**/*.md'],
  },
  shortcuts: [
    ['prose-container', 'prose max-w-6xl!'],
    // Update nav-specific shortcuts with correct Radix colors
    ['nav-link', 'text-gray-11 hover:text-gray-12 transition-colors duration-200'],
    ['nav-label', 'text-sm text-gray-11'],
    ['nav-container', 'flex flex-col'], // removed max-w-45% from here
    // ...existing shortcuts...
    [/^badge-(.*)$/, ([, c]) => `bg-${c}-3:10 text-${c}-11 rounded`],
    [/^badge-xs-(.*)$/, ([, c]) => `badge-${c} text-xs px2 py0.5`],
    [/^badge-sm-(.*)$/, ([, c]) => `badge-${c} text-sm px3 py0.6`],
    [/^badge-lg-(.*)$/, ([, c]) => `badge-${c} px3 py0.8`],
    [/^badge-square-(.*)$/, ([, c]) => `badge-${c} w-7 h-7 text-lg font-200 flex flex-none items-center justify-center`],
    ['toc-link', 'text-gray-11 hover:text-gray-12 transition-colors duration-200'],
    ['prose-blog', 'prose prose-lg max-w-none'],
    ['toc-active', 'text-gray-12 font-medium'],
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
      mono: 'DM Mono',
      serif: 'Playwrite GB S',
      cursive: 'Satisfy',
      dank: 'dank',
    },
    colors: Object.fromEntries(
      Object.entries(colors as RadixColors)
        .filter(([name]) => !name.endsWith('Dark'))
        .map(([name]) => [
          toKebabCase(name),
          Object.fromEntries(
            Array.from({ length: 12 }, (_, i) => [
              i + 1,
              `var(--${toKebabCase(name)}-${i + 1})`,
            ]),
          ),
        ]),
    ),
    fontSize: {
      'base': 'var(--font-size-base)',
      'lg': 'var(--font-size-lg)',
      'xl': 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
    },
  },
  rules: [
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'color': 'inherit',
        // Avoid crushing of icons in crowded situations
        'min-width': '1.2em',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `
        :root {
          ${Object.entries(lightTheme)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n          ')}
        }

        .dark {
          ${Object.entries(darkTheme)
            .map(([key, value]) => `${key}: ${value};`)
            .join('\n          ')}
        }
      `,
    },
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: [
    // Color variations for common utilities
    ...Array.from({ length: 12 }, (_, i) => [
      `text-red-${i + 1}`,
      `text-blue-${i + 1}`,
      `text-green-${i + 1}`,
      `border-red-${i + 1}`,
      `border-blue-${i + 1}`,
      `border-green-${i + 1}`,
      `bg-red-${i + 1}`,
      `bg-blue-${i + 1}`,
      `bg-green-${i + 1}`,
    ]).flat(),
    // Border utilities
    'border',
    'border-2',
    'rounded',
    // Spacing utilities
    'p-2',
    'items-end',
    'text-right',
    'mt-16',
    'pt-8',
    'mt-2',
    'lg:w-64',
    'xl:w-72',
    'lg:flex',
    'lg:gap-8',
    'min-w-0',
    'flex-1',
    'mb-8',
    'space-y-2.5',
    'sticky',
    'top-8',
    'gap-x-8',
    'lg:flex-none',
    'xl:flex-none',
    'text-4xl',
    'font-bold',
    'font-medium',
    'text-sm',
    'space-y-3',
    'pl-4',
    'pl-6',
    'transition',
    'leading-normal',
    'duration-200',
    'mt-2.5',
    'ml-4',
    'opacity-40',
    'hover:opacity-100',
    'transition-opacity',
    'duration-200',
    'top-24',
    'flex-col',
    'md:flex-row',
    'md:justify-between',
    'gap-8',
    'w-full',
    'md:max-w-45%',
    'items-start',
    'text-left',
    'block',
    'mb-2',
  ],
})
