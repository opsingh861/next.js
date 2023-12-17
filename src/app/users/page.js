import Link from "next/link";
import getUser from "../../../services/GetUser";

export default async function Page() {
    let users = await getUser()
    // console.log(users)
    return (
        <div>
            <h1>Users</h1>
            {
                users.map(user => (
                    <div key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}