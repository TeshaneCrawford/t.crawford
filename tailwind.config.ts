import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// import plugin from 'tailwindcss/plugin'
// import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

// function withOpacity(variableName: string) {
//   // @ts-expect-error This error is expected because the opacityValue parameter may be undefined.
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }

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
        },
        darkSecondary: "#25282A",
        main: 'var(--bg-main)',
        // 'main-opacity': withOpacity('--bg-main-opacity'),
        secondary: 'var(--bg-secondary)',
        muted: 'var(--font-muted)',
        placeholder: 'var(--font-placeholder)',
      },
      textColor: {
        main: 'var(--font-primary)',
        muted: 'var(--font-muted)',
        placeholder: 'var(--font-placeholder)',
        inverted: 'var(--font-inverted)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        'primary-hover': 'var(--border-primary-hover)',
        muted: 'var(--border-muted)',
        transparent: 'transparent',
      },
      borderWidth: {
        sm: '1px',
        md: '2px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },

      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
      },

      textShadow: {
        sm: 'rgba(255, 255, 255, 0.35) 1px 1px 12px',
      },
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

