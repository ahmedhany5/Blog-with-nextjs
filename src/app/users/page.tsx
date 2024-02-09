import { getUsers } from "@/db/users";
import Link from "next/link";
import { Suspense } from "react";
import { SkeletonList } from "@/components/Skeleton";
import { SkeletonPostCard } from "@/components/PostCard";

export default function Page() {
    ;
    return (
        <>
            <h1 className="page-title">Users</h1>

            <div className="card-grid">
                <Suspense
                    fallback={
                        <SkeletonList amount={5}>
                            <div className="card-grid">
                                <SkeletonList amount={5}>
                                    <SkeletonPostCard />
                                </SkeletonList>
                            </div>
                        </SkeletonList>
                    }
                >
                    <UsersGrid />
                </Suspense>
            </div>
        </>
    );
}

async function UsersGrid() {
    const users = await getUsers();

    return users.map((user) => <UserDetails key={user.id} {...user} />);
}

function UserDetails(user: {
    id: number;
    name: string;
    email: string;
    website: string;
    companyName: string;
    city: string;
    street: string;
    zipcode: string;
    suite: string;
    key: number;
}) {
    return (
        <>
            <div className="card" key={user.id}>
                <div className="card-header">{user.name}</div>
                <div className="card-body">
                    <div>{user.companyName}</div>
                    <div>{user.website}</div>
                    <div>{user.email}</div>
                </div>
                <div className="card-footer">
                    <Link className="btn" href={`/users/${user.id}`}>
                        View
                    </Link>
                </div>
            </div>
        </>
    );
}
