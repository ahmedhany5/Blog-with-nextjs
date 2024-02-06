import { baseApi } from "./base";



export function getTodos() {
    return baseApi.get('todos').then(res => res.json())
}
