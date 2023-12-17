import { BASE_URL } from "../../config/constant"

export default async function Page() {
    const data = process.env.NODE_ENV
    console.log(data)
    console.log(process.env.PASSWORD)
    return (
        <div>
            <h1>Home</h1>
            {
                data === "development" ? <p>Development</p> : <p>Production</p>
            }
            <p>{BASE_URL}</p>
        </div>
    )
}

