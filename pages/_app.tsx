import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '.././shared/util/Theme'
import '../styles/globals.css'
import Layout from '../Layout'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
