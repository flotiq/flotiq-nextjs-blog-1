import { FlotiqApi } from '../../flotiqApi';

const apiKey = process.env.FLOTIQ_API_KEY;
const DEFAULT_ORDER = 'internal.createdAt';
const DEFAULT_DIRECTION = 'desc';
const DEFAULT_LIMIT = 6;
const api = new FlotiqApi(apiKey);

const getPost = async (filters, order) => {
    const postReponse = await api.BlogPostAPI.list({
        page: 1,
        limit: 1,
        order_by: DEFAULT_ORDER,
        order_direction: order || DEFAULT_DIRECTION,
        ...(filters ? { filters } : {}),
    });
    return postReponse?.data?.[0];
};

export async function getBlogPosts(page = 1, limit = DEFAULT_LIMIT) {
    return api.BlogPostAPI.list({
        page,
        limit,
        order_by: DEFAULT_ORDER,
        order_direction: DEFAULT_DIRECTION,
    });
}

export async function getBlogPostBySlug(slug) {
    const filters = `{"slug":{"type":"contains","filter":"${slug}"}}`;
    return getPost(filters);
}

export async function getPreviousBlogPost(date) {
    const filters = `{"internal.createdAt":{"type":"lessThan", "filter": "${date}"}}`;
    return getPost(filters);
}

export async function getNextBlogPost(date) {
    const filters = `{"internal.createdAt":{"type":"greaterThan","filter":"${date}"}}`;
    return getPost(filters, 'asc');
}
