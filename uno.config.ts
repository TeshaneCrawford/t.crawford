import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['content/**/*.md'],
  },
  shortcuts: [
    ['prose-container', 'prose max-w-4xl!'],

    [/^badge-(.*)$/, ([, c]) => `bg-${c}4:10 text-${c}5 rounded`],
    [/^badge-xs-(.*)$/, ([, c]) => `badge-${c} text-xs px2 py0.5`],
    [/^badge-sm-(.*)$/, ([, c]) => `badge-${c} text-sm px3 py0.6`],
    [/^badge-lg-(.*)$/, ([, c]) => `badge-${c} px3 py0.8`],
    [/^badge-square-(.*)$/, ([, c]) => `badge-${c} w-7 h-7 text-lg font-200 flex flex-none items-center justify-center`],
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
      mono: 'DM Mono',
      serif: 'Playwrite GB S',
      cursive: 'Satisfy',
      dank: 'dank'
    },
    colors: {
      text: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      bg: {
        primary: 'var(--background-primary)',
        secondary: 'var(--background-secondary)',
      },
      accent: 'var(--accent)',
      scrollbar: 'var(--scrollbar)',
      'scrollbar-hover': 'var(--scrollbar-hover)',
      link: 'var(--link-color)',
      'link-hover': 'var(--link-hover-color)',
    },
    fontSize: {
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
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
    presetTypography({
      selectorName: "prose",
      cssExtend: {
        "p,a,li,ul,ol": {
          color: "#eeeee",
          'line-height': "2"
        },
        a: {
          "text-decoration": "none"
        },
        // 'a:hover': {
        //   color: '#f43f5e',
        //   "text-decoration": "underline",
        //   "text-underline-offset": "8px"
        // },
        // 'a:visited': {
        //   color: '#14b8a6',
        // },

      },
    }),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
