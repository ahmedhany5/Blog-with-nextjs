import { getUsers } from "@/api/users"
import Link from "next/link"

export default async function Page() {
    const users = await getUsers()
    return (
        <>
            <h1 className="page-title">Users</h1>
            <div className="card-grid">
                {users.map((user: { id: string, name: string, company: { name: string }, website: string, email: string }) => (
                    <div key={user.id} className="card">
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <div>{user.company.name}</div>
                            <div>{user.website}</div>
                            <div>{user.email}</div>
                        </div>
                        <div className="card-footer">
                            <Link className="btn" href={`/users/${user.id}`}>
                                View
                            </Link>
                        </div>
                    </div>
                ))
                }
            </div>
        </>)
}
