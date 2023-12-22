import Link from "next/link"
import DeleteProduct from "./DeleteProduct"

const getProductList = async () => {
    const response = await fetch('http://localhost:3000/api/products', { cache: "no-cache" })
    const productList = await response.json()
    return productList
}

export default async function Page() {
    const productList = await getProductList()
    return (
        <div>
            <h1>Product List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Company</th>
                        <th>Color</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.result.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.company}</td>
                            <td>{product.color}</td>
                            <td>{product.category}</td>
                            <td><Link href={`/productlist/${product._id}`}>Edit</Link></td>
                            <td><DeleteProduct productId={product._id} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}