import tw, { styled } from 'twin.macro'

interface NavbarProps {
  isShowBlack: boolean
}

export const Nav = styled.nav(({ isShowBlack }: NavbarProps) => [
  tw`fixed top-0 left-0 w-full z-20 h-20`,
  !isShowBlack ? tw`bg-transparent` : tw`bg-black bg-opacity-90`,
])

export const NavContainer = tw.div`flex items-center justify-between container px-6 h-full`

export const NavSideBar = tw.div`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 flex`

export const SideBarTop = tw.div`w-72 bg-opacity-90 bg-black`

export const TopLogo = tw.div`h-20 flex items-center px-6 border-b-2 border-gray-800`

export const MenuList = tw.div`top-2`
