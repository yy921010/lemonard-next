import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDebounceFn } from 'ahooks'

const routes = [
  {
    isShown: true,
    name: '首页',
    path: '/',
  },
  {
    isShown: true,
    name: '点播',
    path: '/vod',
  },
  {
    isShown: true,
    name: '直播',
    path: '/vod',
  },
]

export const Layout = ({ children }) => {
  const [isScrollDown, setScrollDown] = useState<boolean>(false)
  const { run } = useDebounceFn(
    () => {
      setScrollDown(window.pageYOffset > 40)
    },
    { wait: 50 }
  )

  useEffect(() => {
    window.addEventListener('scroll', run)
    return () => {
      window.removeEventListener('scroll', run)
    }
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-20 h-12 bg-opacity-90 ${
          !isScrollDown ? 'bg-transparent' : 'bg-black bg-opacity-10'
        }`}
      >
        <div className="flex items-center container mx-auto px-6 h-full">
          <div className="text-md text-gray-100">
            <img src="/logo.png" alt="" className="w-16" />
          </div>
          <ul className="flex-shrink space-x-8 hidden">
            {routes
              .filter((item) => item.isShown)
              .map((item) => {
                return (
                  <li key={item.name} className="cursor-pointer text-base">
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                )
              })}
          </ul>
          <div className="space-x-2 hidden">
            <div className="cursor-pointer">开始使用</div>
          </div>
        </div>
      </nav>
      <section className="flex flex-col items-center">
        <section className="w-full flex-shrink">{children}</section>
        <footer className="container border-gray-900 w-full h-72 border-solid border-t-2 mt-10 flex flex-col items-center pt-6 bg-gray-800 px-6">
          <div className="w-20 h-12">
            <img src="/logo.png" alt="" className="w-18" />
          </div>
          <ul className="flex justify-center space-x-8 mt-8">
            <li>gmail</li>
            <li>rss</li>
            <li>github</li>
          </ul>
          <div className="w-42">
            <ul className="flex flex-wrap space-x-4 mt-12 text-gray-500">
              <li>联系我们</li>
              <li>关于</li>
              <li>开源声明</li>
              <li>API</li>
              <li>Console</li>
              <li>版本</li>
            </ul>
          </div>
          <div className="flex justify-between w-full mt-6 text-gray-500 text-sm">
            <div className="">&copy;2021 | Love Film</div>
            <div className="">苏ICP备 19072422号-2</div>
          </div>
        </footer>
      </section>
    </>
  )
}
