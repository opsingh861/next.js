const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const products = await response.json();
    return products.products;
}

export default async function ProductList() {
    const products = await getProducts();
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