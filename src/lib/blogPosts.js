import { Flotiq } from '@flotiq/flotiq-api-sdk';

const apiKey = process.env.FLOTIQ_API_KEY;
const DEFAULT_ORDER = 'internal.createdAt';
const DEFAULT_DIRECTION = 'desc';
const DEFAULT_LIMIT = 6;
export const api = new Flotiq(apiKey);

const getPost = async (filters, orderDirection) => {
    const postResponse = await api.content.blogpost.list({
        page: 1,
        limit: 1,
        order_by: DEFAULT_ORDER,
        order_direction: orderDirection || DEFAULT_DIRECTION,
        hydrate: 1,
        ...(filters ? { filters } : {}),
    });
    return postResponse?.data?.[0];
};

export async function getBlogPosts(page = 1, limit = DEFAULT_LIMIT) {
    return api.content.blogpost.list({
        page,
        limit,
        order_by: DEFAULT_ORDER,
        order_direction: DEFAULT_DIRECTION,
        hydrate: 1,
    });
}

export async function getBlogPostBySlug(slug) {
    const filters = {"slug":{"type":"contains","filter":`${slug}`}};
    return getPost(filters);
}

export async function getPreviousBlogPost(date) {
    const filters = {"internal.createdAt":{"type":"lessThan", "filter": `${date}`}};

    return getPost(filters);
}

export async function getNextBlogPost(date) {
    const filters = {"internal.createdAt":{"type":"greaterThan","filter": `${date}`}};
    return getPost(filters, 'asc');
}
