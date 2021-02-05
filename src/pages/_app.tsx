import '../styles/index.css'
import 'remixicon/fonts/remixicon.css'
import { AppProps } from 'next/app'
import { GlobalStyles } from '@/components'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
