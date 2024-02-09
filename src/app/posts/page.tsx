import { getPosts } from "@/db/posts";
import { PostCard } from "@/components/PostCard";
import { SearchForm } from "./SearchForm";
import { getUsers } from "@/db/users";
import notFound from "../not-found";

type propsType = {
  searchParams: { query?: string; userId?: string };
};


export default function PostList({
  searchParams: { userId = "", query = "" },
}: propsType) {
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <SearchForm userSelect={<UserSelect />} />
      <div className="card-grid">
        <PostGrid userId={userId} query={query} />
      </div>
    </>
  );
}

async function PostGrid({ userId, query }: { userId: string; query: string }) {
  const posts = await getPosts();

  return posts.map((post) => <PostCard key={post.id} {...post} />);
}

async function UserSelect() {
  const users = await getUsers();

  return (
    <>
      <option value="">Any</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </>
  );
}
