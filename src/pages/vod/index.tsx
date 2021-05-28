import { Layout, PosterWall } from '@/components'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { Vod } from '@/interfaces'
import { QUERY_VODS } from '@/graphql'
import 'twin.macro'

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
      <div tw="px-6 mt-14">
        <PosterWall vods={data?.vods} onMoreInfo={showMore} />
      </div>
    </Layout>
  )
}

export default VodList
