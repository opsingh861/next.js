'use client'

import React, { useState } from "react";
export default function AddUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [result, setResult] = useState("");
    const [success, setSuccess] = useState(false);

    const addUser = async () => {
        if(!name || !age) {
            alert("name and age are required");
            return;
        }
        const res = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            body: JSON.stringify({ name, age }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        setResult(data.result);
        setSuccess(data.success);
        console.log(data);
        console.log(name, age)
    };

    return (
        <div>
            <h1>Add User</h1>
            <input
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="age"
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>
            <p>{result}</p>
            <p>{success ? "Success" : "Failed"}</p>
        </div>
    );
}