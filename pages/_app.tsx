import { NextRouter, Router } from "next/router";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { AppProps } from 'next/app'

import { lightTheme, darkTheme } from '../shared/theme';
import globalStyles from "../styles/globalStyles";
// import Layout from '../Layout';


function Application({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}>
      <NextUIProvider>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default Application