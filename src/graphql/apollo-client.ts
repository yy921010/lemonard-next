import { ApolloClient, InMemoryCache } from '@apollo/client'
// eslint-disable-next-line import/no-extraneous-dependencies
import { relayStylePagination } from '@apollo/client/utilities'

const client = new ApolloClient({
  uri: 'http://192.168.5.205:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          vodCursor: relayStylePagination(),
        },
      },
    },
  }),
})

export default client
