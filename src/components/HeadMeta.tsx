import React from 'react'
import Head from 'next/head'

interface HeaderMeta {
  title: string
  [key: string]: any
}

export const HeadMeta: React.FC<HeaderMeta> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}
