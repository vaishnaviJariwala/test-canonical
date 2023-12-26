import React, { useState, useEffect } from 'react';
import Head from 'next/head'

export default function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
      .then(json => setData(json))
  }, [])
  return (
    <>
      <Head>
        {/*<html lang="en" />*/}
        <title>welcome to demo blog</title>
        <meta
          name="description"
          content="hello guys welcome" />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="blog" />
        <meta property="og:locale" content="en" />
        <meta property="og:title" content=">welcome to demo blog" />
        <meta
          property="og:description"
          content="hello guys welcome" />
        <meta property="og:url" content="https://test-canonicals.vercel.app" />
        <link rel="canonical" href="https://test-canonicals.vercel.app" key="canonical" />
        {/*<meta name="google-site-verification" content="FKfrICFeAOQbCM9FL3oMxv1sV_ezFPWnUDkhBfMrPMY" />*/}
      </Head>
      <main>
        {
          (data &&	data?.length > 0) && (data?.map((item) => {
            return (
              <div key={item?.id}>
                {item?.title}
              </div>
            )
          })?.slice(0,3))
        }
      </main>
    </>
  )
}
