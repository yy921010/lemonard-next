import 'remixicon/fonts/remixicon.css'
import '@/components/UIkit/Slick/slick.css'
import '@/components/UIkit/Slick/slick-theme.css'
import '@/components/UIkit/Select/index.scss'
import { AppProps } from 'next/app'
import { GlobalStyles } from '@/components'
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
