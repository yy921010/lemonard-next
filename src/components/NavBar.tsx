import { useDebounceFn } from 'ahooks'
import React, { useEffect, useState } from 'react'
import { Icon } from '.'

function NavBar(): JSX.Element {
  const [isScrollDown, setScrollDown] = useState<boolean>(false)
  const [isShowMenu, setShowMenu] = useState<boolean>(false)
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
  }, [run])

  const handleShowMenu = () => {
    setShowMenu(true)
  }

  const handleSearch = () => {
    console.log('ssss')
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 h-20 bg-opacity-90 ${
        !isScrollDown ? 'bg-transparent' : 'bg-black bg-opacity-10'
      }`}
    >
      <div className="flex items-center justify-between container px-6 h-full">
        <Icon
          name="menu"
          className="text-2xl cursor-pointer"
          onClick={handleShowMenu}
        />
        <img src="/logo.png" alt="logo" className="w-16" />
        <Icon
          name="search"
          className="text-2xl cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      {isShowMenu ? (
        <div
          aria-hidden="true"
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 flex"
          onClick={() => {
            setShowMenu(false)
          }}
        >
          <div className="w-72 bg-opacity-90 bg-black">
            <div className="h-20 flex items-center px-6 border-b-2 border-gray-800">
              <img src="/logo.png" alt="logo" className="w-16" />
            </div>
          </div>
          <div className="mask" />
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
