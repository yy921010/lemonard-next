import tw from 'twin.macro'
import React, { ReactNode } from 'react'
import { NavBar, Footer } from '.'

const AppContainer = tw.div`absolute flex left-0 right-0 bottom-0 top-0 flex-col`
const LayoutContainer = tw.section`bg-black bg-opacity-90 text-gray-100 flex-1`

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <AppContainer>
      <NavBar />
      <LayoutContainer>{children}</LayoutContainer>
      <Footer />
    </AppContainer>
  )
}

export default Layout
