export default async function getUser() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
    users = await users.json()
    return users
}