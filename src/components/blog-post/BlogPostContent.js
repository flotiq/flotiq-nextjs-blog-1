'use client';

import { Header, Content } from 'flotiq-components-react';

const BlogPostContent = ({ title, blocks }) => (
    <>
        <Header
            alignement="center"
            additionalClasses={['px-4 md:px-12 pt-10 pb-10']}
        >
            {title}
        </Header>
        <Content
            blocks={blocks}
            additionalClasses={['px-4 md:px-12 text-sm md:text-lg']}
            fileProps={{
                audioProps: {
                    additionalClasses: [
                        'px-6 md:px-12 w-full md:w-3/5 mx-auto',
                    ],
                },
                imageProps: {
                    additionalClasses: ['w-full md:w-9/12 m-auto'],
                    rounded: '3xl',
                    captionAdditionalClasses: ['w-full md:w-9/12 m-auto'],
                },
            }}
            quoteProps={{
                variant: 'dark',
                additionalClasses: ['px-12 md:px-28 py-4'],
                captionAdditionalClasses: [
                    'bg-primary rounded px-8 py-1.5 opacity-100',
                ],
            }}
            paragraphProps={{ additionalClasses: ['font-light'] }}
        />
    </>
);

export default BlogPostContent;
