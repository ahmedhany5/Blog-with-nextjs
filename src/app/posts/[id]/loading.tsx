import { Skeleton, SkeletonList } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div><SkeletonList amount={5} >
            <div className="card">
                <div className="card-body">
                    <div className="text-sm mb-1">
                        <Skeleton short />
                    </div>
                    <Skeleton />
                    <Skeleton />
                </div>
            </div>
        </SkeletonList></div>
    )
}
