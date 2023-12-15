
async function getList() {
    let users = await fetch("https://dummyjson.com/users");
    users = await users.json();
    return users.users;
}

export default async function UserList() {
    const users = await getList();
    // delay for 1 second
    await new Promise(resolve => setTimeout(resolve, 5000));
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.firstName}</li>
                ))}
            </ul>
        </div>
    )
}