import '../styles/globals.css'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app'

import Layout from '../Layout';
import { lightTheme, darkTheme } from '../shared/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextThemesProvider defaultTheme="system" attribute="class" value={{light: lightTheme.className, dark: darkTheme.className}}>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </>
  )
}

export default MyApp
