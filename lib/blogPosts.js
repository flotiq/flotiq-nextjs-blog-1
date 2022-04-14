const apiUrl = process.env.FLOTIQ_API_URL
const apiKey = process.env.FLOTIQ_API_KEY

export async function getBlogPosts(page = 1, limit = 10) {
    const url = `${apiUrl}/api/v1/content/blogpost?page=${page}&limit=${limit}&order_by=internal.createdAt&order_direction=asc&hydrate=0&auth_token=${apiKey}`
    const res = await fetch(
        url
    )
    return res.json()
}
export async function getBlogPostBySlug(slug) {
    const url = `${apiUrl}/api/v1/content/blogpost?page=${1}&limit=${1}&order_by=internal.createdAt&order_direction=asc&hydrate=0&auth_token=${apiKey}&filters={"slug":{"type":"contains","filter":"${slug}"}}`;
    const res = await fetch(
        url
    )
    return res.json()
}

export async function getPreviousBlogPost(date) {
    const url = `${apiUrl}/api/v1/content/blogpost?page=${1}&limit=${1}&order_by=internal.createdAt&order_direction=desc&hydrate=0&auth_token=${apiKey}&filters={"internal.createdAt":{"type":"lessThan", "filter": "${date}"}}`;
    const res = await fetch(
        url
    )
    return res.json()
}

export async function getNextBlogPost(date) {
    const url = `${apiUrl}/api/v1/content/blogpost?page=${1}&limit=${1}&order_by=internal.createdAt&order_direction=desc&hydrate=0&auth_token=${apiKey}&filters={"internal.createdAt":{"type":"greaterThan","filter":"${date}"}}`;
    const res = await fetch(
        url
    )
    return res.json()
}
