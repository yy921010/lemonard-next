import { HeadMeta, Layout } from '@/components'
import { vodInfo } from './data'

export default function VodDetail() {
  return (
    <>
      <HeadMeta title={vodInfo.title} />
      <Layout>
        <div className="flex flex-col w-full items-center relative">
          <div
            className="
          w-full
          bg-no-repeat
          bg-cover
          bg-center
          h-bg-detail
          slashed-zero
          top-0
          "
            style={{
              backgroundImage: `
            linear-gradient(rgba(0,0,0,0.70),rgba(0,0,0,0.70))
            ,url(${vodInfo.background})`,
            }}
          ></div>
          <div className="container z-10 absolute px-6 flex justify-between bottom-4">
            <div
              className="
            poster
            rounded-md
            w-36 h-56
            bg-no-repeat
            bg-center
            flex-shrink-0
            mr-6
            bg-cover"
              style={{
                backgroundImage: `url(${vodInfo.poster})`,
              }}
            ></div>
            <div className="flex-shrink">
              <div className="text-lg">{vodInfo.title}</div>
              <div className="text-md text-gray-400">{vodInfo.subTitle}</div>
              <div className=" text-gray-400 text-sm space-x-1 mt-1">
                <span>{vodInfo.time}</span>
                <span>{vodInfo.rate}</span>
                <span>{vodInfo.language}</span>
              </div>
              <div className="text-gray-300 text-sm space-x-1 mt-2 leading-4 overflow-y-auto h-28">
                {vodInfo.description}
              </div>
            </div>
          </div>
        </div>
        <div className="container px-6 space-y-4 mt-6 w-full mx-auto">
          <button className="w-full bg-white text-base text-black rounded-full py-3 px-6 hover:bg-gray-300 active:bg-gray-300 focus:outline-none ">
            播放
          </button>
          <button className="w-full bg-black text-base text-white bg-opacity-0 rounded-full py-3 px-6 focus:outline-none border border-solid border-white active:bg-gray-100">
            收藏
          </button>
        </div>
        <div className="container mt-16 px-6">
          <div className="text-base mb-6">剧集</div>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {vodInfo.seasons.length > 0
              ? vodInfo.seasons.map((item) => {
                  return (
                    <div
                      className="h-40 w-full bg-no-repeat bg-cover bg-center rounded-md flex justify-center items-center text-gray-300 text-md"
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
      </Layout>
    </>
  )
}
