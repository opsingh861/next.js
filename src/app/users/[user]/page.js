import getUser from "../../../../services/GetUser"

export default async function Page({ params }) {
    let users = await getUser()
    let userNo = params.user
    let user = users[userNo - 1]
    console.log(user)

    return (
        <div>
            <h1>Users</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}

export async function generateStaticParams() {
    let data = await getUser()
    let users = await data
    return users.map(user => ({
        user: user.id.toString()
    }))

}