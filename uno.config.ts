import {
  type CSSObject,
  type RuleContext,
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
} from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import { parseColor } from '@unocss/preset-mini/utils'

const typographyCssExtend: Record<string, CSSObject> = {
  'a': {
    'display': 'inline-block',
    'line-height': '1.5',
    'border-bottom': '1px dashed rgba(var(--c-context), 0.5)',
    'text-decoration': 'none',
    'transition': 'all 0.3s ease-in-out',
  },
  'a:hover': {
    'border-bottom': '1px solid rgba(var(--c-context), 1)',
  },
  'pre': {
    'background': '#eee !important',
    'font-family': 'sans',
  },
  '.dark pre': {
    background: '#222 !important',
  },
  'blockquote': {
    'border-left': '0.1em solid rgba(168,85,247,.4)',
  },
}

export default defineConfig({
  shortcuts: [
    ['text', 'text-primary-text'],

    ['linear-text', 'text-transparent bg-clip-text bg-gradient-to-r'],
    ['text-p-r', 'linear-text from-cyan to-indigo'],

    {
      'bg-base': 'bg-white dark:bg-black',
      'border-base': 'border-[#8884]',
    },
    [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],

    ['icon', 'w-4.5 h-4.5 cursor-pointer select-none transition-opacity-300 ease-in-out text'],
    ['icon-btn', 'icon color-inherit op64 hover-op100 hover-color-teal-500 dark-hover-color-inherit'],
    ['icon-link', 'icon color-inherit op64 hover:op100 hover-text-red-300 dark-hover-color-inherit'],
    ['icon-text', 'color-inherit op64 hover:op100 hover-text-purple dark-hover-color-inherit'],
    ['linkInProse', 'trans c-context'],
  ],
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
    [/^o-(.*)$/, ([, body]: string[], { theme }: RuleContext) => {
      const color = parseColor(body, theme)
      if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
        return {
          '--c-context': `${color.cssColor.components.join(',')}`,
        }
      }
      else {
        return {
          '--c-context': color?.color,
        }
      }
    }],
    [/^(.+)::(.+)$/, ([, n, v], { theme }) => {
      const color = parseColor(v, theme)
      if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
        return {
          [`--${n}`]: `${color.cssColor.components.join(',')}`,
        }
      }
      return {
        [`--${n}`]: v,
      }
    }],
  ],
  theme: {
    colors: {
      context: 'rgba(var(--c-context),%alpha)',
      primary: {
        text: 'rgba(var(--text),%alpha)',
      },
      level: {
        0: 'var(--gc-level-0)',
        1: 'var(--gc-level-1)',
        2: 'var(--gc-level-2)',
        3: 'var(--gc-level-3)',
        4: 'var(--gc-level-4)',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    // presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetUseful({
      icons: {
        extraProperties: {
          'display': 'inline-block',
          'height': '1.2em',
          'width': '1.2em',
          'vertical-align': 'text-bottom',
        },
      },
      typography: { cssExtend: typographyCssExtend },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  safelist: [
    'i-ri-menu-2-fill',
    Array.from({ length: 5 }, (j, i) => `fill-level-${i}`),
    'sm-fsc max-w-75'.split(' '),
  ].flat(),
})