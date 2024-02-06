import { getUser } from "@/api/users";
import { PostCard } from "@/components/PostCard";
import { SimpleSkeletonText, Skeleton, SkeletonList } from "@/components/Skeleton";
import { TodoItem } from "@/components/TodoItem";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: string } }) {
    const user = await getUser(params.id)
    const posts = await getUser(params.id, "posts")
    const todos = await getUser(params.id, "todos")


    console.log(user.name)

    return (
        <>
            <h1 className="page-title">
                <SimpleSkeletonText >
                    {user.name}
                </SimpleSkeletonText>
            </h1>
            <div className="page-subtitle">
                <SimpleSkeletonText >
                    {user.email}
                </SimpleSkeletonText>
            </div>
            <div>
                <b>Company:</b>{" "}
                <SimpleSkeletonText >
                    {user.company.name}
                </SimpleSkeletonText>
            </div>
            <div>
                <b>Website:</b>{" "}
                <SimpleSkeletonText >
                    {user.website}
                </SimpleSkeletonText>
            </div>

            <div>
                <b>Address:</b>{" "}
                <SimpleSkeletonText >
                    {`${user.address.street} ${user.address.suite}
                     ${user.address.city} ${user.address.zipcode}`}
                </SimpleSkeletonText>
            </div>

            <h3 className="mt-4 mb-2">Posts</h3>
            <div className="card-grid">
                {posts.map((post: { id: string, title: string, body: string }) => <PostCard key={post.id} {...post} />)}
            </div>
            <h3 className="mt-4 mb-2">Todos</h3>
            <ul>
                <Suspense
                    fallback={
                        <SkeletonList amount={5}>
                            <li>
                                <Skeleton short />
                            </li>
                        </SkeletonList>
                    }
                >
                    {todos.map((todo: { id: string, title: string, completed: boolean }) => <TodoItem key={todo.id} {...todo} />)}
                </Suspense>
            </ul>
        </>
    )
}
