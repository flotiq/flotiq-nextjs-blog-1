import moment from 'moment';
import {
    getBlogPostBySlug,
    getBlogPosts,
    getNextBlogPost,
    getPreviousBlogPost,
} from '@/lib/blogPosts';
import BlogPostFeaturedImage from '@/components/blog-post/BlogPostFeaturedImage';
import BlogPostMetaDetails from '@/components/blog-post/BlogPostMetaDetails';
import BlogPostAuthor from '@/components/blog-post/BlogPostAuthor';
import BlogPostNavigation from '@/components/blog-post/BlogPostNavigation';
import BlogPostContent from '@/components/blog-post/BlogPostContent';

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = await getBlogPosts(1, 10000);
    const postData = posts.data;
    return postData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const postBySlug = await getBlogPostBySlug(params.slug);
    return { title: postBySlug.title, description: postBySlug.excerpt };
}

export default async function PostPage({ params }) {
    const postBySlug = await getBlogPostBySlug(params.slug);
    const createdAt = postBySlug.internal.createdAt;
    const previousPost = await getPreviousBlogPost(createdAt || null);
    const nextPost = await getNextBlogPost(createdAt || null);

    return (
        <>
            <article className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                {postBySlug.headerImage?.[0] && (
                    <BlogPostFeaturedImage
                        headerImage={postBySlug.headerImage[0]}
                        title={postBySlug.title}
                    />
                )}
                <BlogPostMetaDetails
                    date={moment(postBySlug.internal.createdAt).format(
                        ' Do MMMM yyyy'
                    )}
                    readingTime=" 7 min"
                    tags={['#photo', '#cookig', '#food']}
                    additionalClass={['py-6']}
                />
                <BlogPostContent
                    title={postBySlug.title}
                    blocks={postBySlug.content.blocks}
                />
                <BlogPostAuthor
                    authorName=" John Doe"
                    additionalClass={['py-5']}
                />
            </article>
            <BlogPostNavigation
                additionalClass={['mt-3']}
                prevText="Previous post"
                nextText="Next post"
                previousSlug={previousPost?.slug}
                nextSlug={nextPost?.slug}
            />
        </>
    );
}
