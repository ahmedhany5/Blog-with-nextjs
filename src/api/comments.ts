import { baseApi } from "./base";


export function getComments( postId: string) {
    return baseApi.get(`posts/${postId}/comments`).then(res => res.json())
}
