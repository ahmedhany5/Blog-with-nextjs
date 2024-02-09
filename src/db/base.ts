


export const baseApi = {
    get: async (url: string) => {
        return await fetch(`http://localhost:3001/${url}`)
    },
    post: async ({ url, body }: { url: string, body: any }) => {
        return await fetch(url, { method: 'POST', body: JSON.stringify(body) })
    }

}
