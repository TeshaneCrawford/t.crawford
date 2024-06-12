import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

import plugin from 'tailwindcss/plugin'
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

const borderColorDefault = 'rgb(31 41 55 / 0.1)' // border-gray-800/10
const accentColor700 = 'rgb(42, 90, 203)' // custom accent color

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
        // new colors
        accent: {
					700: accentColor700,
				},
				optSecondary: {
					DEFAULT: 'rgb(212, 178, 255)',
				},
        frost: {
					DEFAULT: `rgb(255 255 255 / 0.25)`, // white/25
					200: `rgb(255 255 255 / 0.75)`, // white/75
				},
        // old colors
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
      boxShadow: {
				'border': `0 0 0 1px ${borderColorDefault}`,
				'border-accent-700': `0 0 0 1px ${accentColor700}`,
				'border-and-shadow-sm': `0 0 0 1px ${borderColorDefault}, ${defaultTheme.boxShadow['sm']}`,
				'border-and-shadow-lg': `0 0 0 1px ${borderColorDefault}, ${defaultTheme.boxShadow['lg']}`,
				'border-and-inner': `0 0 0 1px ${borderColorDefault}, ${defaultTheme.boxShadow.inner}`,
				'border-2': `0 0 0 2px ${borderColorDefault}`,
				'border-2-and-shadow-lg': `0 0 0 2px ${borderColorDefault}, ${defaultTheme.boxShadow['lg']}`,
				'border-2-and-shadow-xl': `0 0 0 2px ${borderColorDefault}, ${defaultTheme.boxShadow['xl']}`,
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
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.badge': {
          padding: '.25rem .5rem',
          fontSize: '.75em',
          fontWeight: '400',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          borderRadius: '9999px',
        },
        '.badge-primary': {
          color: colors.blue[800],
          backgroundColor: colors.blue[100],
        },
        '.badge-secondary': {
          color: colors.emerald[700],
          backgroundColor: colors.emerald[100],
        },
        '.badge-accent': {
          color: colors.red[800],
          backgroundColor: colors.red[100],
        },
        '.badge-success': {
          color: colors.amber[700],
          backgroundColor: colors.amber[100],
        },
      })
    })
  ],
} satisfies Config

