import tw, { styled } from 'twin.macro'

interface NavbarStyles {
  isShowBlack: boolean
}

const Navbar = styled.nav(({ isShowBlack }: NavbarStyles) => [
  tw`fixed top-0 left-0 w-full z-20 h-20 bg-opacity-90`,
  !isShowBlack ? tw`bg-transparent` : tw`bg-black bg-opacity-10`,
])

export default Navbar
