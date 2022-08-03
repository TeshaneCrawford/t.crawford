/** @jsxImportSource theme-ui */
import { ThemeProvider } from 'theme-ui'
import { theme } from '.././shared/util/Theme'

import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
