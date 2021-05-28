import 'remixicon/fonts/remixicon.css'
import { AppProps } from 'next/app'
import { GlobalStyles } from '@/components'
import '@/components/Slick/slick.css'
import '@/components/Slick/slick-theme.css'
import '@/components/Select/index.scss'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/graphql'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
