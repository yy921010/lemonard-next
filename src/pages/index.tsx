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
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
      </Layout>
    </>
  )
}
