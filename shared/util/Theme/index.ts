import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = { 
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors:{
    brand:{
      100:"hsla(210, 17%, 98%, 1)",
      // ...
      900: "hsla(210, 11%, 15%, 1)"
    }
  } 
})

export default theme;


