'use client'
import { useEffect, useState } from "react"
export default function Page({ params }) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    let id = params.user;
    useEffect(() => {
        getUser().then(user => {
            setName(user.name)
            setAge(user.age)
        })
    }, [])
    async function getUser() {
        const res = await fetch(`http://localhost:3000/api/users/${id}`)
        const user = await res.json()
        return user
    }
    async function updateUser() {
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, age })
        })
        const user = await res.json()
        console.log(user.success)
        if (user.success) {
            alert("User updated successfully")
        } else {
            alert("User not updated")
        }
    }
    return (
        <div>
            <h1>Update User</h1>
            <input value={name} type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input value={age} type="text" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
            <button onClick={updateUser}>Update</button>
        </div>
    )
}