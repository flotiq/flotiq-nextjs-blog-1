import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from "next/head";

const Layout = ({ children, additionalClass = [], title, description  }) => (
    <main className={['font-sora', 'px-4', ...additionalClass].join(' ')}>
        <Head>
            <html lang="en" />
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title} key="title" />
            <meta name="description" content={description} />
            <link rel="icon" href="/assers/favicons/favicon-32x32.png" />
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID || 'test'}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID|| 'test'}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
        </Head>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
