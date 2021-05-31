import { Layout, MovieCard } from '@/components'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Vod } from '@/interfaces'
import { QUERY_VODS } from '@/graphql'
import 'twin.macro'
import { getImageUrl } from '@/utils'

interface VodData {
  vods: Vod[]
}
interface VodListVar {
  offset: number
  limit: number
}

function VodList(): JSX.Element {
  const route = useRouter()

  const { data } = useQuery<VodData, VodListVar>(QUERY_VODS, {
    variables: { offset: 0, limit: 100 },
  })

  const showMore = (vodId: string) => {
    route.push(`/vod/${vodId}`)
  }

  return (
    <Layout>
      <div
        tw="px-6 mt-14 grid grid-cols-2 gap-y-16
        md:(px-6 grid-cols-4)
        lg:(grid-cols-5 px-10)
        xl:(grid-cols-5 px-14)"
      >
        {data?.vods.map((vod) => {
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
    </Layout>
  )
}

export default VodList
