import Head from 'next/head'

import fetch from "isomorphic-unfetch"

import HomeLayout from "../components/homepage/layout/HomeLayout"

export default function Home({headlines, features}) {
  console.log(features)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout headlines={headlines} features={features}/>
    </>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/headlines`)
  const res1 = await fetch(`${API_URL}/features`)

  const data = await res.json()
  const data1 = await res1.json()

  return {
    props: {
      headlines: data,
      features: data1
    }
  }
}