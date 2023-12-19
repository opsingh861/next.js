"use client"

export default function DeleteUser({ id}) {
   
    async function deleteUser() {
        let res = await fetch(`http://localhost:3000/api/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        res = await res.json()
        console.log(res)
        alert(res.success ? "User deleted successfully" : "User not deleted")
    }
    return (
        <div>
            <button onClick={deleteUser}>Delete</button>
        </div>
    )
}
