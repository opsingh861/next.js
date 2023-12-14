"use client"

export default function Button({ price }) {
    return (
        <button onClick={() => {
            alert(`The price is $${price}`)
        }}>
            Check Price
        </button>
    )
}