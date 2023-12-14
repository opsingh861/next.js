"use client"

import { useEffect, useState } from "react"

export default function ProductList() {
    const [products, setProducts] = useState([])
    const getProductList = async () => {
        const response = await fetch("https://dummyjson.com/products")
        const products = await response.json()
        setProducts(products.products)
    }
    useEffect(() => {
        getProductList()
    }, [])
    return (
        <main>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.title}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}