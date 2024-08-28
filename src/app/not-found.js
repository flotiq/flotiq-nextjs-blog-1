'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { Button, Header as FlotiqHeader } from 'flotiq-components-react';
import LayoutTemplate from '@/templates/LayoutTemplate';

export default function NotFound() {
    const ref = useRef();

    useEffect(() => {
        // Due to the issue, the title has to be changed dynamically
        // https://github.com/vercel/next.js/issues/45620
        document.title = 'Page not found';
    }, []);

    return (
        <LayoutTemplate className="px-4">
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
        </LayoutTemplate>
    );
}
