import Head from 'next/head'

import NavBar from "../components/primitives/NavBar/NavBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
    </>
  )
}
