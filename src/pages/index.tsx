import Head from 'next/head'
import { Layout } from '@/components'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>lemonnard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container mx-auto" />
      </Layout>
    </>
  )
}
