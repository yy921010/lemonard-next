// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react'
import { useDebounceFn } from 'ahooks'
import tw from 'twin.macro'
import {
  Nav,
  NavContainer,
  NavSideBar,
  TopLogo,
  SideBarTop,
  MenuList,
} from './styled'
import { Icon } from '..'

const NavBar: React.FC = () => {
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
    <Nav isShowBlack={isScrollDown}>
      <NavContainer>
        <Icon
          name="menu"
          tw="text-2xl cursor-pointer text-gray-50"
          onClick={handleShowMenu}
        />
        <img tw="w-16" src="/logo.png" alt="logo" />
        <Icon
          name="search"
          tw="text-2xl cursor-pointer text-gray-50"
          onClick={handleSearch}
        />
      </NavContainer>
      {isShowMenu ? (
        <NavSideBar>
          <SideBarTop>
            <TopLogo>
              <img tw="w-16" src="/logo.png" alt="logo" />
            </TopLogo>
            <MenuList>ss</MenuList>
          </SideBarTop>
        </NavSideBar>
      ) : (
        ''
      )}
    </Nav>
  )
}

export default NavBar
