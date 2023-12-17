import Link from "next/link";
import getUser from "../../../services/GetUser";
// import { redirect } from "next/navigation"
export default async function Page() {
    let users = await getUser()
    // console.log(users)
    // redirect("/") // component based redirection
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