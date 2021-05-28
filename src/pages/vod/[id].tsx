import {
  HeadMeta,
  Layout,
  Slick,
  SlickList,
  Button,
  Icon,
  Poster,
  Select,
} from '@/components'
import { GetServerSideProps } from 'next'
import tw, { styled, css } from 'twin.macro'
import { QUERY_VOD_DETAIL, client } from '@/graphql'
import { Episode, Vod } from '@/interfaces'
import { useEffect, useState } from 'react'
import { getImageUrl } from '@/utils'

interface VodQueryData {
  vod: Vod
}
interface VodQueryVar {
  id: string
}
interface BackgroundProps {
  background?: string
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 758,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}
const DetailBackground = styled.div(({ background }: BackgroundProps) => [
  tw`w-full bg-no-repeat bg-cover bg-center slashed-zero top-0 relative`,
  css`
    background-image: linear-gradient(rgba(0, 0, 0, 0), #181818),
      url(${background});
    padding-top: 56.25%;
  `,
])

const DetailBaseInfo = tw.div`
md:absolute
w-full
top-0 left-0 h-full md:px-12`

const DetailMeta = tw.div`
  relative
  -bottom-3/4
  md:(grid
    grid-cols-5
    gap-8
    absolute
    -bottom-10
    )
  xl:bottom-20
`

const DetailTitle = tw.div`
    absolute
    top-1/4
    hidden
    md:(
      block
      )`
const Title = tw.h1`text-3xl px-12 md:(text-4xl px-0)`
const SubTitle = tw.h4`text-xs px-12 text-gray-400 md:(text-base px-0)`
const DetailSmallTitle = tw.h1`
  md:hidden
  mb-12
`

const DetailActions = tw.div`
  flex flex-col space-y-6
  mb-6
  px-12
  md:(px-0)
`

const VodCenterWrap = tw.div`col-span-3`
const VodMeta = tw.div`flex text-base`
const Genre = tw.span`text-sm text-c34 px-6 md:(px-0)`
const Rating = tw.span`text-c36 text-sm mr-2 flex items-center`
const Year = tw.span`text-c34 text-sm mr-2`
const Country = tw.span`text-c34 text-sm mr-2`
const VodDescription = tw.div`w-full space-x-1 leading-6 overflow-y-auto text-c20 px-6
                               md:(h-24 px-0)`

const CastList = tw.div`text-xs md:text-base`

const VodMetaTag = tw.div`flex space-x-4 mb-2.5 flex-wrap px-6 md:(px-0)`
const VodMetaTagLabel = tw.div`text-gray-500`
const VodMetaTagItems = tw.div``
const About = tw.div`
  bg-c19
`

const SeasonWrap = tw.div`px-6 md:px-8 lg:px-10 xl:px-14 box-border overflow-hidden my-20`

const AboutTitle = tw.div``

const VodDetail = ({ vod }: { vod: Vod }) => {
  const [seasonEpisodes, setSeasonEpisode] = useState<Episode[]>([])
  const [defaultSeasonId, setDefaultSeasonId] = useState<string>('' as string)

  useEffect(() => {
    if (vod.type === 1 && vod.seasons.length > 0) {
      const [firstSeason] = vod.seasons
      setSeasonEpisode(firstSeason.episodes)
      setDefaultSeasonId(firstSeason.id)
    }
  }, [vod])

  const startPlay = () => {
    console.log(1)
  }

  const addWatch = () => {
    console.log(2)
  }

  const onSelect = (seasonId: unknown) => {
    const chosenSeason = vod.seasons.find((season) => season.id === seasonId)
    if (chosenSeason) {
      setSeasonEpisode(chosenSeason.episodes)
    }
  }
  return (
    <>
      <HeadMeta title={vod.title} />
      <Layout>
        <div tw="relative">
          <DetailBackground background={getImageUrl(vod.images, 14)}>
            <DetailBaseInfo>
              <DetailTitle>
                <Title>{vod.title}</Title>
                <SubTitle>{vod.originTitle}</SubTitle>
              </DetailTitle>
              <DetailMeta>
                <DetailSmallTitle>
                  <Title>{vod.title}</Title>
                  <SubTitle>{vod.originTitle}</SubTitle>
                </DetailSmallTitle>
                <DetailActions>
                  <Button primary>
                    <Icon
                      name="play"
                      tw="text-xs mr-2 md:text-xl"
                      type="fill"
                      onClick={startPlay}
                    />
                    播放
                  </Button>
                  <Button onClick={addWatch}>
                    <Icon
                      name="check"
                      tw="text-xs md:text-xl mr-2"
                      type="fill"
                    />
                    添加列表
                  </Button>
                </DetailActions>
                <VodCenterWrap>
                  <VodDescription> {vod.introduce}</VodDescription>
                  <VodMeta>
                    <Genre>
                      {vod.genres.map((genre) => {
                        return `${genre.name} ·`
                      })}
                    </Genre>
                    <Year>{vod.year}</Year>
                    <Rating>
                      <Icon name="star" tw="text-sm mr-1" type="fill" />
                      {vod.rating}
                    </Rating>
                    <Country>
                      {vod.countries.map((item) => item.name).toString()}
                    </Country>
                  </VodMeta>
                </VodCenterWrap>
                <CastList>
                  <VodMetaTag>
                    <VodMetaTagLabel>演员:</VodMetaTagLabel>
                    {vod.castStaffs.map((subItem) => {
                      return (
                        <VodMetaTagItems key={subItem.id}>
                          {subItem.name}
                        </VodMetaTagItems>
                      )
                    })}
                  </VodMetaTag>
                </CastList>
              </DetailMeta>
            </DetailBaseInfo>
          </DetailBackground>
        </div>
        <SeasonWrap>
          <Select
            tw="mb-4 w-36"
            onSelect={onSelect}
            menuItemSelectedIcon=""
            defaultValue={defaultSeasonId}
          >
            {vod.seasons.map((item) => {
              return (
                <Select.Option key={item.id} value={item.id}>
                  {item.name}
                </Select.Option>
              )
            })}
          </Select>
          <Slick {...settings}>
            {vod.seasons.length > 0 ? (
              Array.isArray(seasonEpisodes) &&
              seasonEpisodes.map((episode) => {
                return (
                  <div key={episode.id} tw="cursor-pointer">
                    <Poster
                      src={getImageUrl(episode.images, 16)}
                      aspectRatio={16 / 9}
                      tw="mr-1 sm:mr-2 md:mr-3 mb-2"
                    />
                    <div tw="mx-0.5">
                      <div tw="text-c32 text-xs">
                        第 {episode.episodeNumber} 集
                      </div>
                      <div tw="text-c31 text-base">{episode.title}</div>
                      <div tw="text-c34 text-sm">{episode.introduce}</div>
                    </div>
                  </div>
                )
              })
            ) : (
              <></>
            )}
          </Slick>
        </SeasonWrap>
        <SlickList
          id="ssss"
          title="片花"
          onMore={() => {
            console.log(3)
          }}
        >
          {vod.playSources.length > 0 ? (
            vod.playSources.map((playSource) => {
              return (
                <div key={playSource.id} tw="cursor-pointer">
                  <Poster
                    src="getImageUrl(playSource.images, 10)"
                    aspectRatio={16 / 9}
                    tw="mx-0.5 sm:mx-1 md:mx-1.5 mb-2"
                  />
                </div>
              )
            })
          ) : (
            <></>
          )}
        </SlickList>
        <About>关于</About>
      </Layout>
    </>
  )
}

export default VodDetail

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const { data } = await client.query<VodQueryData, VodQueryVar>({
    query: QUERY_VOD_DETAIL,
    variables: { id: query.id as string },
  })
  return {
    props: {
      vod: data.vod,
    },
  }
}
