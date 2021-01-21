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
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 justify-center z-10">
        <div className="flex items-center justify-between container h-20 mx-auto">
          <div className="w-16 h-16 bg-red-400"></div>
          <ul className="flex flex-shrink space-x-8">
            {routes
              .filter((item) => item.isShown)
              .map((item) => {
                return (
                  <li key={item.name} className="cursor-pointer text-xl">
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                )
              })}
          </ul>
          <div className="flex space-x-2">
            <div className="cursor-pointer">sign in</div>
            <div className="cursor-pointer">sign up</div>
          </div>
        </div>
      </nav>
      <section className="flex flex-col items-center overflow-y-auto">
        <section className="w-full flex-shrink">{children}</section>
        <footer className="container border-gray-900 w-full h-72 border-solid border-t-2"></footer>
      </section>
    </>
  )
}
