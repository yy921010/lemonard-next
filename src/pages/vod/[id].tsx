import { HeadMeta, Layout } from '@/components'
import { GetStaticPaths, GetStaticProps } from 'next'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReactSlick from 'react-slick'
import tw from 'twin.macro'
import vodInfo from './data'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
}
const vodDetail: React.FC = () => {
  return (
    <>
      <HeadMeta title={vodInfo.title} />
      <Layout>
        <div tw="flex flex-col w-full items-center relative">
          <div
            tw="w-full bg-no-repeat bg-cover bg-center slashed-zero top-0
          "
            style={{
              backgroundImage: `
            linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70))
            ,url(${vodInfo.background})`,
            }}
          />
          <div tw="container z-10 absolute px-6 flex justify-between bottom-4">
            <div
              tw="rounded-md w-36 h-56 bg-no-repeat bg-center flex-shrink-0 mr-6 bg-cover"
              style={{
                backgroundImage: `url(${vodInfo.poster})`,
              }}
            />
            <div tw="flex-shrink">
              <div tw="text-lg">{vodInfo.title}</div>
              <div tw="text-gray-400">{vodInfo.subTitle}</div>
              <div tw=" text-gray-400 text-sm space-x-1 mt-1">
                <span>{vodInfo.time}</span>
                <span>{vodInfo.rate}</span>
                <span>{vodInfo.language}</span>
              </div>
              <div tw="text-gray-300 text-sm space-x-1 mt-2 leading-4 overflow-y-auto h-28">
                {vodInfo.description}
              </div>
            </div>
          </div>
        </div>
        <div tw="container px-6 space-y-4 mt-6 w-full mx-auto">
          <button
            type="button"
            tw="w-full bg-white text-base text-black rounded-full py-3 px-6 hover:bg-gray-300 active:bg-gray-300 focus:outline-none "
          >
            播放
          </button>
          <button
            type="button"
            tw="w-full bg-black text-base text-white bg-opacity-0 rounded-full py-3 px-6 focus:outline-none border border-solid border-white active:bg-gray-100"
          >
            收藏
          </button>
        </div>
        <div tw="container mt-16 px-6 mx-auto">
          <div tw="text-base mb-6">剧集</div>
          <div tw="grid grid-cols-2 gap-4 justify-items-center">
            {vodInfo.seasons.length > 0
              ? vodInfo.seasons.map((item) => {
                  return (
                    <div
                      tw="h-40 w-full bg-no-repeat bg-cover bg-center rounded-md flex justify-center items-center text-gray-300"
                      key={item.seasonNum}
                      style={{
                        backgroundImage: `url(${item.poster})`,
                      }}
                    >
                      {item.title || item.seasonNum}
                    </div>
                  )
                })
              : []}
          </div>
        </div>
        <div tw="container mt-16 px-6 mx-auto">
          <div tw="text-base">演员</div>
          <ReactSlick {...settings}>
            {vodInfo.actors.length > 0
              ? vodInfo.actors.map((item) => {
                  return (
                    <li key={item.id}>
                      <div
                        tw="rounded-md w-28 h-32 bg-no-repeat bg-center flex-shrink-0 mr-6 bg-cover"
                        style={{
                          backgroundImage: `url(${item.poster})`,
                        }}
                      />
                      <div
                        tw="text-sm overflow-ellipsis w-36 whitespace-nowrap overflow-hidden"
                        title={item.castName}
                      >
                        {item.castName}
                      </div>
                      <div
                        tw="text-sm overflow-ellipsis w-36 whitespace-nowrap overflow-hidden"
                        title={item.playName}
                      >
                        {item.playName}
                      </div>
                    </li>
                  )
                })
              : ''}
          </ReactSlick>
        </div>
      </Layout>
    </>
  )
}

export default vodDetail

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {},
  }
}
