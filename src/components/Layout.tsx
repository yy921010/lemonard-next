import 'twin.macro'
import React, { ReactNode } from 'react'
import { NavBar, Footer } from '.'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      <section tw="bg-black bg-opacity-90 text-gray-100 flex-1 pb-20">
        {children}
      </section>
      <Footer />
    </div>
  )
}

export default Layout
