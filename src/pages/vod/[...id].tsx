import { Layout } from '@/components'

const vodInfo = {
  title: '旺达幻视',
  subTitle: 'WandaVision',
  time: '2021',
  rate: '9.2',
  language: '英语',
  description:
    '旺达·马克西莫夫(Wanda Maximoff)和幻视(Vision)——两个过着隐居生活的超能的存在——开始怀疑一切都不是看起来的那样。',
  background:
    'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/pxIqv1w8JNC8iRkPoM87oElF5s4.jpg',
  poster:
    'https://www.themoviedb.org/t/p/w220_and_h330_face/glKDfE6btIRcVB5zrjspRIs4r52.jpg',
}

export default function VodDetail() {
  return (
    <Layout>
      <div className="flex flex-col w-full items-center relative">
        <div
          className="
          w-full
          bg-no-repeat
          bg-cover
          h-bg-detail
          slashed-zero
          top-0
          "
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9))
            ,url(${vodInfo.background})`,
          }}
        ></div>
        <div className="container z-10 absolute px-6 lg:flex lg:justify-between">
          <div
            className="
            poster
            w-36 h-52
            lg:w-52 lg:h-72
            2xl:w-72 2xl:h-96
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
            <div className="text-lg sm:text-3xl md:text-5xl 2xl:text-7xl">
              {vodInfo.title}
            </div>
            <div className="text-md sm:text-lg md:text-xl 2xl:text-2xl text-gray-400">
              {vodInfo.subTitle}
            </div>
            <div className=" text-gray-400 text-sm sm:text-base md:text-lg 2xl:text-xl space-x-1 mt-2">
              <span>{vodInfo.time}</span>
              <span>{vodInfo.rate}</span>
              <span>{vodInfo.language}</span>
            </div>
            <div className="text-gray-300 text-sm sm:text-base md:text-lg 2xl:text-xl space-x-1 mt-2">
              {vodInfo.description}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
