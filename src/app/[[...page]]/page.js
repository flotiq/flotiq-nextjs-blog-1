import Announcement from '@/components/Announcement';
import BlogCards from '@/sections/BlogCards';
import { getBlogPosts } from '@/lib/blogPosts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const reponse = await getBlogPosts(1, 10000);
    const pages = [];
    for (let page = 0; page < reponse.total_pages; page += 1) {
        pages.push(page + 1);
    }
    return pages;
}

export default async function Home({ params }) {
    const page = !params?.page ? 1 : +params.page[0];
    if (params.page?.length > 1 || !page) {
        return notFound();
    }

    const reponse = await getBlogPosts(page);

    if (params.page > reponse.total_pages) {
        return notFound();
    }

    return (
        <>
            <Announcement
                content={
                    'This is the Blog where you can find any kind of information and rich media content. ' +
                    'Use it for your needs, add content and customize in any way'
                }
            />
            <BlogCards
                posts={reponse.data}
                page={reponse.current_page}
                numOfPages={reponse.total_pages}
            />
        </>
    );
}
