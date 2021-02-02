import Head from 'next/head'
import { Layout } from '@/components'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>lemon nard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto">
          <footer />
        </div>
      </Layout>
    </>
  )
}
