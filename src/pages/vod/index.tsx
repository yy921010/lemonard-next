import { HeadMeta, Layout, MovieCard } from '@/components'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { CursorResult, ImgType } from '@/interfaces'
import { QUERY_VODS_BY_CURSOR, QUERY_VOD_DETAIL } from '@/graphql'
import 'twin.macro'
import { getImageUrl } from '@/utils'
import InfiniteScroll from 'react-infinite-scroll-component'
import React from 'react'
import Link from 'next/link'

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
    <>
      <HeadMeta title="资源库" />
      <Layout>
        <InfiniteScroll
          tw="mt-2.5"
          dataLength={nodes.length || 0}
          next={fetchMoreHandle}
          hasMore={pageInfo?.hasNextPage}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p tw="text-center mb-9">
              <b tw="text-c23 text-sm">我是有底线的</b>
            </p>
          }
        >
          <div
            tw="px-6 mt-14 grid grid-cols-2 gap-y-16
              md:(px-6 grid-cols-4)
              lg:(grid-cols-5 px-10)
              xl:(grid-cols-5 px-14)"
          >
            {Array.isArray(nodes) &&
              nodes.map((vod) => {
                return (
                  <Link href={`/vod/${vod.id}`} key={vod.id} passHref>
                    <MovieCard
                      id={vod.id}
                      src={getImageUrl(vod.images, ImgType.MAIN)}
                      title={vod.title}
                      subtitle={vod.subtitle}
                    />
                  </Link>
                )
              })}
          </div>
        </InfiniteScroll>
      </Layout>
    </>
  )
}

export default VodList
