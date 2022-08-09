import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = { 
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const theme = extendTheme({
  config,
  breakpoints,
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: 'red.500',
        _dark: 'red.400',
      },
      secondary: {
        default: 'red.800',
        _dark: 'red.700',
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
  },
  colors:{
    brand:{
      100:"hsla(210, 17%, 98%, 1)",
      200:"hsla(210, 16%, 93%, 1)",
      300:"hsla(210, 14%, 89%, 1)",
      400:"hsla(210, 14%, 83%, 1)",
      500:"hsla(210, 11%, 71%, 1)",
      600:"hsla(208, 7%, 46%, 1)",
      700:"hsla(210, 9%, 31%, 1)",
      800:"hsla(210, 10%, 23%, 1)",
      900:"hsla(210, 11%, 15%, 1)"
    }
  } 
})

export default theme;


