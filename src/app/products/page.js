"use client"

import { useEffect, useState } from "react"

async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
}

export default function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetchProducts().then(products => setProducts(products))
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