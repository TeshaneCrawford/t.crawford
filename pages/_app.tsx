import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Layout from '../Layout';
import { DarkModeProvider } from '../context/darkModeContext';

/* Progress bar Configurations */
NProgress.configure({
  easing: 'ease',
  speed: 800,
  showSpinner: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const start = () => {
      NProgress.start()
    }
    const end = () => {
      NProgress.done()
    }
    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)
    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [router.events]);
  
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
