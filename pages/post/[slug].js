import BlogPostTemplate from "../../templates/blog-post";
import {getBlogPostBySlug, getBlogPosts, getNextBlogPost, getPreviousBlogPost} from "../../lib/blogPosts";

export default function Home({post, pageContext}) {
    return (
        <BlogPostTemplate post={post} pageContext={
            {
                pageContext
            }
        }
        />
    );
};

export async function getStaticProps({ params }) {
    const postBySlug = await getBlogPostBySlug(params.slug);
    const createdAt = postBySlug?.data[0]?.internal.createdAt;
    const previousPost = await getPreviousBlogPost(createdAt || null);
    const previousPostSlug = (previousPost && previousPost.data && previousPost.data[0]) ? previousPost.data[0].slug : null;
    const nextPost = await getNextBlogPost(createdAt || null);
    const nextPostSlug =  (nextPost && nextPost.data && nextPost.data[0]) ? nextPost.data[0].slug : null;

    return {
        props: {
            post: postBySlug.data[0],
            pageContext: {
                previous: previousPostSlug,
                next: nextPostSlug,
            }
        },
    }
}

export async function getStaticPaths() {
    const posts = await getBlogPosts(1, 10000);
    const postData = posts.data;

    return {
        paths: postData.map((post) => {
            return {
                params: {
                    slug: post.slug
                },
            }
        }),
        fallback: false,
    }
}
