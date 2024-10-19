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
    ['prose-container', 'prose max-w-4xl!']
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
      mono: 'DM Mono',
      serif: 'DM Serif Display',
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
        'a:hover': {
          color: '#f43f5e',
          "text-decoration": "underline",
          "text-underline-offset": "8px"
        },
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