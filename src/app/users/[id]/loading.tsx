import { SkeletonPostCard } from '@/components/PostCard'
import { SkeletonList } from '@/components/Skeleton'
import React from 'react'

export default function loading() {
    return (
        <SkeletonList amount={5}>
            <SkeletonPostCard />
        </SkeletonList>
    )
}
