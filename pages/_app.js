import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-dark-blue">
            <Head>
                <title>Next.js</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
