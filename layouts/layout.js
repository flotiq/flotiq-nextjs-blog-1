import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [], title, description }) => (
    <main className={['font-sora', 'px-4', ...additionalClass].join(' ')}>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title} key="title" />
            <meta name="description" content={description} />
        </Head>
        <Header />
        {children}
        <Footer />
    </main>
);

export default Layout;
