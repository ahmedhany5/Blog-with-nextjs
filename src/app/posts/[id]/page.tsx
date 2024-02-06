
import { getComments } from "@/api/comments"
import { getPost } from "@/api/posts"
import { getUser } from "@/api/users"
import { SimpleSkeletonText, Skeleton, SkeletonList } from "@/components/Skeleton"
import Link from "next/link"
import { Suspense } from "react"


export default async function Page({ params }: { params: { id: string } }) {
    const post = await getPost(params.id)
    const user = await getUser(post.userId)
    const comments = await getComments(params.id)
    return (
        <>
            <h1 className="page-title">
                <SimpleSkeletonText>
                    {post.title}
                </SimpleSkeletonText>

            </h1>
            <span className="page-subtitle">
                By:{" "}
                <Suspense fallback={<Skeleton short inline />}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </Suspense>
            </span>

            <h3 className="mt-4 mb-2">Comments</h3>
            <div className="card-stack">
                <Suspense
                    fallback={
                        <SkeletonList amount={5}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="text-sm mb-1">
                                        <Skeleton short />
                                    </div>
                                    <Skeleton />
                                    <Skeleton />
                                </div>
                            </div>
                        </SkeletonList>
                    }
                >
                    {
                        comments.map((comment: { id: string, email: string, body: string }) => (
                            <div key={comment.id} className="card">
                                <div className="card-body">
                                    <div className="text-sm mb-1">{comment.email}</div>
                                    {comment.body}
                                </div>
                            </div>
                        ))
                    }
                </Suspense>
            </div>
        </>
    )
}



