import React from 'react';
import moment from 'moment';
import { Content, Header } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import BlogPostFeaturedImage from '../components/blog-post/BlogPostFeaturedImage';
import BlogPostAuthor from '../components/blog-post/BlogPostAuthor';
import BlogPostMetaDetails from '../components/blog-post/BlogPostMetaDetails';
import BlogPostNavigation from '../components/blog-post/BlogPostNavigation';
import config from '../lib/config';

const BlogPostTemplate = ({ post, pageContext }) => (
    <Layout
        title={`${config.siteMetadata.title} | ${post.title}`}
        description={post.excerpt}
        additionalClass={['bg-white px-6']}
    >
        <article className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
            {(post.headerImage && post.headerImage[0]) && (
                <BlogPostFeaturedImage headerImage={post.headerImage[0]} title={post.title} />
            )}
            <BlogPostMetaDetails
                date={moment(post.internal.createdAt).format(' Do MMMM yyyy')}
                readingTime=" 7 min"
                tags={['#photo', '#cookig', '#food']}
                additionalClass={['py-6']}
            />
            <Header alignement="center" additionalClasses={['px-4 md:px-12 pt-10 pb-10']}>
                {post.title}
            </Header>
            <Content
                blocks={post.content.blocks}
                additionalClasses={['px-4 md:px-12 text-sm md:text-lg']}
                fileProps={{
                    audioProps: { additionalClasses: ['px-6 md:px-12 w-full md:w-3/5 mx-auto'] },
                    imageProps: {
                        additionalClasses: ['w-full md:w-9/12 m-auto'],
                        rounded: '3xl',
                        captionAdditionalClasses: ['w-full md:w-9/12 m-auto'],
                    },
                }}
                quoteProps={
                    {
                        variant: 'dark',
                        additionalClasses: ['px-12 md:px-28 py-4'],
                        captionAdditionalClasses: ['bg-primary rounded px-8 py-1.5 opacity-100'],
                    }
                }
                paragraphProps={{ additionalClasses: ['font-light'] }}
            />
            <BlogPostAuthor authorName=" John Doe" additionalClass={['py-5']} />
        </article>
        <BlogPostNavigation
            additionalClass={['mt-3']}
            prevText="Previous post"
            nextText="Next post"
            pageContext={pageContext}
        />
    </Layout>
);

export default BlogPostTemplate;
