import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/main_layout'
import "react-image-gallery/styles/css/image-gallery.css";
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';
import * as ga from '../lib/ga'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return ( 
    <>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  )
}
export default MyApp
