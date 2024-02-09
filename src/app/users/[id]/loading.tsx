import { Skeleton, SkeletonList } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div>
            < div className="card" >
                <div className="card-body">
                    <Skeleton />
                    <Skeleton />
                </div>
            </div >
        </div >
    )
}
