"use client"
import { useState } from "react"
import "./style.css"
export default function Page() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const addProduct = async (request) => {
        const res = await fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, price, company, color, category })
        })
        const data = await res.json()
        if (data.success) {
            setName("")
            setPrice("")
            setCompany("")
            setColor("")
            setCategory("")
            alert(data.result)
        }
        else {
            alert(data.result)
        }


    }
    return (
        <div>
            <h1>Add Products</h1>
            <div className="box">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" className="input" />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" className="input" />
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="input" />
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" className="input" />
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="input" />
                <button onClick={addProduct} className="btn">Add Product</button>
            </div>
        </div>
    )
}