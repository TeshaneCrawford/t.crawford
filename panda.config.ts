import { defineConfig } from '@pandacss/dev';

import { tokens } from '@/theme/tokens';
// import { semanticTokens } from '@/theme/semantic-tokens'
// import { recipes } from '@/theme/recipes'
import { textStyles } from '@/theme/text-styles';
import { layerStyles } from '@/theme/layer-styles';
import { globalCss } from '@/theme/global-css';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',
  // The output directory for your css system
  outdir: 'styled-system',

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      // semanticTokens,
      tokens,
      // recipes,
      textStyles,
      layerStyles,
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadein2: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  globalCss,
});
