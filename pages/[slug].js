import BlogPostTemplate from "../templates/blog-post";
import {getBlogPostBySlug, getBlogPosts} from "../lib/blogPosts";

export default function Home(blogPost, pageContext) {
    return (
        <BlogPostTemplate data={blogPost.data} pageContext={
            {
                slug: blogPost.data.slug,
                previous: pageContext.previous,
                next: pageContext.next
            }
        }
        />
    );
};

export async function getStaticProps({ params }) {

    return {
        props: {
            blogPost: params.post,
            pageContext: {
                previous: params.previous,
                next: params.next,
            }
        },
    }
}

export async function getStaticPaths() {
    const posts = getBlogPosts();

    return {
        paths: posts.map((post, index) => {
            return {
                params: {
                    slug: post.data.slug,
                    post: post.data,
                    previous: posts[index-1]?.data.slug,
                    next: posts[index+1]?.data.slug
                },
            }
        }),
        fallback: false,
    }
}
