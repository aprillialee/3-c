import Head from 'next/head'

import NavBar from "../components/primitives/NavBar/NavBar"
import HomeLayout from "../components/homepage/layout/HomeLayout"
import Footer from "../components/primitives/Footer/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <HomeLayout/>
      <Footer/>
    </>
  )
}
