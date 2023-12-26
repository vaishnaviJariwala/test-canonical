import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Index() {
	const [data, setData] = useState({});
	const router = useRouter();
	console.log(router)
	const fetchData = async () => {
		if(router?.query?.id) {
			await fetch(`https://jsonplaceholder.typicode.com/posts/${router?.query?.id}`).then(response => response.json())
				.then(json => setData(json))
		}
	}
	
	useEffect(() => {
		fetchData()
	}, [router])
	return (
		<>
			<Head>
				{/*<html lang="en" />*/}
				<title>{data?.title}</title>
				<meta
					name="description"
					content={data?.body} />
				<meta name="robots" content="index,follow" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="blog" />
				<meta property="og:locale" content="en" />
				<meta property="og:title" content={data?.title} />
				<meta
					property="og:description"
					content={data?.body} />
				<meta property="og:url" content="https://test-next-7d2a.vercel.app/" />
			</Head>
			<h1>{data?.title}</h1>
			<p>{data?.body}</p>
			<p>{data?.id}</p>
			<p>{data?.userId}</p>
		</>
	)
}
