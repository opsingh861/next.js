
const getProductList = async () => {
    const response = await fetch('http://localhost:3000/api/products')
    const productList = await response.json()
    return productList
}

export default async function Page() {
    const productList = await getProductList()
    console.log(productList)
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
                    {productList.result.map((product,index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.company}</td>
                            <td>{product.color}</td>
                            <td>{product.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}