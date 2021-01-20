import Link from 'next/link'

export const Layout = ({ children }) => {
  const routes = [
    {
      isShown: true,
      name: 'home',
      path: '/',
    },
    {
      isShown: true,
      name: 'vod',
      path: '/vod',
    },
    {
      isShown: true,
      name: 'live',
      path: '/vod',
    },
  ]
  return (
    <div className="flex flex-column absolute top-20 left-0 right-0 justify-center h-full bg-gray-700">
      <div className="flex top-0 left-0 right-0 fixed bg-gray-800 justify-center">
        <header className="flex items-center justify-between container h-20">
          <div className="w-16 h-16"></div>
          <ul className="flex flex-shrink">
            {routes
              .filter((item) => item.isShown)
              .map((item) => {
                return (
                  <li key={item.name} className="cursor-pointer text-xl mr-9">
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                )
              })}
          </ul>
          <div className="flex">
            <div className="cursor-pointer mr-3.5">sign in</div>
            <div className="cursor-pointer mr-3.5">sign up</div>
          </div>
        </header>
      </div>
      <section className="flex flex-col items-center">
        <section className="flex-1">{children}</section>
      </section>
    </div>
  )
}
