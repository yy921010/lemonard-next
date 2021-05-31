import { Layout, MovieCard } from '@/components'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Vod } from '@/interfaces'
import { QUERY_VODS } from '@/graphql'
import 'twin.macro'
import { getImageUrl } from '@/utils'
import InfiniteScroll from 'react-infinite-scroll-component'

interface VodData {
  vods: {
    data: Vod[]
    total: number
  }
}
interface VodListVar {
  offset: number
  limit: number
}

function VodList(): JSX.Element {
  const route = useRouter()

  const { data, fetchMore } = useQuery<VodData, VodListVar>(QUERY_VODS, {
    variables: { offset: 0, limit: 20 },
  })

  const showMore = (vodId: string) => {
    route.push(`/vod/${vodId}`)
  }

  const fetchMoreHandle = () => {
    if (fetchMore) {
      fetchMore({
        variables: {
          offset:
            data?.vods?.data?.length - 1 < 0 ? 0 : data?.vods?.data?.length - 1,
        },
      })
    }
  }

  return (
    <Layout>
      <InfiniteScroll
        dataLength={data?.vods?.data?.length || 0}
        next={fetchMoreHandle}
        hasMore
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div
          tw="px-6 mt-14 grid grid-cols-2 gap-y-16
        md:(px-6 grid-cols-4)
        lg:(grid-cols-5 px-10)
        xl:(grid-cols-5 px-14)"
        >
          {data?.vods?.data.map((vod) => {
            return (
              <MovieCard
                key={vod.id}
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
