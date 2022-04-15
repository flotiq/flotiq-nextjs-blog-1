import React from 'react';
import { Card } from 'flotiq-components-react';
import Link from 'next/link';
import Image from 'next/image';
import BlogPostMetaDetailsPresentation from './blog-post/BlogPostMetaDetailsPresentation';
import BlogPostTags from './blog-post/BlogPostTags';
import config from '../lib/config';

const CustomCard = ({ title, excerpt, date, readingTime, tags, withTags = false, image, slug }) => {
    const imageName = (image) && image.substring(image.lastIndexOf('/') + 1);
    return (
        <Card
            horizontal
            bordered={false}
            additionalClasses={['mb-4 cursor-pointer']}
            proportionsForHorizontal={{
                body: '2/5',
                img: '3/5',
                breakpoint: 'lg',
            }}
        >
            <Card.Body
                additionalClasses={[
                    'flex flex-col items-start justify-between order-2 lg:order-1 px-5 md:px-10 pt-10 pb-5',
                ]}
            >
                <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
                    <div>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Text additionalClasses={['line-clamp-5 lg:line-clamp-4 xl:line-clamp-5']}>
                            {excerpt}
                        </Card.Text>
                    </div>
                </Link>
                <div className="w-full">
                    {withTags && (
                        <BlogPostTags tags={tags} />
                    )}
                    <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
                        <div className="flex flex-wrap justify-between text-sm md:text-xs xl:text-sm font-light mt-5">
                            <BlogPostMetaDetailsPresentation date={date} readingTime={readingTime} />
                        </div>
                    </Link>
                </div>
            </Card.Body>
            <div className="lg:basis-3/5 order-1 lg:order-2">
                <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
                    <Image alt={title} src={`${config.api.url}/image/0x0/${imageName}.jpg`} width={700} height={300} />
                </Link>
            </div>
        </Card>
    );
};

export default CustomCard;
