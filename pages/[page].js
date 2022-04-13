import Layout from "../layouts/layout";
import Announcement from "../components/Announcement";
import Pagination from "flotiq-components-react/dist/components/Pagination/Pagination";
import {getBlogPosts} from "../lib/blogPosts";
import BlogCards from "../sections/BlogCards";
import {config} from "../lib/config";


export default function Home({posts, pageContext}) {
    return (
        <Layout
            title={config.siteMetadata.title}
            description={config.siteMetadata.description}
            additionalClass={['bg-light-gray']}
        >
            <Announcement
                content="This is the Blog where you can find any kind of information and rich media content.
                Use it for your needs, add content and customize in any way"
            />
            <BlogCards posts={posts}/>
            <Pagination page={pageContext.currentPage} numOfPages={pageContext.numPages} rounded="md"/>
        </Layout>
    )
}

export async const getStaticProps = ({params}) => {
    const fetchPost = getBlogPosts(params.currentPage, config.blog.postPerPage);
    return {
        props: {
            posts: fetchPost.data,
            pageContext: {
                currentPage: params.currentPage,
                numPages: params.numPages,
            }
        },
    };
};

export async const getStaticPaths = () => {
    const fetcher = getBlogPosts(1, config.blog.postPerPage);
    const pages = fetcher.total_pages
    const pathRule = (number) => {
        return number === 0 ? '/' : `/${number + 1}`;
    }
    const paths = Array.from(Array(pages - 1).keys()).map((i) => ({
        params: {page: pathRule(i), currentPage: i + 1, numPages: pages},
    }));

    return {
        paths: paths,
        fallback: false,
    };
};
