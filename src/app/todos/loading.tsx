import { Skeleton, SkeletonList } from "@/components/Skeleton";

export default function Loading() {
    return (
        <div>

            <SkeletonList amount={10}>
                <li>
                    <Skeleton short />
                </li>
            </SkeletonList>

        </div>

    )
}
