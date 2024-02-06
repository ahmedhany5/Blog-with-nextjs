import { baseApi } from "./base";


export function getPosts() {
    return baseApi.get('posts').then(res => res.json())
}


export function getPost(postId: string) {
    return baseApi.get(`posts/${postId}`).then(res => res.json())
}
