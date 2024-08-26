'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Button, Header as FlotiqHeader } from 'flotiq-components-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata = {
    title: 'Page not found',
    openGraph: { title: 'Page not found' },
};

export default function NotFound() {
    const ref = useRef();
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
