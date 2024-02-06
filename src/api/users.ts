import { baseApi } from "./base";



export function getUsers() {
    return baseApi.get('users').then(res => res.json())
}


export function getUser(userId: string, userItemsPath= "") {
    return baseApi.get(`users/${userId}/${userItemsPath}`).then(res => res.json())
}
