async function getUser(id) {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const user = await res.json()
    return user
}
export default async function Page({ params }) {
    let userDetail = await getUser(params.user);

    return (
        <div>
            <h1>Users</h1>
            <h2>Name: {userDetail.name}</h2>
            <p>Age: {userDetail.age}</p>
            <p>Id: {userDetail.id}</p>
        </div>
    )
}
