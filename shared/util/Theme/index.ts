import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = { 
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors:{
    brand:{
      100:"#f7fafc",
      // ...
      900: "#1a202c"
    }
  } 
})

export default theme;


