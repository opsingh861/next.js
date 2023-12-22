"use client"

import { useRouter } from "next/navigation"

export default function DeleteProduct(params) {
    console.log(params)
    const id = params.productId
    const router = useRouter();
    const deleteProduct = async () => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json()
        if (data.success) {
            alert(data.result)
            router.push("/productlist")
        }
        else {
            alert(data.result)
        }
    }
    return (
        <div>
            <button onClick={deleteProduct}>Delete Product</button>
        </div>
    )
}