'use client'
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/products">
        Product List
      </Link>
    </main>
  )
}

