import React from 'react'
import Head from 'next/head'

interface HeaderMeta {
  title: string
}

const HeadMeta: React.FC<HeaderMeta> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default HeadMeta
