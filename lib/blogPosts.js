export async function getBlogPosts(page = 1, limit = 10, filters) {
    const apiUrl = process.env.FLOTIQ_API_URL
    const apiKey = process.env.FLOTIQ_API_KEY

    const res = await fetch(
        `${apiUrl}/api/v1/content/blogpost?page=${page}&limit=${limit}&order_by=internal.createdAt&order_direction=asc&hydrate=0&filters={${filters}}&auth_token=${apiKey}`
    )
    return res.json()
}
