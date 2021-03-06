import { FC } from "react"

import Head from "next/head"

import { Navbar } from '../ui'
import { useRouter } from "next/router"

interface Props {
  title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jerónimo Gascón" />
        <meta name="description" content={`Información sobre ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />

        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Ésta es la página sobre ${title}.`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar/>
      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  )
}
