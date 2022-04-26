import { Header } from 'flotiq-components-react';
import React, { useRef } from 'react';
import Link from 'next/link';
import Button from 'flotiq-components-react/dist/components/Button/Button';
import Layout from '../layouts/layout';

const title = 'Page not found';
const NotFoundPage = () => {
    const ref = useRef();
    return (
        <Layout title={title}>
            <main className="flex flex-col h-screen justify-center items-center">
                <Header text="Page not found, sorry" alignment="center" additionalClasses={['my-20', '!py-20']} />
                <div className="text-center my-20 py-20">
                    <Link href="/" passHref ref={ref}>
                        <Button ref={ref} variant="secondary" label="Go back to index" />
                    </Link>
                </div>
            </main>
        </Layout>
    );
};

export default NotFoundPage;
