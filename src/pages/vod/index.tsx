import { Layout, MovieCard } from '@/components'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { CursorResult } from '@/interfaces'
import { QUERY_VODS_BY_CURSOR } from '@/graphql'
import 'twin.macro'
import { getImageUrl } from '@/utils'
import InfiniteScroll from 'react-infinite-scroll-component'

interface VodData {
  vodCursor: CursorResult
}
interface VodListVar {
  cursor: string
}

function VodList(): JSX.Element {
  const route = useRouter()

  const { data, fetchMore } =
    useQuery<VodData, VodListVar>(QUERY_VODS_BY_CURSOR)

  const nodes =
    data?.vodCursor?.edges.map((edge) => {
      return edge.node
    }) || []

  const { pageInfo } = data?.vodCursor || {}

  const showMore = (vodId: string) => {
    route.push(`/vod/${vodId}`)
  }

  const fetchMoreHandle = () => {
    if (fetchMore && pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          cursor: pageInfo.endCursor,
        },
      })
    }
  }

  return (
    <Layout>
      <InfiniteScroll
        dataLength={nodes.length || 0}
        next={fetchMoreHandle}
        hasMore={pageInfo?.hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div
          tw="px-6 mt-14 grid grid-cols-2 gap-y-16 cursor-pointer
              md:(px-6 grid-cols-4)
              lg:(grid-cols-5 px-10)
              xl:(grid-cols-5 px-14)"
        >
          {Array.isArray(nodes) &&
            nodes.map((vod) => {
              return (
                <MovieCard
                  key={vod.guid}
                  id={vod.id}
                  onClick={showMore}
                  src={getImageUrl(vod.images, 14)}
                  title={vod.title}
                  subtitle={vod.subtitle}
                />
              )
            })}
        </div>
      </InfiniteScroll>
    </Layout>
  )
}

export default VodList
