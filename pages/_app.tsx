import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../Layout';
import { DarkModeProvider } from '../context/darkModeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkModeProvider>
    </>
  )
}

export default MyApp
