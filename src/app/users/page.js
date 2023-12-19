import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers() {
    const res = await fetch('http://localhost:3000/api/users')
    const users = await res.json()
    return users
}

export default async function Page() {
    const users = await getUsers()
    console.log(users)
    return (
        <div>
            <h1>Users</h1>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h2>
                            <span style={{ margin: '20px' }}>
                                <Link href={`/users/${user.id}`}>
                                    {user.name}
                                </Link>
                            </span>
                            <span style={{ margin: '20px' }}>
                                <Link href={`/users/${user.id}/update`}>
                                    Edit
                                </Link>
                            </span>
                            <span style={{ margin: '20px' }}>
                                <DeleteUser id={user.id} />
                            </span>
                        </h2>
                    </div>
                ))
            }
        </div>
    )
}