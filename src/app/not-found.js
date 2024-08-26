'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { Button, Header as FlotiqHeader } from 'flotiq-components-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function NotFound() {
    const ref = useRef();

    useEffect(() => {
        // https://github.com/vercel/next.js/issues/45620
        document.title = 'Page not found';
    }, []);

    return (
        <main className="px-4">
            <Header />
            <div className="flex flex-col h-screen justify-center items-center">
                <FlotiqHeader
                    alignment="center"
                    additionalClasses={['my-20', '!py-20']}
                >
                    Page not found, sorry
                </FlotiqHeader>
                <div className="text-center my-20 py-20">
                    <Link href="/" passHref ref={ref}>
                        <Button
                            ref={ref}
                            variant="secondary"
                            label="Go back to index"
                        />
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}
