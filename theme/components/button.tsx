import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        sm: {
          bg: 'teal.500',
          fontSize: 'md',
        },
      },
      defaultProps: {
        size: 'lg', 
        variant: 'sm',
        colorScheme: 'green', 
      },
    },
  },
})

export default theme