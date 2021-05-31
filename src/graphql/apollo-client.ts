import { Vod } from '@/interfaces'
import { isEmpty } from '@/utils'
import { ApolloClient, InMemoryCache } from '@apollo/client'

interface PageInfo {
  data: Vod[]
  total: number
}

const client = new ApolloClient({
  uri: 'http://192.168.5.205:3000/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          vods: {
            read(existing: PageInfo, { args: { offset, limit } }) {
              if (!isEmpty(existing)) {
                const { data, total } = existing
                return {
                  data: data.slice(offset, offset + limit),
                  total,
                }
              }
              return existing
            },

            // The keyArgs list and merge function are the same as above.
            keyArgs: [],
            merge(
              existing: PageInfo,
              incoming: PageInfo,
              { args: { offset = 0 } }
            ) {
              const merged = !isEmpty(existing) ? existing.data?.slice(0) : []
              console.log('merged>>>', merged)
              // eslint-disable-next-line no-plusplus
              for (let i = 0; i < incoming.data?.length; ++i) {
                merged[offset + i] = incoming?.data[i]
              }
              return {
                data: merged,
                total: incoming?.total,
              }
            },
          },
        },
      },
    },
  }),
})

export default client
