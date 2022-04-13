import React from 'react';
import { Card } from 'flotiq-components-react';
import Link from 'next/link'
import BlogPostMetaDetailsPresentation from "./blog-post/BlogPostMetaDetailsPresentation";
import BlogPostTags from "./blog-post/BlogPostTags";

const CustomCard = ({ title, excerpt, date, readingTime, tags, withTags = false, image, slug }) => {
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
                <Link to={`/${encodeURIComponent(slug)}`}>
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
                    <Link to={`/${encodeURIComponent(slug)}`}>
                        <div className="flex flex-wrap justify-between text-sm md:text-xs xl:text-sm font-light mt-5">
                            <BlogPostMetaDetailsPresentation date={date} readingTime={readingTime} />
                        </div>
                    </Link>
                </div>
            </Card.Body>
            <Link to={`/${encodeURIComponent(slug)}`} className="lg:basis-3/5 order-1 lg:order-2">
                <Card.Img src={image} alt={title} additionalContainerClasses={['order-1 lg:order-2']} />
            </Link>
        </Card>
    );
};

export default CustomCard;
