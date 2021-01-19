import Link from 'next/link'
const Home = (): JSX.Element => {
  return (
    <>
      <div className="container flex text-color-white">this is Home</div>
      <Link href="/post/detail">detail</Link>
      <Link href="/">back</Link>
    </>
  )
}

export default Home
