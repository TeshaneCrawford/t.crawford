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
  shortcuts: [
    // ...
  ],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
      mono: 'DM Mono'
    },
    colors: {
        manatee: {
          50: 'var(--manatee-50)',
          100: 'var(--manatee-100)',
          200: 'var(--manatee-200)',
          300: 'var(--manatee-300)',
          400: 'var(--manatee-400)',
          500: 'var(--manatee-500)',
          600: 'var(--manatee-600)',
          700: 'var(--manatee-700)',
          800: 'var(--manatee-800)',
          900: 'var(--manatee-900)',
          950: 'var(--manatee-950)',
        },
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
  // extendTheme: (theme) => {
  //   theme.colors.veryCool = '#0000ff'
  //   theme.colors.background = ''
  //   theme.colors.brand = {
  //     primary: 'hsl(var(--hue, 217) 78% 51%)',
  //   }
  // },
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
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})