"use client"
import { useEffect, useState } from "react"
import "@/app/style.css"
import { NextResponse } from "next/server"
import { Router } from "next/router"
export default function Page(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [color, setColor] = useState("")
    const [category, setCategory] = useState("")
    const productId = props.params.editproduct
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const res = await fetch(`http://localhost:3000/api/products/${productId}`)
        const data = await res.json()
        setName(data.result.name)
        setPrice(data.result.price)
        setCompany(data.result.company)
        setColor(data.result.color)
        setCategory(data.result.category)
    }
    let flag = false;
    const updateProduct = async () => {
        const res = await fetch(`http://localhost:3000/api/products/${productId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, price, company, color, category })
        })
        const data = await res.json()
        if (data.success) {
            alert(data.result)

        }
        else {
            alert(data.result)
        }
        if(!flag){
            Router.push("/productlist")
        }
    }
    return (
        <div>
            <h1>Add Products</h1>
            <div className="box">
                <input type="text" defaultValue={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" className="input" />
                <input type="text" defaultValue={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" className="input" />
                <input type="text" defaultValue={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" className="input" />
                <input type="text" defaultValue={color} onChange={(e) => setColor(e.target.value)} placeholder="Color" className="input" />
                <input type="text" defaultValue={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="input" />
                <button onClick={updateProduct} className="btn">Update Product</button>
            </div>
        </div>
    )
}