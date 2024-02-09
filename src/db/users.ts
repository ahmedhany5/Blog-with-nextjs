import { unstable_cache } from "next/cache"
import prisma from "./db"
import { cache } from "react"

export const getUsers = unstable_cache(cache(()=> {
    return prisma.user.findMany()
}), ["users"])

export const getUser = unstable_cache(cache((userId: string | number) => {
    
    return prisma.user.findUnique({ where: { id: Number(userId) } })
}), ["users", "userId"])

function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}
