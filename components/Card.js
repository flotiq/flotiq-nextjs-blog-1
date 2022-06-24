import React from 'react';
import { Card } from 'flotiq-components-react';
import Link from 'next/link';
import Image from 'next/image';
import BlogPostMetaDetailsPresentation from './blog-post/BlogPostMetaDetailsPresentation';
import BlogPostTags from './blog-post/BlogPostTags';
import FlotiqImage from '../lib/flotiqImage';

const CustomCard = ({ title, excerpt, date, readingTime, tags, withTags = false, image, slug }) => (
    <Link href={`/post/${encodeURIComponent(slug)}`} passHref>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
            <Card
                horizontal
                bordered={false}
                additionalClasses={['mb-4']}
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
                    <Card.Title>
                        {title}
                    </Card.Title>
                    <Card.Text additionalClasses={['line-clamp-5 lg:line-clamp-4 xl:line-clamp-5']}>
                        {excerpt}
                    </Card.Text>
                    <div className="grow" />
                    <div className="w-full">
                        {withTags && (
                            <BlogPostTags tags={tags} />
                        )}
                        <div
                            className="flex flex-wrap justify-between text-sm md:text-xs xl:text-sm font-light mt-5"
                        >
                            <BlogPostMetaDetailsPresentation date={date} readingTime={readingTime} />
                        </div>
                    </div>
                </Card.Body>
                <div className="lg:basis-3/5 order-1 lg:order-2 w-full block leading-[0]">
                    <Image
                        alt={title}
                        src={FlotiqImage.getSrc(image, 875, 480)}
                        width="875"
                        height="480"
                    />
                </div>
            </Card>
        </a>
    </Link>
);

export default CustomCard;
