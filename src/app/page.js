import Link from "next/link"

export default function Page() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link href="http://localhost:3000/productlist">
                Product list
            </Link>
            <br />
            <Link href="http://localhost:3000/addproduct">
                Add product
            </Link>
        </div>
    )
}

