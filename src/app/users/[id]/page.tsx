import { getUserTodos } from "@/db/todos";
import { getUser } from "@/db/users";
import { PostCard } from "@/components/PostCard";
import {
  SimpleSkeletonText,
  Skeleton,
  SkeletonList,
} from "@/components/Skeleton";
import { TodoItem } from "@/components/TodoItem";
import { Suspense } from "react";
import { getUserPosts } from "@/db/posts";

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  const posts = await getUserPosts(params.id);
  const todos = await getUserTodos(params.id);

  console.log(user);
  console.log(posts)
  return (
    <>
      <h1 className="page-title">
        <SimpleSkeletonText>{user?.name}</SimpleSkeletonText>
      </h1>
      <div className="page-subtitle">
        <SimpleSkeletonText>{user?.email}</SimpleSkeletonText>
      </div>
      <div>
        <b>Company:</b>{" "}
        <SimpleSkeletonText>{user?.companyName}</SimpleSkeletonText>
      </div>
      <div>
        <b>Website:</b> <SimpleSkeletonText>{user?.website}</SimpleSkeletonText>
      </div>

      <div>
        <b>Address:</b>{" "}
        <SimpleSkeletonText>
          {`${user?.street} ${user?.suite}
                     ${user?.city} ${user?.zipcode}`}
        </SimpleSkeletonText>
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
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
          {todos.map(
            (todo) => (
              <TodoItem key={todo.id} {...todo} />
            )
          )}
        </Suspense>
      </ul>
    </>
  );
}
