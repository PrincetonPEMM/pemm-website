import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import MainLayout from '../components/layouts/main_layout'
import "react-image-gallery/styles/css/image-gallery.css";

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
export default MyApp
