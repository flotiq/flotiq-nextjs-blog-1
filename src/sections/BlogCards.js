'use client';

import { Pagination } from 'flotiq-components-react';
import moment from 'moment';
import CustomCard from '@/components/Card';

const BlogCards = ({ posts, page, numOfPages }) => (
    <>
        <div className="max-w-7xl mt-12 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8">
            {posts.map((post) => (
                <CustomCard
                    key={post.id}
                    title={post.title}
                    excerpt={post.excerpt}
                    tags={['#photo', '#cookig', '#food']}
                    date={moment(post.internal.createdAt).format(
                        'Do MMMM yyyy'
                    )}
                    readingTime="7 min"
                    image={post.headerImage?.[0]}
                    slug={post.slug}
                />
            ))}
        </div>
        {numOfPages > 1 && (
            <Pagination page={page} numOfPages={numOfPages} rounded="md" />
        )}
    </>
);

export default BlogCards;
