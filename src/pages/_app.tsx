import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/main_layout'
import "react-image-gallery/styles/css/image-gallery.css";
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
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
