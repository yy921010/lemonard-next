import Head from 'next/head'
import { Layout } from '@/components'
export default function Home() {
  return (
    <>
      <Head>
        <title>lemon nard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto">
          <footer></footer>
        </div>
      </Layout>
    </>
  )
}
