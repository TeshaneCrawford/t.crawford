import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
// import { StyleFunctionProps } from '@chakra-ui/theme-tools'




// color mode config

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({config});

export default theme;
