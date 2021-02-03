import { NavBar, Footer } from '.'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <section className="flex flex-col items-center">
        <section className="w-full flex-shrink">{children}</section>
        <Footer />
      </section>
    </>
  )
}

export default Layout
