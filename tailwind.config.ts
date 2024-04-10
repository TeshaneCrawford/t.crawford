import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        cyan: {
          '50': '#edfaff',
          '100': '#d6f3ff',
          '200': '#b5ebff',
          '300': '#83e1ff',
          '400': '#48ceff',
          '500': '#1eb0ff',
          '600': '#0693ff',
          '700': '#007fff',
          '800': '#0861c5',
          '900': '#0d549b',
          '950': '#0e335d',
        }
      }
    },
    fontFamily: {
      sans: [
        'DM Sans',
        ...defaultTheme.fontFamily.sans,
      ],
      mono: [
        'DM Mono',
        ...defaultTheme.fontFamily.mono,
      ],
      serif: [
        'Cormorant Garamond',
        ...defaultTheme.fontFamily.serif,
      ]
    }
  },
  plugins: [],
} satisfies Config

