import tw from 'twin.macro'
import { NavBar, Footer } from '.'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <section className="flex flex-col items-center">
        <section className="w-full flex-shrink">{children}</section>
        <Footer />
      </section>
    </div>
  )
}

export default Layout
