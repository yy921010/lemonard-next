import 'remixicon/fonts/remixicon.css'
import { AppProps } from 'next/app'
import { GlobalStyles } from '@/components'
import '@/components/Slick/slick.css'
import '@/components/Slick/slick-theme.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
