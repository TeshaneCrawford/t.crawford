import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    borderColor: { base: 'neutral.200', _dark: 'neutral.800' },
  },
  html: {
    fontFamily: 'sans',
  },
  body: {
    bg: 'white',
    _dark: { bg: 'dark', color: 'gray.100' },
  },
});
