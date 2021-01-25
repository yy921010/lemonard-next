import Link from 'next/link'
import { useState, useEffect } from 'react'

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

let setTimeId = null
export const Layout = ({ children }) => {
  const [isScrollDown, setScrollDown] = useState<boolean>(false)

  const handleScroll = () => {
    clearTimeout(setTimeId)
    setTimeId = setTimeout(() => {
      setScrollDown(window.pageYOffset > 40)
    }, 50)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-20 h-12 bg-opacity-90 ${
          !isScrollDown ? 'bg-transparent' : 'bg-black bg-opacity-10'
        }`}
      >
        <div className="flex items-center justify-center container mx-auto px-6 h-full">
          <div className="text-sm text-gray-300">Lemonard</div>
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
        <footer className="container border-gray-900 w-full h-72 border-solid border-t-2"></footer>
      </section>
    </>
  )
}
