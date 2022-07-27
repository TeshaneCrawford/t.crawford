import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

// Foundations 
import * as foundations from './foundations/colors';

// Components 
import * as components from './components/button';


// color mode config

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({ 
    config,
    ...foundations,
    components:{
    ...components,
    },
 });

export default theme;
