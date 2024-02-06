import { SkeletonPostCard } from "@/components/PostCard";
import { SkeletonList } from "@/components/Skeleton";

export default function Loading() {
    return (
        <><SkeletonList amount={5}>
            <SkeletonPostCard />
        </SkeletonList></>
    )
}
