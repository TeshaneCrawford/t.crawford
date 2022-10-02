import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app'

import Layout from '../Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
