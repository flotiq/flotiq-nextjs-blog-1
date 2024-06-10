import Pagination from 'flotiq-components-react/dist/components/Pagination/Pagination';
import React from 'react';
import Layout from '../layouts/layout';
import Announcement from '../components/Announcement';
import { getBlogPosts } from '../lib/blogPosts';
import BlogCards from '../sections/BlogCards';
import config from '../lib/config';

const Home = ({ posts, pageContext }) => (
    <Layout
        title={config.siteMetadata.title}
        description={config.siteMetadata.description}
        additionalClass={['bg-light-gray']}
    >
        <Announcement
            content="This is the Blog where you can find any kind of information and rich media content.
                Use it for your needs, add content and customize in any way"
        />
        <BlogCards posts={posts} />
        {pageContext.numPages > 1 && (
            <Pagination page={pageContext.currentPage} numOfPages={pageContext.numPages} rounded="md" />
        )}
    </Layout>
);

export async function getStaticProps({ params }) {
    const posts = await getBlogPosts(params.page, config.blog.postPerPage);

    /**
     *  This function is used to sanitize the API responses, without it the getStaticProps()
     *  methods are not working properly as Next tries to serialize values which are possibly
     *  `undefined` (which results in an error).
     */
    const sanitizedPosts = JSON.parse(JSON.stringify(posts));

    return {
        props: {
            posts: sanitizedPosts.data,
            pageContext: {
                currentPage: sanitizedPosts.current_page,
                numPages: sanitizedPosts.total_pages,
            },
        },
    };
}

export async function getStaticPaths() {
    const fetcher = await getBlogPosts(1, config.blog.postPerPage);
    const pages = fetcher.total_pages;
    const pathRule = (number) => `${number + 1}`;
    let paths = {};

    if (pages > 1) {
        paths = Array.from(Array(pages - 1).keys()).map((i) => ({
            params: { page: pathRule(i) },
        }));
    } else {
        paths = Array.from(Array(pages).keys()).map((i) => ({
            params: { page: pathRule(i) },
        }));
    }

    return {
        paths,
        fallback: false,
    };
}

export default Home;
